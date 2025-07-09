import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="float-item float-1">
          <svg width="150" height="150" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="15" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15"/>
            <circle cx="20" cy="20" r="8" fill="#000000" opacity="0.08"/>
          </svg>
        </div>
        <div className="float-item float-2">
          <svg width="1200" height="120" viewBox="0 0 60 60">
            <polygon points="30,10 50,45 10,45" fill="none" stroke="#000000" strokeWidth="1" opacity="0.12"/>
          </svg>
        </div>
        <div className="float-item float-3">
          <svg width="150" height="150" viewBox="0 0 50 50">
            <rect x="10" y="10" width="30" height="30" fill="none" stroke="#000000" strokeWidth="1" opacity="0.1" rx="5"/>
          </svg>
        </div>
        <div className="float-item float-4">
          <svg width="120" height="120" viewBox="0 0 35 35">
            <circle cx="17.5" cy="17.5" r="12" fill="none" stroke="#000000" strokeWidth="1" opacity="0.08"/>
            <circle cx="17.5" cy="17.5" r="4" fill="#000000" opacity="0.05"/>
          </svg>
        </div>
        <div className="float-item float-5">
          <svg width="150" height="150" viewBox="0 0 45 45">
            <rect x="8" y="8" width="29" height="29" fill="none" stroke="#000000" strokeWidth="1" opacity="0.1" rx="3"/>
          </svg>
        </div>
      </div>

      <div className="aboutcontainer">

        {/* Content */}
        <div className="content">
          <h2 className="headline">Who We Are</h2>
          <p className="description">
            Rakax is a full-service digital agency driven by innovation and performance. 
            We partner with ambitious startups and businesses to design, develop, and scale 
            custom digital solutions. With a team of passionate techies and creatives, 
            we turn your ideas into real digital products.
          </p>
          <button className="cta-button">
            <span>Learn More About Us</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* 3D Cards */}
        <div className="cards-container">
          <div className="card card-1">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#000000" strokeWidth="2"/>
              <path d="M20,30 L25,35 L40,20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Innovation</h3>
            <p>Cutting-edge solutions</p>
          </div>
          <div className="card card-2">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect x="10" y="15" width="40" height="30" fill="none" stroke="#000000" strokeWidth="2" rx="5"/>
              <path d="M20,25 L40,25 M20,35 L40,35" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3>Performance</h3>
            <p>Results that matter</p>
          </div>
          <div className="card card-3">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <polygon points="30,10 45,25 45,45 15,45 15,25" fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="round"/>
              <circle cx="30" cy="30" r="8" fill="none" stroke="#000000" strokeWidth="2"/>
            </svg>
            <h3>Partnership</h3>
            <p>Your success is ours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;