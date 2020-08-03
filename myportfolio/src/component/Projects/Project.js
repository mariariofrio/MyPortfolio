import React from "react";


function Project({ projectname, type, sitelink, repolink, image, description }) {
  


  return (
    <div page="Portfolio">
        
        <div htmlref={repolink}>
          <img classes="myimages" source={require("../../assets/" + image)} alttext={projectname} />
        </div>
        <ul htmlref={sitelink}>
          <li>{projectname} {type} {description}</li>
        </ul>
    </div>
  );
}

export default Project;