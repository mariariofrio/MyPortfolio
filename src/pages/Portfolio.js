import React, { Component } from "react";
import "./Portfolio.css";
import Portofoliocards from "../component/Cards/Portfoliocards";
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
          <Col sm="4">
          <Portofoliocards key={project.id} {...project}/>
          </Col>
      )
    })
    return (
      <Container >
        <Row xs="4">
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