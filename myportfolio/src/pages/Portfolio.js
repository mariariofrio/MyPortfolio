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
    let Portfoliocards = this.state.Projects.map(value => {
      return (
          <Col sm="4">
          <Peoplecards value={value}/>
          </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {Portfoliocards}
        </Row>
      </Container>
    )
    }
  } 
   

export default Portfolio;