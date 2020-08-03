import React from "react";


function Project({ name, type, sitelink, repolink, image }) {
  
//   let depLink;
//   if (repolink.has("http")) {
//     depLink = repolink;
//   }
//   else {
//     depLink = require("../../assets/" + repolink);
//   };

  return (
    <div page="MyPortfolio">
        <div htmlRef={repolink}>
          <img classes="my-image" source={require("../../assets/" + image)} altText={name} />
        </div>
        <ul htmlRef={sitelink}>
          <li>{name} {type}</li>
        </ul>
    </div>
  );
}

export default Project;