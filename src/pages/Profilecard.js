import React from "react";
import "../pages/Profile.css";
import mypicture from "../pages/mypicture.jpg";
import Header from "../component/header";


function Card() {
  return (
    <>
    <Header />
    <div className="container profile">
    
    <div className="card">
    
    <img src={mypicture} alt="swimmer" height="350px" width="100%" style={{float: 'none'}} />
      <div className="content">
      <h1>Maria Jose </h1>
        My name is Maria Jose and I am a Full Stack Developer. 
      </div>
    </div>
    </div>
    </>
  );
}

export default Card;