import React from "react";
import "./style.css";

function P1CharacterNameBar(props) {
    return (
        <div>
            <img src="https://i.imgur.com/DJE3utN.png" alt="" className='leftchar'/>
            <h4 className="leftPlayer" >{props.name}</h4>
        </div>
            
        
    );
}

export default P1CharacterNameBar;

