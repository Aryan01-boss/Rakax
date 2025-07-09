import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    id: 1,
    title: 'FUTURECO BUSINESS CENTER',
    description: "It's an innovative business center created with a focus on sustainable development.",
    date: '15 June',
    type: 'Business Center',
    place: 'Downtown Business District',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'INFINITY GREEN RESTAURANT',
    description: 'A unique solar-powered restaurant with a combination of green spaces.',
    date: '15 June',
    type: 'Restaurant',
    place: 'Downtown Business District',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'RENEWASPHERE DISTRICT',
    description: 'A sustainable area with a full recycling cycle and a focus on renewable energy.',
    date: '15 June',
    type: 'District',
    place: 'Downtown Business District',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-tags">
              <span className="tag">Date: {project.date}</span>
              <span className="tag">Type: {project.type}</span>
              <span className="tag">Place: {project.place}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <button className="start-project-button">START A PROJECT &rarr;</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
