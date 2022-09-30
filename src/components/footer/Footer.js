import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Features</a>
            <a href="#">&bull; Address</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Gallery</a>
            <a href="#">&bull; Cars</a>
            <a href="#">&bull; Subscribe</a>
            <a href="#">&bull; FAQ</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Ghana.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +233 24 385 2037.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@gckcarleasing.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.gckcarleasing.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" />
          <p className="u-text-small">&copy; Copyright 2022. GCKCarLeasing.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
