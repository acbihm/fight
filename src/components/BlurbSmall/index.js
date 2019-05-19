import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";
import SelectHeader from "../SelectHeader";


function BlurbSmall(props) {
    return (
        <div className="blurbSmall" id="area">
            {props.text}
            <button className="go-button"><SelectHeader text="go"/></button>
        </div>
    )
}



export default BlurbSmall;