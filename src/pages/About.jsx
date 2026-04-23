import React from "react";
import profile from "../assets/profile.jpeg";
import "./about.css";
import { MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const aboutData = {
  name: "Nazrun",
  title: "Full Stack Developer",

  paragraphs: [
    <>
      Hi, I'm Nazrun — a passionate <span>Full Stack Developer</span> who loves
      building <span>modern</span> and <span>responsive</span> web applications.
    </>,

    <>
      I work with technologies like <span>React</span>, <span>Node.js</span>,{" "}
      <span>MongoDB</span> and focus on <span>clean UI</span> and{" "}
      <span>smooth animations</span>.
    </>,

    <>
      Currently, I am improving my skills, building{" "}
      <span>real-world projects</span>, and looking for{" "}
      <span>freelance</span> and <span>job opportunities</span>.
    </>,
  ],

  socials: [
    { icon: <FaGithub />, link: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
    { icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
    { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
    { icon: <FaWhatsapp />, link: "https://wa.me/919999999999" },
    { icon: <MdEmail />, link: "mailto:your@email.com" },
  ],
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* IMAGE */}
        <div className="about-image">
          <div className="img-box-about">
            <img src={profile} alt="profile-about" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="about-content">
          
          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          {/* PARAGRAPHS */}
          {aboutData.paragraphs.map((para, index) => (
            <p key={index} className="about-text">
              {para}
            </p>
          ))}

          {/* BUTTONS */}
          <div className="explore-div">
            <button className="explore-btn">Explore More</button>
            <button className="explore-btn">Hire Me</button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="about-socials">
            {aboutData.socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;