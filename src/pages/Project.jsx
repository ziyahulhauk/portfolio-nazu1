import "./projects.css";
import image from "../assets/hero.png";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Smart Attendance System",
    desc: "This project solves the manual attendance problem using biometrics.",
    img: image,
    status: "done",
    skills: ["React Native", "Firebase", "Python",],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    desc: "Full stack MERN shopping app with cart, login and payment UI.",
    img: image,
    status: "done",
    skills: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Modern animated portfolio with smooth UI.",
    img: image,
    status: "done",
    skills: ["React", "CSS", "Animations"],
    github: "#",
    demo: "#",
  },
  { id: 4, title: "Weather App", desc: "", img: image, link: "#", status: "processing", }, { id: 5, title: "Blog Platform", desc: "", img: image, link: "#", status: "processing", },
  {
    id: 4,
    title: "Chat App",
    img: image,
    status: "processing",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">

      <h2 className="title-project">
        My <span>Projects</span>
      </h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <div className="img-box">
              <img src={project.img} alt={project.title} />
            </div>

            <h3>{project.title}</h3>

            {project.status === "processing" ? (
              <p className="processing-text">🚧 Processing...</p>
            ) : (
              <>
                <p>{project.desc}</p>

                <a href={project.link} className="view-btn"   onClick={() => setSelectedProject(project)}target="_blank" rel="noopener noreferrer" > View Project </a>
                
              </>
            )}

          </div>
        ))}
      </div>

      {/* 🔥 MODAL POPUP */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >

            {/* ❌ CLOSE BUTTON */}
            <span
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </span>

            <img
              src={selectedProject.img}
              alt=""
              className="modal-img"
            />

            <div className="modal-content">
              <h2>{selectedProject.title}</h2>

                <p>{selectedProject.desc}</p>
              <div className="soft-skills">
                {selectedProject.skills?.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>


              <div className="modal-buttons">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="explore-btn"
                >
                  🚀 Live Demo
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="explore-btn"
                >
                  💻 GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;