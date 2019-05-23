import React from 'react';
import "./style.css";


function PlayerTest(props) {
    return (
        <div id="player-placeholder">
                <img src={props.ImgProps} width="100%" alt="p1"/>
                {/* <img src="https://www.fightersgeneration.com/np7/char/gifs/ryu/ryu-cfe-walkf.gif" width="100%" /> */}

            {/* <h3>Test <br></br>(400 x 250px)</h3> */}
            </div>
    );
}

export default PlayerTest;