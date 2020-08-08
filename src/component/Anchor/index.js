import React from "react";
import "./style.css";

function Anchor({ htmlRef, title, children }) {
  return <a href={htmlRef} className="anchor" title={title} target="_blank" rel="noopener noreferrer">
    {children}</a>;
}

export default Anchor;