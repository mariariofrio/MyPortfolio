import React from "react";
import "../header/header.css";
import fullstack from "../../assets/fullstack.jpg";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container ">

        <div className="columns">
          <div className="column">
            <h1 className="font"> Welcome to my page </h1>

            <h3> I am a Full-Stack Developer</h3>
            {/* <img className="fullstack" src="assets/fullstack.jpg" style="height: 300px; width: auto fit-content"></img> */}
            <img src={fullstack} alt="swimmer" height="300px" width="auto fit-center" style={{float: ''}} />
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Header;