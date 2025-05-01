import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <img
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt="Profile"
                className="about-profile-image"
            />
            <h1 className="about-name">Aditya Raj Srivastava</h1>
            <p className="about-email">
                Email: <a href="mailto:aditya@example.com" className="about-email">aditya@example.com</a>
            </p>
            <div className="about-links">
                <a
                    href="https://github.com/adityarajsrivastava"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-link"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/adityarajsrivastava"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-link"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default About;
