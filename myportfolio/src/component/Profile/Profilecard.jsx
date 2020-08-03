import React from "react";
import "../Profile/Profile.css";
import mypicture from "../../assets/mypicture.jpg"


function Card() {
  return (
    <div className="container">
    <div className="card">
    
    <img src={mypicture} alt="swimmer" height="350px" width="100%" style={{float: 'none'}} />
      <div className="content">
      <h1>Maria Jose </h1>
        My name is Maria Jose and I am a Full Stack Developer. 
      </div>
    </div>
    </div>
  );
}

export default Card;