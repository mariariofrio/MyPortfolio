import React from "react";
import "../mylinkpages/Portfolio.css";
import projects from "../assets/projects.json";
import Project from "../component/Projects/Project";


function Portfolio() {
  return (
    <div className="container">
      <div className="card">

        {projects.map(project => (
          <Project key={project.id} {...project}></Project>
        ))}

      </div>
    </div >
        
  );
};

export default Portfolio;