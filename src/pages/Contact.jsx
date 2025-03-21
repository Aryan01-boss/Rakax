import React, { useState } from 'react';
import '../styles/contect.css';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('आपका संदेश सफलतापूर्वक भेज दिया गया है!');
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          
          <div className="contact-buttons">
            <a 
              href="https://wa.me/8209911670" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-button whatsapp-button"
            >
              <i className="icon whatsapp-icon"></i>
              Chat on WhatsApp
            </a>
            
            <a 
              href="mailto:ofheartvibes@gmail.com" 
              className="contact-button email-button"
            >
              <i className="icon email-icon"></i>
              Send an Email
            </a>
          </div>
          
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <i className="icon facebook-icon"></i>
              </a>
              <a href="https://instagram.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="icon instagram-icon"></i>
              </a>
              <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <i className="icon linkedin-icon"></i>
              </a>
              <a href="https://twitter.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <i className="icon twitter-icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;