import React, { Component } from "react";
// import projects from "../assets/projects.json";
// import Project from "../component/Projects/Project";
// import Anchor from "../component/Anchor"
import {Card, CardImg, CardBody, CardTitle, CardText, CardLink} from 'reactstrap';

class Portofoliocards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         <div>
            <Card>
                <CardImg top width= "100%" src={this.props.project}></CardImg>
                    <CardBody>
                        {/* <img className='card-img-top' src={props.imgsrc} alt="image" /> */}
                
                        <CardTitle> {this.props.project}
                        </CardTitle>
                        {/* // className='card-title'>{props.title} */}
                        {/* <Anchor>
                            {projects.map(project => (
                                <Project key={project.id} {...project}></Project>
                            ))}
                        </Anchor> */}
                        <CardText>{this.props.Projects}
                        </CardText>
                        <CardLink>{this.props.Projects}</CardLink>
                        <CardLink>{this.props.Projects}</CardLink>
                    </CardBody>
                    
            </Card>
        </div >
        )
    }
}

export default Portofoliocards;
