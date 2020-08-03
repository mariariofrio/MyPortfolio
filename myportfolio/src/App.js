import React from "react";
import Contact from "./mylinkpages/Contact.jsx";
import Profilecard from "./component/Profile/Profilecard";
import Portfolio from "./mylinkpages/Portfolio";
import './App.css';
import Footer from "./component/Footer/Footer.jsx";
import NavTabs from "./component/Navbar/NavTabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/Header";





function App() {

  return (
    <Router>
      <div>
        <NavTabs />
        <Header />
        <Switch>
        <Route exact path={["/", "/Profilecard"]}>
            <Profilecard />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
        
      </div>
    </Router>

  );
}

export default App;