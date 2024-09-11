import React from 'react';
import './Footer.css';
import { SiSecurityscorecard } from "react-icons/si";
import LinkedIn from '../images/linkedin.png';
import Insta from '../images/instagram.png';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <h1 href="/"><SiSecurityscorecard className="footer-icon" /> SkillMetric</h1>
                </div>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: <a href="mailto:contact@skillmetric.com">contact@skillmetric.com</a></p>
                        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/lalitbade/" className="social-link"><img src={LinkedIn} alt="LinkedIn" /></a>
                            <a href="https://www.facebook.com" className="social-link"><img src={Facebook} alt="Facebook" /></a>
                            <a href="https://www.twitter.com" className="social-link"><img src={Twitter} alt="Twitter" /></a>
                            <a href="https://www.instagram.com/lalitbade13" className="social-link"><img src={Insta} alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SkillMetric | Designed By &lt;CodeCrafters/&gt;</p>
            </div>
        </footer>
    );
};

export default Footer;
