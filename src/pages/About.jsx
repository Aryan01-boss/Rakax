import React from "react";
import "../styles/about.css"; // CSS import

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to delivering top-quality web
            solutions. Our goal is to help businesses establish a strong online
            presence through modern and user-friendly websites.
          </p>
          <p>
            With expertise in full-stack development, we build scalable and
            high-performance web applications tailored to your needs.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/about-us.jpg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;
