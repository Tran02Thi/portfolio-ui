import React from "react";
import { FiGithub } from "react-icons/fi";
import styles from "./Projects.module.css";

function Projects() {
  const projects = [
    {
      name: "Football Leagues SCORES",
      description: "April.2025/Dev/Data Enginner",
      github: "https://github.com/Tran02Thi/de01-Football_Leagues_Scores"
    },
    {
      name: "ELT Realtime Pipeline",
      description: "April.2025/Dev/Data Enginner",
      github: "https://github.com/Tran02Thi/de03-realtime_users"
    },
    {
      name: "Precision Marketing Analytics",
      description: "April.2025/Dev/Data Enginner",
      github: "https://github.com/Tran02Thi/de02-OnlineRetail"
    }
    
  ];

  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
            <a
              href={project.github}
              className={styles.projectName}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
