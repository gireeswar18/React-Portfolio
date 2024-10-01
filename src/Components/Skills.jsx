import React from "react";
import java from "../Assets/java.png";
import spring from '../Assets/spring.png';
import react from '../Assets/react.png';
import python from '../Assets/python.png';
import css from '../Assets/css-3.png';
import html from '../Assets/html-5.png';
import mysql from '../Assets/mysql.png';
import bootstrap from '../Assets/bootstrap.png';
import tailwind from '../Assets/tailwind.png';
import mongodb from '../Assets/mongodb.png';

export default function Skills() {
  return (
    <section id="skillsSection">
    <div>
      <div className="education-title">
        <h4>Skills</h4>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={java} alt="java" className="skill-img"></img>
          <p className="skill-text">Java</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={spring} alt="java" className="skill-img"></img>
          <p className="skill-text">Spring Boot</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={react} alt="java" className="skill-img"></img>
          <p className="skill-text">React JS</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={python} alt="java" className="skill-img"></img>
          <p className="skill-text">Python</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={mysql} alt="java" className="skill-img"></img>
          <p className="skill-text">MySQL</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={mongodb} alt="java" className="skill-img"></img>
          <p className="skill-text">Mongo DB</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={html} alt="java" className="skill-img"></img>
          <p className="skill-text">HTML</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={css} alt="java" className="skill-img"></img>
          <p className="skill-text">CSS</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={tailwind} alt="java" className="skill-img"></img>
          <p className="skill-text">Tailwind</p>
        </div>
      </div>
      <div className="skills-content-box">
        <div className="skill">
          <img srcSet={bootstrap} alt="java" className="skill-img"></img>
          <p className="skill-text">Bootstrap</p>
        </div>
      </div>
    </div>
    </section>
  );
}
