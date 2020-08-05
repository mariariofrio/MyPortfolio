import React from "react";
import "./Portfolio.css";
import projects from "../assets/projects.json";
import Project from "../component/Projects/Project";
import Anchor from "../component/Anchor"


const Card= props =>{
  return (  
   <div className="card text center">
    <div className="overflow">
      <img className='card-img-top' src={props.imgsrc} alt="image" />
     </div> 
     <div className= 'card-body text dark'>
       <h4 className= 'card-title'>{props.title}</h4>
<Anchor>
        {projects.map(project => (
          <Project key={project.id} {...project}></Project>
        ))}
</Anchor>

      </div>
    </div >
        
  );
}

export default Card;