import React from 'react';

import EnemyHitBoxPunchTest from "../../EnemyBoxes/EnemyHitBoxPunchTest";
import EnemyHitBoxKickTest from "./../../EnemyBoxes/EnemyHitBoxKickTest";
// import EnemyGuardTest from ./../../EnemyBoxes/EnemyGuardTest";

const styles = {
    enemy: {
        backgroundColor: "green",
        height: 600,
        width: 200,
        float: 'right',
        position: 'absolute',
        top: 0,
        right: 0,
    }
}

function EnemyTest() {
    return (
        <div style={styles.enemy} id='TestingID'>
        <EnemyHitBoxKickTest />
        <EnemyHitBoxPunchTest />
        {/* <EnemyGuardTest /> */}

        <p>hello</p>
        </div>
    );
}
export default EnemyTest;