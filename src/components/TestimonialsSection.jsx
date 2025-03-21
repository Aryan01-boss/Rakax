// TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';
import '../styles/testimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      image: "/api/placeholder/80/80",
      text: "Working with this team transformed our digital presence completely. Their attention to detail and commitment to excellence is unmatched in the industry.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, Innovate Solutions",
      image: "/api/placeholder/80/80",
      text: "The level of professionalism and technical expertise exceeded our expectations. They delivered our project ahead of schedule and the results have been outstanding.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager, NextGen",
      image: "/api/placeholder/80/80",
      text: "Their strategic approach and creative solutions helped us achieve a 200% increase in user engagement. I can't recommend them highly enough.",
      rating: 4
    },
    {
      id: 4,
      name: "David Williams",
      position: "CTO, Future Systems",
      image: "/api/placeholder/80/80",
      text: "An exceptional team that consistently delivers high-quality work. Their collaborative approach made them feel like an extension of our internal team.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleDotClick = (index) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-bg-circle"></div>
      <div className="testimonials-bg-shape"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What our clients say about our services</p>
        </div>
        
        <div className="testimonials-container">
          <button 
            className="nav-btn prev-btn" 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            &#10094;
          </button>
          
          <div className="testimonials-wrapper">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`} 
                key={testimonial.id}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                  opacity: index === activeIndex ? 1 : 0
                }}
              >
                <div className="card-header">
                  <div className="quote-icon">"</div>
                  <div className="rating">{renderStars(testimonial.rating)}</div>
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-author">
                  <div className="author-image-container">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="author-image" 
                    />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="nav-btn next-btn" 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            &#10095;
          </button>
          
          <div className="navigation-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;