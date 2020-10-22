import React, { Component } from "react";
// import projects from "../assets/projects.json";
// import Project from "../component/Projects/Project";

import { Card, CardImg, CardBody, CardTitle, CardText,  Button} from 'reactstrap';
import "../Cards/style.css";


class  PortfolioCards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.image)
        return (
            
                <Card>
                    <CardImg classes="my-image" src={
                        `/assets/${this.props.image}`
                       
                        } alttext={""}>

                    
                    </CardImg>
                    <CardBody>
                        <CardTitle> {this.props.projectname}
                        </CardTitle>
                        <CardText>{this.props.type}
                        </CardText>
                        <CardText >{this.props.description}
                        </CardText>
                        
                            <Button color="secondary" size="sm" href={this.props.sitelink}> Site Link </Button>
                            {' '}
                            <Button color="info" size="sm" href={this.props.repolink}> Repo Link
                            </Button>
                           
                    
                </CardBody>
        </Card>

        
        )
    }
}

export default  PortfolioCards;
