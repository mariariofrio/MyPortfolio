import React from "react";
// import "../mylinkpages/Portfolio.css";
import github from  "../assets/github.png";

function Contact() {
    return (
   
    <div className="container ">

        {/* <!-- Call to action --> */}

            {/* <!-- Grid row --> */}
            <div className="row">

                {/* <!-- Grid column --> */}
                <div className="col-md-6 mt-md-0 mt-3">

                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr className="deep-purple accent-2 mb-2 mt-0 d-inline-block mx-auto" width= "60px;"></hr>
                        <p>
                            <i className="fas fa-home mr-3"></i> Georgia, US</p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> maria.riofrio.mr@gmail.com</p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 01 678 283 7616</p>
                </div>
                    <div className="col-md-6 mb-md-0 mb-3">
                        <a href="https://github.com/mariariofrio" target="blank">My Github</a>
                            <img src={github} alt="swimmer" height="50px" width="auto fit-center; border:none" style={{float: ''}} />
                            <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                                data-type="horizontal" data-theme="dark" data-vanity="maria-jose-riofrio-b97780148">
                                    <a
                                    class="LI-simple-link"
                                    href='https://www.linkedin.com/in/maria-jose-riofrio-b97780148?trk=profile-badge'>Maria Jose Riofrio</a>
                            </div>        
                    </div>
            </div>
          
         
    </div>
    );
}

export default Contact;