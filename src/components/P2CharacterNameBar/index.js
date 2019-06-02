import React from "react";
import "./style.css";

function P2CharacterNameBar(props) {
    return (
        <div>
            <img src="https://imgur.com/E4zDiCF.png" alt="" className='rightchar' />
            <h4 className="rightPlayer" >{props.name}</h4>
        </div>


    );
}

export default P2CharacterNameBar;

