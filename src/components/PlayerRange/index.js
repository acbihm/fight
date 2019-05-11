import React from 'react';
import PlayerHitBoxPunchTest from "../PlayerBoxes/PlayerHitBoxPunchTest";
import PlayerHitBoxKickTest from "../PlayerBoxes/PlayerHitBoxKickTest";
import PlayerTest from "../Test/PlayerTest";

import "./style.css";

function PlayerRange(props) {
    return (
        <div className="player-range" id='TestingID'>
        <PlayerTest />
        <PlayerHitBoxKickTest />
        <PlayerHitBoxPunchTest />
        
        <h2>Player Range test</h2>
        <h3>550 tall x 380 wide</h3>
        </div>
    );
}
export default PlayerRange;