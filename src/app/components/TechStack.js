// src/app/components/TechStack.js

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiOpenai,
} from "react-icons/si";

const techs = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Python", icon: <FaPython /> },
  { name: "APIs", icon: <FaJsSquare /> },
  { name: "IA", icon: <SiOpenai /> },
];

export default function TechStack() {
  return (
    <section className="tech-section">
      <h2 className="tech-title">Tecnologias :</h2>
      <div className="tech-stack">
        {techs.map((tech) => (
          <div key={tech.name} className="tech-item">
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

