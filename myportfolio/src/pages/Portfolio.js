import React, { Component } from "react";
import "./Portfolio.css";
import Peoplecards from "../component/Cards/Portfoliocards";
import {Container, Row, Col } from 'reactstrap';
import Projects from "../assets/projects.json"


class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      Projects,
    }
  }

  render () {
    let Portfoliocards = this.state.Projects.map(project => {
      return (
          <Col sm="2">
          <Peoplecards key={project.id} {...project}/>
          </Col>
      )
    })
    return (
      <Container portfolio >
        <Row>
          {Portfoliocards}
        </Row>
      </Container>
    )
    }
  } 
   
//   {projects.map(project => (
//     <Project key={project.id} {...project}></Project>
// ))}
export default Portfolio;