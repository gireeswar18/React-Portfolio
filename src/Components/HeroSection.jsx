import React from "react";
import { ReactTyped } from "react-typed";
import passpic from "../Assets/passpic.jpeg";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import instagram from '../Assets/instagram.png';

export default function HeroSection() {
  return (
    <section id="heroSection">
    <div className="hero-content-box">
      <div className="hero-content">
        <h5>Hi, I'm Gireeswar</h5>
        <p>
          <span className="hero-title-colored">Full Stack</span>
          <br></br>
          <span className="hero-title">Developer</span>
        </p>

        <div className="hero-desc">
          <ReactTyped
            strings={[
              "Skilled Java Full Stack Developer and a Computer Science Engineer with expertise in Java, Spring Boot, React JS and MySQL.<br />Ready to Colloborate!",
            ]}
            typeSpeed={20}
            contentType={"html"}
            showCursor={false}
          />
        </div>
        <div className="logos">
          <a href="https://www.linkedin.com/in/gireeswarcp18/" target="_blank" rel="noopener noreferrer"><img srcSet={linkedin} alt="linkedin" /></a>
          <a href="https://github.com/gireeswar18" target="_blank" rel="noopener noreferrer"><img srcSet={github} alt="linkedin" /></a>
          <a href="https://www.instagram.com/gireeswarcp.18/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer"><img srcSet={instagram} alt="linkedin" /></a>
        </div>
        
      </div>

      <div className="hero-image-section">
        <img srcSet={passpic} alt="pass" className="hero-image" />
      </div>
    </div>
    </section>
  );
}
