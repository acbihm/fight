import React from "react";
import "./style.css";

function CharacterName(props) {
  return <h1 className="name">{props.children}</h1>;
}

export default CharacterName;
