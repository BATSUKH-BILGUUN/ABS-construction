import React from "react";
import "./Footer.css";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from    
"react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                   <img 
                   src="/assets/logo.png"
                     alt="Company Logo"
                        className="footer-logo"
                     />
                    <p className="footer-company-name">ABS Company</p>
 </div>
 <div className="footer-nav">
    <a href="#home">Home</a>
    <a href="#project">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    </div>
    <div className="footer-contact"></div>
    <p><FaPhoneAlt /> +123 456 7890</p>
    <p><FaEnvelope /> Abs@Mail.com</p>
    <p><FaMapMarkerAlt /> 123 Main St, City, Country</p>
    </div>
    <div className="footer-bottom">
        <p>ABS Company. All rights reserved.</p>
    </div>
    </footer>
    );
};
export default Footer;