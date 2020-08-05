import React from "react";
import "../pages/contact.css";
import github from  "../assets/github.png";
import Anchor from "../component/Anchor";
import linkedin from "../assets/linkedinicon.jpg";

function Contact() {
    return (
   
    <div className="container-fluid">

        {/* <!-- Call to action --> */}

            {/* <!-- Grid row --> */}
            <div className="row ">

                {/* <!-- Grid column --> */}
                <div className="col-md-5 mt-md-2 mt-4">

                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width= "60px;"></hr> */}
                        <p>
                            <i className="fas fa-home mr-3"></i> Georgia, US</p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> maria.riofrio.mr@gmail.com</p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 01 678 283 7616</p>
                </div>
                <Anchor>
                    <div className="col-md-9 mb-md-0 mb-4">
                        <a href="https://github.com/mariariofrio" target="blank"></a>
                            <img src={github} alt="swimmer" height="50px" width="auto fit-center; border:none" style={{float: ''}} />
                            <hr></hr>
                            <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                                data-type="horizontal" data-theme="dark" data-vanity="maria-jose-riofrio-b97780148">
                            <img src={linkedin} alt="swimmer" height="50px" width="auto fit-center; border:none" style={{float: ''}} /><a
                                    class="LI-simple-link"
                                    
                                    href='https://www.linkedin.com/in/maria-jose-riofrio-b97780148?trk=profile-badge'></a>
                            </div> 
                            <hr></hr>
                            <a href="https://docs.google.com/document/d/1OZ-gX6Os9Rnt8roIl1OzZNyJNyZsH5A7pja3Tgi9prk/edit?usp=sharing" font="black">Resume</a>

                    </div>
                </Anchor>
            </div>
          
         
    </div>
    );
}

export default Contact;