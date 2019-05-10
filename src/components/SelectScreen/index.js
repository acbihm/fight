import React from "react";
import SelectHeader from "../SelectHeader";
import "./style.css";


function SelectScreen(props) {
    return <div className="select-images ">
    {props.children}</div>;
}



export default SelectScreen;