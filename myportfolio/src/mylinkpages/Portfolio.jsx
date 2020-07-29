import React from "react";
import "../mylinkpages/Portfolio.css";
// import mypicture from "../Portfolio/mypicture.jpg"

function Card() {
    return (
    <div className="container fluid">
      <div className="card">
          
          {/* <img src={mypicture} alt="swimmer" height="230px" width="100%" style={{float: 'left'}} /> */}
        <div className="content">
        <h1>Maria Jose </h1>
          My name is Maria Jose and I am a Full Stack Developer. 
        </div>
      </div>
    </div>  
    );
  }
  
  export default Card;