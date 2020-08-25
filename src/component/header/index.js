import React from "react";
import "../header/header.css";
import fullstack from "../header/fullstack.jpg";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
    

        <div className="row">
          <div className="col content">
            <h2> Welcome to my page </h2>
            <h3> I am a Full-Stack Developer</h3>
            {/* <img className="fullstack" src="assets/fullstack.jpg" style="height: 300px; width: auto fit-content"></img> */}
            <img src={fullstack}  height="300px"   />
          </div>  
        </div>
      </div>
  
  );
}

export default Header;