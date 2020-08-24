import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Contact from "./pages/Contact"
import Profilecard from "./pages/Profilecard";
import Portfolio from "./pages/Portfolio";
// import './App.css';
import Footer from "./component/Footer";
import NavTabs from "./component/Navbar";

import Wrapper from "./component/wrapper";






function App() {
 
  return (
    
    <Router>
      <div>
        <NavTabs />
  
        
        <Wrapper>
        <Route exact path="/" component={Profilecard} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact}>
        </Route>
        </Wrapper>
       
        <Footer />
        
      </div>
    </Router>

  );
}

export default App;