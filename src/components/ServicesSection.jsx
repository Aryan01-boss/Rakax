import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web & Software Development',
      tagline: 'We design and develop stunning, fast, and scalable digital products.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      tagline: 'Custom-built mobile experiences that engage and convert.'
    },
    {
      icon: '🎨',
      title: 'UI/UX & Creative Design',
      tagline: 'Designs that are not just beautiful, but also purposeful.'
    },
    {
      icon: '📈',
      title: 'Digital Marketing & Growth',
      tagline: 'Turn visibility into customers with our smart marketing strategies.'
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      tagline: 'Launch and scale your online store with expert support.'
    },
    {
      icon: '☁️',
      title: 'Cloud & Hosting Services',
      tagline: 'Reliable, fast & secure cloud infrastructure.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Services',
      tagline: 'Protect your digital presence from threats.'
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      tagline: 'Make data-backed decisions for rapid growth.'
    },
    {
      icon: '🤖',
      title: 'AI, Automation & Chatbots',
      tagline: 'Smart tech to boost your productivity.'
    },
    {
      icon: '🎬',
      title: 'Content & Video Creation',
      tagline: 'Tell your brand story with compelling visuals.'
    },
    {
      icon: '🧠',
      title: 'Business Strategy & Consulting',
      tagline: 'From idea to execution – we guide you throughout.'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            We provide end-to-end digital solutions that scale your business.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-tagline">{service.tagline}</p>
            </div>
          ))}
        </div>
        
        <div className="explore-services-section">
          <a href='/services'>
          <button className="explore-btn">
            Explore All Services
            <span className="arrow">→</span>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};


export default ServicesSection;
