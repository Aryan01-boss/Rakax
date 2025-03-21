import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <>
     
    <section className="hero">
     <p className="backgraound-text">RakaX.Services</p>
     
     <div className="hero-upper-content">
      <div className="hero-content">
        <h2>Welcome to Our Website</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate minus nostrum omnis voluptatibus. Suscipit quas, mollitia iure laboriosam repudiandae maiores expedita pariatur, alias exercitationem placeat, commodi perspiciatis nulla voluptates!</p>
        <button className="hero-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="src/assets/images/hero_iamge.png" alt="Hero" />
      </div>
      </div>
    </section>
    </>
    
  );
};

export default HeroSection;
