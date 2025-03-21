import React from "react";
import "../styles/services.css"; // CSS import kar rahe hain


const ServiceCard = () => {
  return (
    <section className="services">
      <div className="content">
      <h2>Our Services</h2>
      <p>This is our services</p>
      </div>
      <div className="services-container">
        <div className="service-block">
          <div className="service-card-1">
            <div className="service-content">
            <h3>Service 1</h3>
            <p>This is service 1</p>

            <div className="arow">
              <button>➾</button></div>
            </div>
            <div className="service-img">
              <img src=""/>
            </div>
          </div>
          <div className="service-card-2">
          <div className="service-content">
            <h3>Service 1</h3>
            <p>This is service 1</p>

            <div className="arow">
            <button>➾</button>
            </div>
            </div>
            <div className="service-img">
              <img src=""/>
            </div>
          </div>
        </div>
        <div className="service-block">

        <div className="service-card-1">
        <div className="service-content">
            <h3>Service 1</h3>
            <p>This is service 1</p>
            
            <div className="arow">
            <button>➾</button>
            </div>

            </div>
            <div className="service-img">
              <img src=""/>
            </div>
        </div>
        <div className="service-card-2">
        <div className="service-content">
            <h3>Service 1</h3>
            <p>This is service 1</p>
            
            <div className="arow">
            <button>➾</button>
            </div>
            
            </div>
            <div className="service-img">
              <img src=""/>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
