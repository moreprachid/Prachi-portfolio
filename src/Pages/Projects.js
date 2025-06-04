import React from 'react';
// import logo from "/logo.jpg";
// import portfoliologo from "./portfolio logo.jpg";
import './Project.css';



function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">

        {/* 🔹 Project 1 - Portfolio */}
        <div className="project-card">
          <img src='portfolioLogo.jpg'alt="Portfolio Website" className="project-image" />
          <h2>Personal Portfolio Website</h2>
          <p>
            A responsive personal portfolio built using React.js. It features multiple pages including Home, About, Projects, and Contact. Styled with custom CSS.
          </p>
          
        </div>

        {/* 🔹 Project 2 - Food Share Network */}
        <div className="project-card">
          <img src='logo.jpg' alt="Food Share Network" className="project-image" />
          <h2>Food Share Network</h2>
          <p>
            A community-based platform that allows users to share excess food with those in need. Built with React, Firebase, and Google Maps API.
          </p>
          
        </div>

        

      </div>
    </div>
  );
}

export default Projects;