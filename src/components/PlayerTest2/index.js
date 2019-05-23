import React from 'react';
import "./style.css";


function PlayerTest2(props) {
    return (
        <div id="player-placeholder2">
                        <img src={props.Img2Props} width="100%" alt="p1"/>
            {/* <h3>Test <br></br>(400 x 250px)</h3> */}
        </div>
    );
}

export default PlayerTest2;