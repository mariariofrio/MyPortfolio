import React from "react";
import "../pages/contact.css";
import github from  "../pages/github.png";
import Anchor from "../component/Anchor";
import linkedin from "../pages/linkedinicon.jpg";
import { Link, } from 'react-router-dom';
import { Breadcrumb} from "react-bootstrap"

function Contact() {
    return (
   
    <div className="container-fluid">

        {/* <!-- Call to action --> */}

            {/* <!-- Grid row --> */}
            <div className="row ">

                {/* <!-- Grid column --> */}
                <div className="col-sm-4 .offset-sm-1  content">

                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width= "60px;"></hr> */}
                        <p>
                            <i></i> Georgia, US</p>
                        <p>
                            <i></i> 678 283 7616</p>
                        <p>
                            <i></i> maria.riofrio.mr@gmail.com</p>
                </div>
                
                    <div className="col-sm-4 .offset-sm-1">
                            <Breadcrumb.Item href="https://github.com/mariariofrio">
                            <img src={github} alt="swimmer" height="50px" width="auto fit-center; border:none" style={{float: ''}} />
                            </Breadcrumb.Item>
                            
                            <div className= "col-4 column1 ">       
                            <Breadcrumb.Item
                                    href ='https://www.linkedin.com/in/maria-jose-riofrio-b97780148?trk=profile-badge'>
                            <img src={linkedin} alt="swimmer" height="50px" width="auto fit-center; border:none" style={{float: ''}} />
                            </Breadcrumb.Item>
                        </div>
                           <div className= "col"> 
                            <Breadcrumb.Item href='https://docs.google.com/document/d/1OZ-gX6Os9Rnt8roIl1OzZNyJNyZsH5A7pja3Tgi9prk/edit?usp=sharing' font="black">Resume</Breadcrumb.Item>
                           </div>                         
                    </div>
            </div>
          
         
    </div>
    );
}

export default Contact;