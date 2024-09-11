import React from 'react';
import './LandingPage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BanImg from '../images/andrew-neel-ute2XAFQU2I-unsplash.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faChartLine, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <div className="home-page">
                {/* Banner Section */}
                <div className="banner-container">
                    <img src={BanImg} alt="Banner" className="banner-img" />
                    <div className="overlay"></div>
                    <div className="text-container">
                        <h1>Unlock Your Competency with Smart Diagnostics!</h1>
                        <p>Analyze your skills, enhance your profile, and boost your career potential.</p>
                        <a href="/login" className="btn-main bg-light text-black">Get Started</a>
                    </div>
                </div>
                
                {/* Features Section */}
                <section className="features-section">
                    <div className="container">
                        <div className="feature">
                            <FontAwesomeIcon icon={faBrain} className="feature-icon" />
                            <h2>Smart Competency Analysis</h2>
                            <p>Evaluate your skills and competencies with our AI-powered diagnostic tools.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
                            <h2>Profile Score Calculation</h2>
                            <p>Receive a detailed profile score that reflects your strengths and areas for improvement.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faUserCheck} className="feature-icon" />
                            <h2>Custom Reports</h2>
                            <p>Get personalized reports to help you understand your progress and career trajectory.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials-section">
                    <div className="container">
                        <h2>What Our Candidates Say</h2>
                        <div className="testimonial">
                            <p>"This tool helped me realize my potential and prepare better for job opportunities!"</p>
                            <h5>- John D.</h5>
                        </div>
                        <div className="testimonial">
                            <p>"The profile score and personalized report gave me clear insights into my skills."</p>
                            <h5>- Sarah L.</h5>
                        </div>
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="cta-section">
                    <div className="container">
                        <h2>Start Your Competency Journey Today!</h2>
                        <p>Join thousands of candidates improving their career profiles with our diagnostic tools.</p>
                        <a href="/signup" className="btn-main bg-light text-black">Sign Up Now</a>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
