import React, { Component } from "react";
// import projects from "../assets/projects.json";
// import Project from "../component/Projects/Project";
// import Anchor from "../component/Anchor"
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Anchor from "../Anchor";

//import burgerpic from "../../assets/mypicture.jpg"
// import {Burgerapp, Notetaker, Passwordapp, RainChck, Weatherapp,Employeedirectory} from '../../assets/index';
// import Image from "../images"
class  PortfolioCards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.image)
        return (
            <div>
                <Card>
                    <CardImg classes="my-image" src={
                        `/assets/${this.props.image}`
                       
                        } altText={""}>

                    
                    </CardImg>
                    <CardBody>
                        <CardTitle> {this.props.projectname}
                        </CardTitle>
                      
                        <CardText>{this.props.type}
                            <CardText>{this.props.description}
                            </CardText>
                        </CardText>
                        <Anchor htmlRef={this.props.repoLink}>
                            <Anchor htmlRef={this.props.sitelink}>
                            </Anchor>
                           
                    </Anchor>
                    
                </CardBody>
        </Card>

        </div>
        )
    }
}

export default  PortfolioCards;
