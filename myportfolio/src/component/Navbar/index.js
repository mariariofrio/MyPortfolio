
import React from "react";
import { link, useLocation} from "react-router-dom";


function NavTabs() {
    
    const location = useLocation();
    
    return (
        <>
    <ul className="nav nav-tabs" bg="info" variant="dark">
        <li className="nav-item">
        <a to="/" className = {location.pathname ==="/" ? "nav-link active" : "nav-link"}>
            Maria Jose
        </a>
        </li>
        <li className="nav-item">
        <a to="/Portfolio" className = {location.pathname ==="/Portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
        </a>
        </li>
        <li className="nav-item">
        <a to="/Contact" className = {location.pathname ==="/Contact" ? "nav-link active" : "nav-link"}>
            Contact Info
        </a>
        </li>
        
      </ul>
      </>

        );
    }
    
    export default NavTabs;