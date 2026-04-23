import { useState, useEffect } from "react";
import { useNameAnimation } from "../hooks/useNameAnimation";
import { useScrollReveal } from "../hooks/useScrollReveal";
import profile from "../assets/profile.jpeg";
import "./home.css";
import { FaDownload, FaUserTie } from "react-icons/fa";


// 🔥 ICONS
import {
  FaReact,
  FaPaintBrush,
  FaCode,
  FaCogs,
  FaServer,
  FaLaptopCode
} from "react-icons/fa";

const Home = ({
  name = "Hi I'm Nazrun",
  description = "I build modern, animated & responsive websites using MERN stack & front-end technologies.",
  cvLink = "/ziya.pdf",
}) => {

  // 🔥 ROLES WITH ICONS
  const roles = [
    { text: "MERN Stack Developer", icon: <FaReact /> },
    { text: "Frontend Developer", icon: <FaPaintBrush /> },
    { text: "UI/UX Designer", icon: <FaCode /> },
    { text: "Software Engineer", icon: <FaCogs /> },
    { text: "Backend Developer", icon: <FaServer /> },
    { text: "Full Stack Developer", icon: <FaLaptopCode /> }
  ];

  // 🔥 SKILL GROUPS
  const skillGroups = [
    "HTML • CSS • JavaScript",
    "React • Node • MongoDB",
    "Python • Java • C++ • PHP"
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [currentSkills, setCurrentSkills] = useState(skillGroups[0]);

  const animatedName = useNameAnimation(name);
  useScrollReveal();

  // 🔥 ROLE ROTATION
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 SKILL ROTATION
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % skillGroups.length;
      setCurrentSkills(skillGroups[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home reveal">
      <div className="home-container">

        {/* LEFT */}
        <div className="home-left">

          {/* NAME */}
          <h1 className="name">
            {animatedName}
            <span className="cursor">|</span>
          </h1>

          {/* ROLE */}
          <h4 className="role">
            <span className="role-icon">{currentRole.icon}</span>
            {currentRole.text}
          </h4>

          {/* DESCRIPTION */}
          <p className="desc">{description}</p>

          {/* SKILLS */}
          <p className="skills1">{currentSkills}</p>

          {/* BUTTONS */}
         <div className="buttons">
 
<button className="explore-btn">
  <FaUserTie /> Hire Me
</button>

<a href={cvLink} download className="btn outline glow-btn">
  <FaDownload /> Download CV
</a>
</div>

        </div>

        {/* RIGHT */}
       <div className="home-right">
  <div className="img-box-home">
    <img src={profile} alt="Profile" className="profile-home" />
  </div>
</div>

      </div>
    </section>
  );
};

export default Home;