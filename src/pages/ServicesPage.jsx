import React, { useState, useEffect } from 'react';
import './ServicesPage.css';


const ServicesPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.servicepage-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'web-dev',
      icon: '💻',
      title: 'Web & Software Development',
      description: 'Modern, secure, and scalable digital products tailored to your business needs.',
      features: [
        'Business Websites - Static, dynamic, or CMS-based',
        'E-commerce Websites - Custom-built stores',
        'Web Applications - CRM, ERP, Admin Panels',
        'SaaS Product Development',
        'Custom Software Solutions'
      ]
    },
    {
      id: 'mobile-dev',
      icon: '📱',
      title: 'Mobile App Development',
      description: 'High-performance, user-friendly apps for Android, iOS & cross-platform needs.',
      features: [
        'Android Apps (Java/Kotlin)',
        'iOS Apps (Swift)',
        'Cross-platform Apps (React Native/Flutter)',
        'Progressive Web Apps (PWA)',
        'App-like experience across all devices'
      ]
    },
    {
      id: 'ui-ux',
      icon: '🎨',
      title: 'UI/UX & Creative Design',
      description: 'Visually stunning and user-friendly designs to boost engagement and brand value.',
      features: [
        'UI/UX Design for Web & Mobile',
        'Wireframing & Prototyping',
        'Brand Identity & Logo Design',
        'Marketing Collaterals',
        'Social Media Creatives & Product Packaging'
      ]
    },
    {
      id: 'digital-marketing',
      icon: '📈',
      title: 'Digital Marketing & Growth',
      description: 'Reach your target audience and convert them into loyal customers.',
      features: [
        'Search Engine Optimization (SEO)',
        'Google Ads Campaigns',
        'Social Media Marketing',
        'Influencer & Content Marketing',
        'Email & WhatsApp Marketing'
      ]
    },
    {
      id: 'ecommerce',
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Launch, manage, and grow your online business with robust e-commerce solutions.',
      features: [
        'Shopify & WooCommerce Store Setup',
        'Custom E-commerce Website Development',
        'Product Listing & Optimization',
        'Secure Payment Gateway Integration',
        'Order & Inventory Management System'
      ]
    },
    {
      id: 'cloud-hosting',
      icon: '☁️',
      title: 'Cloud & Hosting Services',
      description: 'Robust and secure cloud infrastructure to keep your business running 24/7.',
      features: [
        'Web Hosting & Maintenance Plans',
        'Domain Registration & DNS Setup',
        'Cloud Setup on AWS, GCP, or DigitalOcean',
        'SSL Certificates & Firewall Protection',
        'Server Setup & Management'
      ]
    },
    {
      id: 'cybersecurity',
      icon: '🔒',
      title: 'Cybersecurity Services',
      description: 'Your business deserves top-tier security with comprehensive protection.',
      features: [
        'Website Security & SSL Setup',
        'Penetration Testing',
        'Secure Login & Authentication Systems',
        'Data Privacy & Compliance Audits',
        'Vulnerability Assessment'
      ]
    },
    {
      id: 'data-analytics',
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Track, understand, and optimize your business performance with data insights.',
      features: [
        'Google Analytics Setup',
        'User Behavior Tracking (Heatmaps, Funnels)',
        'Business Intelligence Dashboards',
        'Monthly Performance Reports',
        'Optimization Strategies'
      ]
    },
    {
      id: 'ai-automation',
      icon: '🤖',
      title: 'AI, Automation & Chatbots',
      description: 'Boost productivity with intelligent automation and smart systems.',
      features: [
        'AI Chatbots for Website & WhatsApp',
        'Business Process Automation',
        'Automated Lead Generation Workflows',
        'Predictive Analytics & Reporting',
        'Smart Business Intelligence'
      ]
    },
    {
      id: 'content-video',
      icon: '🎬',
      title: 'Content & Video Creation',
      description: 'Tell your story through visually powerful content that connects.',
      features: [
        'Product Demos & Promo Videos',
        'Reels & Short-Form Video Editing',
        'Motion Graphics & Animations',
        'Content Strategy & Copywriting',
        'Brand Storytelling'
      ]
    },
    {
      id: 'business-consulting',
      icon: '🧠',
      title: 'Business Strategy & Consulting',
      description: 'We don\'t just deliver services – we help you grow with strategic guidance.',
      features: [
        'Digital Strategy & Execution Planning',
        'Brand Naming & Positioning',
        'MVP Roadmap for Startups',
        'Tech Stack Selection & Guidance',
        'Startup Launch Support & Ongoing Consulting'
      ]
    }
  ];

  return (
    <div className="services-root">
      {/* Subtle Background Pattern */}
      <div className="background-pattern">
        <div className="background-pattern-inner"></div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          {/* Floating Elements */}
          <div className="hero-floating">
            <div className="hero-rocket">🚀</div>
            <div className="hero-dot hero-dot-1"></div>
            <div className="hero-dot hero-dot-2"></div>
          </div>

          <h1 className="hero-title">
            <span className="slide-in-left">Our</span>
            <span className="slide-in-right">Core</span>
            <span className="slide-in-left">Services</span>
          </h1>

          <div className="hero-desc-container">
            <p className="hero-desc">
              <span className="hero-desc-bold">Helping brands go digital</span> with powerful, modern, and scalable tech solutions.
            </p>
            {/* Decorative Lines */}
            <div className="hero-line hero-line-left"></div>
            <div className="hero-line hero-line-right"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="servicespage-section">
        <div className="masonry-grid">
          {services.map((servicepage, index) => (
            <div
              key={servicepage.id}
              id={servicepage.id}
              className={`servicepage-card group ${
                visibleSections.has(servicepage.id) ? 'slide-up' : 'hidden-card'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(servicepage.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="servicepage-card-inner">
                {/* Animated Border */}
                <div className="servicepage-card-border"></div>
                {/* Background Pattern on Hover */}
                <div className="servicepage-card-bg-pattern">
                  <div className="servicepage-card-bg-inner"></div>
                </div>
                {/* Icon Section */}
                <div className="servicepage-card-icon-section">
                  <div className="servicepage-card-icon-wrapper">
                    <div className="servicepage-card-icon">{servicepage.icon}</div>
                    <div className="servicepage-card-icon-bg"></div>
                  </div>
                  {/* Floating Dots */}
                  <div className="servicepage-card-floating-dots">
                    <div className="servicepage-card-dot"></div>
                  </div>
                </div>
                {/* Content */}
                <div className="servicepage-card-content">
                  <h3 className="servicepage-card-title">{servicepage.title}</h3>
                  <p className="servicepage-card-desc">{servicepage.description}</p>
                  {/* Features List */}
                  <div className="servicepage-card-features">
                    {servicepage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="servicepage-card-feature">
                        <div className="servicepage-card-feature-dot"></div>
                        <span className="servicepage-card-feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Hover Effect Lines */}
                <div className="servicepage-card-bottom-line"></div>
                <div className="servicepage-card-right-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fab-container">
        <button className="fab-btn">
          <span className="fab-btn-content">
            <span className="fab-btn-icon">✨</span>
            Get Started
            <span className="fab-btn-arrow">→</span>
          </span>
        </button>
      </div>

      {/* Geometric Decorations */}
      <div className="geo-decoration geo-decoration-1"></div>
      <div className="geo-decoration geo-decoration-2"></div>
      <div className="geo-decoration geo-decoration-3"></div>
    </div>
  );
};

export default ServicesPage;