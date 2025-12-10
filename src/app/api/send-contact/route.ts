import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phoneNumber, service, message } = await request.json();

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }


    // Try multiple environment variable naming conventions
    const emailUser = process.env.EMAIL_USER || process.env.NEXT_PUBLIC_EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.NEXT_PUBLIC_EMAIL_PASS;

    // Check if environment variables exist
    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact administrator.',
          debug: {
            emailUserExists: !!emailUser,
            emailPassExists: !!emailPass,
            allEnvKeys: Object.keys(process.env),
            emailRelatedKeys: Object.keys(process.env).filter(key => key.toLowerCase().includes('email'))
          }
        },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser, // Your Gmail address
        pass: emailPass, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: 'mrrana0795@gmail.com',
      subject: 'New Contact Form Submission from FlorisGAS Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4168FC; border-bottom: 2px solid #4168FC; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Customer Information:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Full Name:</td>
                <td style="padding: 8px 0; color: #333;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Service:</td>
                <td style="padding: 8px 0; color: #333;">${service}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h4 style="color: #856404; margin-top: 0;">Message:</h4>
            <p style="color: #856404; margin: 0; line-height: 1.5;">${message}</p>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2;">
              <strong>📅 Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This contact form was submitted through the FlorisGAS website.
            </p>
          </div>
        </div>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
New Contact Form Submission from FlorisGAS Website

Customer Information:
Full Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber}
Service: ${service}

Message:
${message}

Submitted: ${new Date().toLocaleString()}

This contact form was submitted through the FlorisGAS website.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Contact form submitted successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    
    return NextResponse.json(
      { 
        error: 'Failed to send contact form. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
