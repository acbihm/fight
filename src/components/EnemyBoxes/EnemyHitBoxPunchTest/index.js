import React from "react";
// import EnemyHitBoxPunchTest from "./components/EnemyBoxes/EnemyHitBoxPunchTest";
// import EnemyHitBoxKickTest from "./components/EnemyBoxes/EnemyHitBoxKickTest";
// import EnemyGuardTest from "./components/EnemyBoxes/EnemyGuardTest";

const styles = {
    test: {
        background: "red",
        top: 150,
        borderRadius: '3rem',
        width: 250,
        height: 90,
        position: 'inherit',
        zIndex: 2,
        right: 100,
    }
};

function EnemyHitBoxPunchTest() {
    return (
        <div style={styles.test} className="hitBox">
        </div>
    );
}

export default EnemyHitBoxPunchTest;
