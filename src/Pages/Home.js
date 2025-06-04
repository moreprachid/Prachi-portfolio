import React from "react";
import "./Home.css";
import profileImg from "./profile.png";
// import Home from "./Pages/Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

function Home() {
  return (
    <div className="home">
      <h1 class="h1">Welcome to My Portfolio</h1>
      <p class="p">I am a BSc IT student | Web Developer | Tech Enthusiast</p>

      <div className="home-buttons">
        <div className="section-card home-profile-card">
          <div className="profile-container">
            <img src={profileImg} alt="Profile" className="profile-image" />

            <div className="profile-info">
              <h1 className="home-heading">Prachi Dipak More</h1>

              <p>
                Welcome to my personal portfolio! I love building elegant and
                user-friendly web experiences using modern tools like React,
                Tailwind CSS, and more.
              </p>

              {/* 🔷 Rectangle section */}
              <div className="rectangle-section">
                <h2 class=".rectangle-section">Introduction</h2>
                <p class=".rectangle-section p">
                  I’m a dedicated BSc IT student with a passion for creating
                  modern web applications. My goal is to become a full-stack
                  developer and contribute to impactful software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        {/* <Home /> */}
        <About />
        <Projects />
        <Contact />
        <Resume />
      </main>
    </div>
  );
}
 

export default Home;
