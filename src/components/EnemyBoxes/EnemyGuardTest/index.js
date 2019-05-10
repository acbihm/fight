import React from "react";
// import EnemyHitBoxPunchTest from "./components/EnemyBoxes/EnemyHitBoxPunchTest";
// import EnemyHitBoxKickTest from "./components/EnemyBoxes/EnemyHitBoxKickTest";
// import EnemyGuardTest from "./components/EnemyBoxes/EnemyGuardTest";



const styles = {
    down: {
        background: "purple",
        top: 0,
        borderRadius: '3rem',
        width: 90,
        height: 450,
        position: 'fixed',
        zIndex: 99,
        right: 180,
    },
    up: {
        background: "purple",
        top: 150,
        borderRadius: '3rem',
        width: 90,
        height: 450,
        position: 'fixed',
        zIndex: 99,
        right: 180,
    }
    // buttons: {
    //     top: 700,
    //     position: 'absolute',
       
    // }
};

// const GuardUp = () => {
//     alert('up');
// }
// const GuardDown = () => {
//     alert('down');
// }

function EnemyGuardTest() {
    return (
        <div style={styles.down} className="guard">
            {/* <div style={styles.buttons}>
                <button>UP</button>
                <button>DOWN</button>
            </div> */}
        </div>
    );
}

export default EnemyGuardTest;
