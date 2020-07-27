import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Header from "./component/header/Header";
import Profilecard from "./component/Profile/Profilecard";
import Portfolio from "./component/Portfolio/Portfolio";
import './App.css'
import Footer from "./component/Footer/Footer.jsx";


function App() {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Navbar.Brand href="#home">Maria Jose</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Me</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact Info</Nav.Link>
        </Nav>
      </Navbar>
  
      <Header />
      <Profilecard />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;