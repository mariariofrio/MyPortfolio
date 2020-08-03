import React from "react";
import "./style.css";

function Image({ classes, source, altText }) {
  return <img className={"image " + classes} src={source} alt={altText} />;
}

export default Image;