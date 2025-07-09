import React, { useState } from 'react';
import './FeedbackSection.css';

const feedbacks = [
  {
    text: "NexArch exceeded my expectations! We commissioned them to design and build a sustainable home for our family and the result was amazing. They implemented advanced smart home technology, integrated a solar panel system and created green areas around the house.",
    client: "Jeremy",
    role: "Manager from LA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "NexArch is truly the company of the future. We collaborated with them on several green projects in our city and the results have always been spectacular. The team of architects and landscape designers created innovative projects that delight everyone.",
    client: "Helen",
    role: "City Mayor",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
  };

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="feedback-section">
      <h2 className="section-title">
        Recent <em>feedback</em> from our clients
      </h2>
      <div className="feedback-carousel">
        <button className="carousel-nav left" onClick={prevFeedback} aria-label="Previous feedback">&#60;</button>
        <div className="feedback-card">
          <p className="feedback-text">{feedbacks[currentIndex].text}</p>
          <div className="feedback-client">
            <img src={feedbacks[currentIndex].avatar} alt={feedbacks[currentIndex].client} className="client-avatar" />
            <div>
              <p className="client-name">{feedbacks[currentIndex].client}</p>
              <p className="client-role">{feedbacks[currentIndex].role}</p>
            </div>
          </div>
        </div>
        <button className="carousel-nav right" onClick={nextFeedback} aria-label="Next feedback">&#62;</button>
      </div>
    </section>
  );
}

export default FeedbackSection;
