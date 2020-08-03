import React from "react";
import Contact from "./mylinkpages/Contact.jsx";
import Profilecard from "./component/Profile/Profilecard";
import Portfolio from "./mylinkpages/Portfolio";
import './App.css';
import Footer from "./component/Footer/Footer.jsx";
import NavTabs from "./component/Navbar/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/header/Header";





function App() {

  return (
    <Router>
      <div>
        <NavTabs />
        <switch>
        <Header />
        <Route exact path = "/" component={Profilecard} />
        <Route exact path = "/Portfolio" component={Portfolio} />
        <Route exact path = "/Contact" component={Contact} />
        </switch>
        <Footer />
        
      </div>
    </Router>

  );
}

export default App;