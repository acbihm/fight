import React from "./node_modules/react";
// import SelectHeader from "../SelectHeader";
import "./style.css";
import HeadLine from "../HeadLine";


function Popup(props) {
    return (
        <div >
        <HeadLine text={props.winner} text2="wins" > </HeadLine>
        </div>
    )
}



export default Popup;