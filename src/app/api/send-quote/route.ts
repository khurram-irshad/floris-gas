import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, phone } = await request.json();

    // Validate required fields
    if (!firstName || !email || !phone) {
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
        user: emailUser,
        pass: emailPass, 
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: 'info@florigas.us',
      subject: 'New Quote Request from FlorisGAS Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4168FC; border-bottom: 2px solid #4168FC; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Customer Information:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${phone}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2;">
              <strong>📅 Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This quote request was submitted through the FlorisGAS website contact form.
            </p>
          </div>
        </div>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
New Quote Request from FlorisGAS Website

Customer Information:
Name: ${firstName}
Email: ${email}
Phone: ${phone}

Submitted: ${new Date().toLocaleString()}

This quote request was submitted through the FlorisGAS website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Quote request sent successfully!' },
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
        error: 'Failed to send quote request. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
