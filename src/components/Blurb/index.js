import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";


function Blurb(props) {
    return (
        <div className="blurb">
            {props.children}
        </div>
    )
}



export default Blurb;