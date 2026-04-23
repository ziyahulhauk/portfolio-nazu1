import React, { useEffect, useState } from "react";
import "./Navbar.css";

import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "#home", icon: <FaHome /> },
  { name: "About", path: "#about", icon: <FaUser /> },
  { name: "Education", path: "#education", icon: <FaGraduationCap /> },
  { name: "Skills", path: "#skills", icon: <FaCode /> },
  { name: "Projects", path: "#projects", icon: <FaBriefcase /> },
  { name: "Contact", path: "#contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          {navItems.map((item) => {
            const sectionId = item.path.replace("#", "");

            return (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`nav-item ${
                    activeSection === sectionId ? "active" : ""
                  }`}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <button className="nav-btn">Login</button>
      </div>
    </div>
  );
}