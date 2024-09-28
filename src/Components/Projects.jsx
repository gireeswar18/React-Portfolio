import React from "react";
import githubWhite from "../Assets/githubWhite.png";

export default function Projects() {

  const handleClick1 = () => {
    window.open('https://jobify-by-gireeswar.vercel.app/', '_blank');
  };
  const handleClick2 = () => {
    window.open('https://gemini-clone-by-gireeswar.netlify.app/', '_blank');
  };
  const handleClick3 = () => {
    window.open('https://spotify-clone-by-gireeswar.netlify.app/', '_blank');
  };
  return (
    <div>
      <div className="education-title">
        <h4>Projects</h4>
      </div>
      <div class="container">
        <div class="row">
          {/* Project 1 */}
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="p-4 border project">
              <p className="project-num">Project 1</p>
              <p className="project-title" onClick={handleClick1} style={{cursor: "pointer", textDecoration: "underline"}}>Job Application Platform</p>
              <p className="mt-5">
                Developed a job application platform with user authentication,
                allowing users to post and apply for jobs using Spring Boot,
                Mongo DB Atlas, Tailwind and React
              </p>
              <a
                href="https://github.com/gireeswar18/Job-app-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <button className="git-btn">
                  <img
                    srcSet={githubWhite}
                    alt="github"
                    className="git-btn-logo"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="p-4 border project">
              <p className="project-num">Project 2</p>
              <p className="project-title" onClick={handleClick2} style={{cursor: "pointer", textDecoration: "underline"}}>Gemini Clone</p>
              <p className="mt-5">
                Developed a Gemini clone application using React and the Gemini
                API, incorporating features such as voice search and a
                user-friendly sidebar for navigation.
              </p>
              <a
                href="https://github.com/gireeswar18/Gemini-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <button className="git-btn">
                  <img
                    srcSet={githubWhite}
                    alt="github"
                    className="git-btn-logo"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="p-4 border project">
              <p className="project-num">Project 3</p>
              <p className="project-title">Library Management System</p>
              <p className="mt-5">
                Developed a Library Management System using Java, Spring Boot
                and MySQL. Created RESTful APIs for adding books, authors,
                languages, and users.
              </p>
              <a
                href="https://github.com/gireeswar18/Digital-Library-Spring-Application"
                target="_blank"
                rel="noreferrer"
              >
                <button className="git-btn">
                  <img
                    srcSet={githubWhite}
                    alt="github"
                    className="git-btn-logo"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="p-4 border project">
              <p className="project-num">Project 4</p>
              <p className="project-title" onClick={handleClick3} style={{cursor: "pointer", textDecoration: "underline"}}>Spotify Frontend Clone</p>
              <p className="mt-5">
              Built a stunning Spotify frontend clone using React and Tailwind. Integrated music player functionalities, including play/pause and track navigation.
              </p>
              <a
                href="https://github.com/gireeswar18/Spotify-clone"
                target="_blank"
                rel="noreferrer"
              >
                <button className="git-btn">
                  <img
                    srcSet={githubWhite}
                    alt="github"
                    className="git-btn-logo"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="p-4 border project">
              <p className="project-num">Project 5</p>
              <p className="project-title">Railway Ticket Booking System</p>
              <p className="mt-5">
                Developed a Java Railway Ticket Booking Application with a
                user-friendly command line interface for easy booking,
                cancellation, and viewing of tickets.
              </p>
              <a
                href="https://github.com/gireeswar18/RailwayTicketBookingApplication"
                target="_blank"
                rel="noreferrer"
              >
                <button className="git-btn">
                  <img
                    srcSet={githubWhite}
                    alt="github"
                    className="git-btn-logo"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="p-4 border project">
              <p className="project-num">Project 6</p>
              <p className="project-title">Employee Management Application</p>
              <p className="mt-5">
                Developed using Java, Spring Boot, React, MySQL, HTML, CSS, and
                Bootstrap. Implemented user registration, login, and profile
                management features.
              </p>
              <a
                href="https://github.com/gireeswar18/EmployeeManagerUsingSpringAndReact"
                target="_blank"
                rel="noreferrer"
              >
                <button className="git-btn">
                  <img
                    srcSet={githubWhite}
                    alt="github"
                    className="git-btn-logo"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
