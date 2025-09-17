'use client';

import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src="/footer-logo.png"
                alt="Florigas"
                width={120}
                height={40}
                className="logo-image"
              />
            </div>
            <p className="footer-description">
              At Florigas Inc, we pride ourselves on offering top-notch customer care and professional expertise as your full-service propane supplier in Florida.
            </p>
          </div>

          {/* How we can help */}
          <div className="footer-column">
            <h3 className="footer-column-title">How we can help?</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Faster Delivery Times</a></li>
              <li><a href="#" className="footer-link">Safety Inspections</a></li>
              <li><a href="#" className="footer-link">Experienced Drivers</a></li>
              <li><a href="#" className="footer-link">Trusted Since 1995</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-column-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Residential</a></li>
              <li><a href="#" className="footer-link">Commercial</a></li>
              <li><a href="#" className="footer-link">Sell Propane</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
            </ul>
          </div>

          {/* About florigas */}
          <div className="footer-column">
            <h3 className="footer-column-title">About florigas</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Find A Location</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © FLORIGAS 2024. ALL RIGHT RESERVED
        </p>
      </div>
    </footer>
  );
}
