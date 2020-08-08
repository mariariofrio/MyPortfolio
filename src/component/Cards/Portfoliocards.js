import React, { Component } from "react";
// import projects from "../assets/projects.json";
// import Project from "../component/Projects/Project";
// import Anchor from "../component/Anchor"
import {Card, CardImg, CardBody, CardTitle, CardText, CardLink} from 'reactstrap';
import {Burgerapp, Notetaker, Passwordapp, RainChck, Weatherapp,Employeedirectory} from '../../assets/index';
class Portofoliocards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         <div>
            <Card>
                <CardImg top width= "100%" src={Burgerapp}></CardImg>
                    <CardBody>
                        {/* <img className='card-img-top' src={props.imgsrc} alt="image" /> */}
                
                        <CardTitle> {this.props.projectname}
                        </CardTitle>
                        {/* // className='card-title'>{props.title} */}
                        {/* <Anchor>
                            {projects.map(project => (
                                <Project key={project.id} {...project}></Project>
                            ))}
                        </Anchor> */}
                        <CardText>{this.props.type}
                        <CardText>{this.props.description}
                        </CardText>
                        </CardText>
                        {/* <CardLink>{this.props.sitelink}</CardLink>
                        <CardLink>{this.props.repolink}</CardLink> */}
                    </CardBody>
                    
            </Card>
        </div >
        )
    }
}

export default Portofoliocards;
