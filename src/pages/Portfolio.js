import React, { Component } from "react";
import "./Portfolio.css";
import PortfolioCards from "../component/Cards/Portfoliocards";
import {Container, Row, Col } from 'reactstrap';
import Projects from "../component/projects.json"


class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      Projects,
    }
  }

  render () {
    let Portfoliocard = this.state.Projects.map((project, i) => {
      return (
          <Col sm="4">
          <PortfolioCards key={i} {...project} atlText={""}/>
          </Col>
      )
    })
    return (
      <Container >
        <Row xs="4">
          {Portfoliocard}
        </Row>
      </Container>
    )
    }
  } 
   
//   {projects.map(project => (
//     <Project key={project.id} {...project}></Project>
// ))}
export default Portfolio;