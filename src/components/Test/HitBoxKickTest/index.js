import React from "react";


const styles = {
    test1: {
        background: "maroon",
        top: 400,
        borderRadius: '3rem',
        width: 350,
        height: 120,
        position: 'fixed',
        zIndex: 2,
        left: 100,
    },
    test2: {
        background: "maroon",
        top: 360,
        borderRadius: '3rem',
        width: 220,
        height: 120,
        position: 'fixed',
        zIndex: 2,
        left: 100,
    }
};

function HitBoxKickTest() {
    return (
        <div>
            <div style={styles.test1} className="hitBox"></div>
                <div style={styles.test2} className="hitBox"></div>
            
        </div>
    );
}

export default HitBoxKickTest;
