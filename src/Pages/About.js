import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I'm a <span className="highlight"> Prachi Dipak More </span>  BSc IT student passionate about web development and creating meaningful digital solutions. 
        I enjoy solving problems through code and continuously learning new technologies.
      </p>

      <div className="about-sections">

        <div className="about-card skills">
          <h2>Skills</h2>
          <p>
            Proficient in front-end technologies like HTML, CSS, JavaScript, and React.js. 
            Comfortable with Git version control, basic Python scripting, and SQL databases. 
            Currently learning backend with Node.js and Express.
          </p>
        </div>

        
        <div className="about-card education">
          <h2>Education</h2>
          <p>
            Completed a Bachelor of Science in Information Technology (2022–2025) from Konark Ideal College(Mumbai University). 
            Achieved distinctions in Web Programming and Database Management courses.
          </p>
        </div>

        <div className="about-card goals">
          <h2>Goals</h2>
          <p>
            I aim to become a full-stack web developer, contribute to impactful software projects, 
            and explore cloud computing. My goal is to work in a tech company that promotes learning, 
            innovation, and growth.
          </p>
        </div>

        <div className="about-card techstack">
          <h2>Tech Stack</h2>
          <p>
            <strong>Frontend:</strong> HTML, CSS, JavaScript, React<br />
            <strong>Backend:</strong> Node.js (in progress), Firebase<br />
            <strong>Database:</strong> MySQL, MongoDB (basics)<br />
            <strong>Tools:</strong> Git, GitHub, VS Code 
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;