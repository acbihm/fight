import React from "react";
import "./style.css";
// import Image from "./../Image";


function Wrapper(props) {
    return <main className="wrapper">{props.children}</main>;
    
}



export default Wrapper;