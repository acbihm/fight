import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";


function BlurbSmall(props) {
    return (
        <div className="blurbSmall" id="area">
            {props.text}
        </div>
    )
}



export default BlurbSmall;