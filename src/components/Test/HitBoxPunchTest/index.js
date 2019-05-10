import React from "react";
// import HitBoxPunchTest from "./components/EnemyBoxes/EnemyHitBoxPunchTest";
// import HitBoxKickTest from "./components/EnemyBoxes/EnemyHitBoxKickTest";
// import GuardTest from "./components/EnemyBoxes/EnemyGuardTest";


const styles = {
    test: {
        background: "red",
        top: 150,
        borderRadius: '3rem',
        width: 250,
        height: 90,
        position: 'inherit',
        zIndex: 2,
        left: 100,
    }
};

function HitBoxPunchTest() {
    return (
        <div style={styles.test} className="hitBox">
        </div>
    );
}

export default HitBoxPunchTest;
