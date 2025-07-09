import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };

      // Update CSS custom properties for smooth performance
      container.style.setProperty('--mouse-x', `${mouseRef.current.x}%`);
      container.style.setProperty('--mouse-y', `${mouseRef.current.y}%`);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="home-hero-section home-hero-grid-container"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        minHeight: '80vh',
        background: 'white',
        overflow: 'hidden'
      }}
    >
      {/* Optimized Grid Background */}
      <div className="grid-layer" style={{ position: 'absolute', inset: 0 }} />
      
      {/* Mouse-Following Fog Effect */}
      <div className="fog-effect" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      
      {/* Ambient Fog Layers */}
      <div className="ambient-fog-1" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div className="ambient-fog-2" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      
      {/* Your Original Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', padding: '40px 24px 60px', textAlign: 'center' }}>
        <h1 className="home-hero-title">
        "Empowering <em> Brands with</em> AI-Powered <br />
         Design<em>&</em> Automation Solutions"
        </h1>
              
        <p className="home-hero-description">
        We're Velu – a creative digital agency helping startups & creators grow smarter through web, design, automation, and content systems powered by AI.
        </p>

        <div className="home-hero-cta-buttons">
        <div className="first-cta-button" id="cta-button">
            View Our Work <span>&rarr;</span>
        </div>
        <div className="second-cta-button" id="cta-button"> 
            Book a Free Call <span>&rarr;</span>
        </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;