import React from "react";
import "../header/header.css";
import fullstack from "../header/fullstack.jpg";

function Header() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container d-flex justify-content-center">

        <div class="columns">
          <div class="column">
            <h1 class="font"> Welcome to my page </h1>

            <h3> I am a Full-Stack Developer</h3>
            {/* <img class="fullstack" src="assets/fullstack.jpg" style="height: 300px; width: auto fit-content"></img> */}
            <img src={fullstack} alt="swimmer" height="300px" width="auto fit-content" style={{float: 'left'}} />
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Header;