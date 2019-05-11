import React from 'react';
import EnemyHitBoxPunchTest from "../EnemyBoxes/EnemyHitBoxPunchTest";
import EnemyHitBoxKickTest from "../EnemyBoxes/EnemyHitBoxKickTest";
import "./style.css";
import EnemyTest from "../Test/EnemyTest";


function EnemyRange() {
    return (
        <div className="enemy-range" id='TestingID'>
        <EnemyHitBoxKickTest />
        <EnemyHitBoxPunchTest />
        <EnemyTest />
        <h2>Enemy Range test</h2>
        <h3>550 tall x 380 wide</h3>
        </div>
    );
}
export default EnemyRange;