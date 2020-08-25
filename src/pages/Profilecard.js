import React from "react";
import "../pages/Profile.css";
import mypicture from "../pages/mypicture.jpg";
import Header from "../component/header";
import {Media, Col, Row, Container} from "reactstrap";
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"

function Card() {
  return (
    <>
    <Header />
    <Container className="themed-container" fluid="sm">
      <Row>
        <Col sm={{ size: 2  }}>
    <Media >
        <Media src={mypicture} className="image" height="350px"  />
      </Media>
      </Col>
      
      <Media body>
      <Col sm={{ size: 6 , offset: 3 }}>
        <Media heading>
          About Me
        </Media>
        I am Maria Jose Riofrio and I am a Full Stack Web Developer. 
        I was born in Ecuador and I moved to United States when I was 14 years old. I enjoy traveling around the world and meeting 
        new people and new places. I enjoy having fun while traveling or staying in town. 
<br></br>
        My Career:
        
        I used to be in banking for most of my adult life and decided to make a change to the airline business about 5 years ago. It was the best 
        decision I have made in a long time. It was a new opportunity to learn something new. I enjoy working for an airline, but I always had a passion for 
        technology and creating new things. Working for an airline was a challenge and I loved every minute of that challenge (you never stop learning).
        One day I decided that I needed a new challenge and decided to follow my dreams and what I wanted to do for so long and I registered for the Georgia Tech Full Stack Web Developer Program. 

      </Col>
      </Media>
      </Row>
    </Container>
    <Portfolio/>
    <Contact/>
  </>
  );
}

export default Card;