import React from "react";
import "./style.css";

function Player2Character(props) {
    return (
        <div>
            <img src="https://i.imgur.com/DJE3utN.png" alt="" className='rightchar' />
            <h4 className="rightPlayer" >{props.name}</h4>
        </div>


    );
}

export default Player2Character;

