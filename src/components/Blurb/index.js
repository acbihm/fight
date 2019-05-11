import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";


function Blurb(props) {
    return (
        <div className="blurb" id="area">
            {props.children}
        </div>
    )
}



export default Blurb;