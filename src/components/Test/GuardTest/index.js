import React from "react";
// import HitBoxPunchTest from "./components/HitBoxPunchTest";
// import HitBoxKickTest from "./components/HitBoxKickTest";
// import GuardTest from "./components/GuardTest";


const styles = {
    down: {
        background: "purple",
        top: 0,
        borderRadius: '3rem',
        width: 90,
        height: 450,
        position: 'fixed',
        zIndex: 99,
        left: 180,
    },
    up: {
        background: "purple",
        top: 150,
        borderRadius: '3rem',
        width: 90,
        height: 450,
        position: 'fixed',
        zIndex: 99,
        left: 180,
    }
    // buttons: {
    //     top: 700,
    //     position: 'absolute',
       
    // }
};

const GuardUp = () => {
    alert('up');
}
const GuardDown = () => {
    alert('down');
}

function GuardTest() {
    return (
        <div style={styles.down} className="guard">
            {/* <div style={styles.buttons}>
                <button>UP</button>
                <button>DOWN</button>
            </div> */}
        </div>
    );
}

export default GuardTest;
