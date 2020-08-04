import React from "react";
import "./Portfolio.css";
import projects from "../assets/projects.json";
import Project from "../component/Projects/Project";
import Anchor from "../component/Anchor"


function Portfolio({ classes , source, alttext }) {
  return (  
   <div className="columns">
    <div className="cards">

      <img className={"myimages" + classes} src={source} alt={alttext} />
        

        {projects.map(project => (
          <Project key={project.id} {...project}></Project>
        ))}

      </div>
    </div >
        
  );
}

export default Portfolio;