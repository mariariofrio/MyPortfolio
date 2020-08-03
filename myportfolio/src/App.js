import React, { useState } from 'react';
import Contact from "./mylinkpages/Contact.jsx";
import Profilecard from "./component/Profile/Profilecard";
import Portfolio from "./mylinkpages/Portfolio";
import './App.css';
import Footer from "./component/Footer/Footer.jsx";
import NavTabs from "./component/Navbar/NavTabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/Header";





function App() {
  const pathArray = window.location.pathname.split("/");
  let basePath = "";

  if (pathArray.length > 0) {
    pathArray.pop();
    basePath = pathArray.join("/");
  };

  const [pathState] = useState(basePath);

  return (
    
    <Router basename={pathState}>
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
        
      </div>
        <Footer />
    </Router>

  );
}

export default App;