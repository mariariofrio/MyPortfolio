
import React from "react";
import { Link} from "react-router-dom";
import "../Navbar/style.css";


function NavTabs() {

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark">
            <div className="newFlex">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/Profilecard" ? "nav-link active" : "nav-link"}
                        >
                            Home
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            className={
                                window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
      </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={
                                window.location.pathname ===  "/Contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact Info
       </Link>
                    </li>
                    </ul>
     </div>
     </nav>

    );
}

export default NavTabs;