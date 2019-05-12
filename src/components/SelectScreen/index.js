import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";
// import SelectHeader from "../SelectHeader";


function SelectScreen(props) {
    return (
        <div className="select-screen" id="area">
            {props.children}
        </div>
    )
}

export default SelectScreen;