import "./skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaCertificate,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

/* 🔥 TECH SKILLS */
const techSkills = [
  { name: "HTML", icon: <FaHtml5 />, percent: 95 },
  { name: "CSS", icon: <FaCss3Alt />, percent: 90 },
  { name: "JavaScript", icon: <FaJs />, percent: 85 },
  { name: "React", icon: <FaReact />, percent: 80 },
  { name: "Node.js", icon: <FaNodeJs />, percent: 75 },
  { name: "Express", icon: <SiExpress />, percent: 70 },
  { name: "MongoDB", icon: <SiMongodb />, percent: 75 },
  { name: "Python", icon: <FaPython />, percent: 70 },
  { name: "Java", icon: <FaJava />, percent: 65 },
  { name: "PHP", icon: <FaPhp />, percent: 60 },
];

/* 💡 SOFT SKILLS */
const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Leadership",
  "Adaptability",
];

/* 🎓 CERTIFICATIONS */
const certifications = [
  {
    id: 1,
    name: "Full Stack Web Development",
    company: "Udemy",
    link: "#",
  },
  {
    id: 2,
    name: "React Developer Certification",
    company: "Coursera",
    link: "#",
  },
  {
    id: 3,
    name: "Python Programming Language",
    company: "Infosys Springboard",
    link: "#",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <h2 className="skills-title">
        My <span>Skills</span>
      </h2>

      <p className="skills-desc">
        I have strong knowledge in <span>Frontend</span>, <span>Backend</span> and
        also good <span>problem-solving & communication skills</span>.
      </p>

      {/* 🔥 TECH SKILLS */}
      <div className="skills-grid">
        {techSkills.map((skill, i) => (
          <div key={i} className="skill-card">

            <div className="skill-header">
              <span className="icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <span className="percent">{skill.percent}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>

      {/* 💡 SOFT SKILLS */}
      <h3 className="sub-title">Soft Skills</h3>

      <div className="soft-skills">
        {softSkills.map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>

      {/* 🎓 CERTIFICATIONS */}
      <h3 className="sub-title">Certifications</h3>

      <div className="cert-container">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">

            <FaCertificate className="cert-icon" />

            <h4>{cert.name}</h4>
            <p>{cert.company}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;