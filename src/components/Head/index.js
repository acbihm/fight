import React from 'react';
import "./style.css";
import Container from "../Container";

function Head() {
    return (
        <div className="headbar">
            <a href="#">
                <span id="small-nav"><span className="fa fa-home">
                </span>
                    &nbsp; &nbsp; Home
            </span>
            </a>
            
            <span id="username">|&nbsp; test &nbsp; &nbsp;
            <span className="fa fa-cog">
                </span>
            </span>





        </div>
    );
}
export default Head;