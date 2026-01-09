"use client"

import Image from "next/image"
import Link from "next/link"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section: Logo and Description */}
        <div className="footer-brand-section">
          <div className="footer-logo">
            <Image
              src="/footer-logo.png"
              alt="FloriGas"
              width={120}
              height={40}
              className="logo-image"
            />
          </div>
          <p className="footer-description">
            At FloriGas Inc, we pride ourselves on offering top-notch customer
            care and professional expertise as your full-service propane
            supplier in Florida.
          </p>
        </div>

        {/* Bottom Section: Three Columns */}
        <div className="footer-columns">
          {/* Powered by INOVAQO */}
          <div className="footer-column footer-powered-by">
            <a
              href="https://inovaqo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-inovaqo-logo"
            >
              <Image
                src="/inovaqo-logo.svg"
                alt="Inovaqo"
                width={136}
                height={56}
                className="inovaqo-logo-image"
              />
            </a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-column-title">Services</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="residential"
                  className="footer-link"
                >
                  Residential
                </a>
              </li>
              <li>
                <a
                  href="commercial"
                  className="footer-link"
                >
                  Commercial
                </a>
              </li>
              <li>
                <a
                  href="sell-propane"
                  className="footer-link"
                >
                  Sell Propane
                </a>
              </li>
              <li>
                <a
                  href="about"
                  className="footer-link"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* About florigas */}
          <div className="footer-column">
            <h3 className="footer-column-title">About FloriGas</h3>
            <ul className="footer-links">
              <li>
                <Link
                  href="/"
                  className="footer-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/find-location"
                  className="footer-link"
                >
                  Find A Location
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="footer-link"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile: Powered by INOVAQO - Centered below columns */}
        <div className="footer-powered-by-mobile">
          <a
            href="https://inovaqo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-inovaqo-logo"
          >
            <Image
              src="/inovaqo-logo.svg"
              alt="Inovaqo"
              width={136}
              height={56}
              className="inovaqo-logo-image"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © FloriGas {new Date().getFullYear()}. ALL RIGHT RESERVED
        </p>
      </div>
    </footer>
  )
}
