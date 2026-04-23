import "./education.css";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

import collegeImg from "../assets/sentence.png";
import schoolImg from "../assets/lourdes.webp";

const educationData = [
  {
    title: "Bsc Computer Science",
    school: "Gojan School of Business & Technology",
    duration: "2026 - 2029",
    score: "CGPA: 8.3",
    icon: <FaGraduationCap />,
    image: collegeImg,
    description:
      "Completed Bachelor of Science in Computer Science. Gained strong knowledge in web development, databases, and software Developing with hands-on project experience.",
    marksheet: "/marksheets/college.png",
  },
  {
    title: "12th Standard",
    school: "DRBCCC Hr Sec School",
    duration: "2025 - 2026",
    score: "95%",
    icon: <FaSchool />,
    image: schoolImg,
    description:
      "Completed higher secondary education with a focus on Science and Mathematics. Built strong analytical and problem-solving skills.",
    marksheet: "/marksheets/12th.png",
  },
  {
    title: "10th Standard",
    school: "DRBCCC Hr Sec School",
    duration: "2022 - 2023",
    score: "90%",
    icon: <FaSchool />,
    image: schoolImg,
    description:
      "Completed secondary education with a solid academic foundation across all core subjects and active participation in school activities.",
    marksheet: "/marksheets/10th.png",
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      
      <h2 className="edu-title">
        My <span>Education</span>
      </h2>

      <div className="edu-grid">

        {educationData.map((item, i) => (
          <div key={i} className="cube-card">

            <div className="cube-inner">

              {/* FRONT */}
              <div className="cube-front">
                <img src={item.image} alt={item.title} />

                <div className="cube-content">
                  <div className="edu-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                </div>
              </div>

              {/* BACK */}
              <div className="cube-back">

                <h3>{item.title}</h3>

                <p className="edu-desc">{item.description}</p>

                <p className="edu-info">📅 {item.duration}</p>

                <p className="edu-info">🎯 {item.score}</p>

                <a
                  href={item.marksheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-btn"
                >
                  View Marksheet
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;