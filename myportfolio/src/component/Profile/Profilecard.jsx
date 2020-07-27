import React from "react";
import "../Profile/Profile.css";
import mypicture from "../Profile/mypicture.jpg"

// const styles = {
//   card: {
//     margin: 20,
//     background: "#e8eaf6"
//   },
//   heading: {
//     background: "#3f51b5",
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: "1.2rem",
//     color: "white",
//     padding: "0 20px"
//   },
//   content: {
//     padding: 20
//   }
// };

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