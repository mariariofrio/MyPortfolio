import React from "react";
import Anchor from "../Anchor"

function Project({ projectname, type, sitelink, repolink, image, description }) {
  


  return (
    <div page="Portfolio">
        <Anchor>
        <div href={repolink}>
        
          <img classes="myimages" source={require("../../assets/" + image)} alttext={projectname} />
        </div>
        <ul href={sitelink}>
          <li>{projectname} {type} {description}</li>
        </ul>
        </Anchor>
    </div>
  );
}

export default Project;