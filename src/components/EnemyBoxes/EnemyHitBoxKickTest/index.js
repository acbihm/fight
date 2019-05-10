import React from "react";
// import EnemyHitBoxPunchTest from "./components/EnemyBoxes/EnemyHitBoxPunchTest";
// import EnemyHitBoxKickTest from "./components/EnemyBoxes/EnemyHitBoxKickTest";
// import EnemyGuardTest from "./components/EnemyBoxes/EnemyGuardTest";

const styles = {
    test1: {
        background: "maroon",
        top: 400,
        borderRadius: '3rem',
        width: 350,
        height: 120,
        position: 'fixed',
        zIndex: 2,
        right: 100,
    },
    test2: {
        background: "maroon",
        top: 360,
        borderRadius: '3rem',
        width: 220,
        height: 120,
        position: 'fixed',
        zIndex: 2,
        right: 100,
    }
};

function EnemyHitBoxKickTest() {
    return (
        <div>
            <div style={styles.test1} className="hitBox"></div>
                <div style={styles.test2} className="hitBox"></div>
            
        </div>
    );
}

export default EnemyHitBoxKickTest;
