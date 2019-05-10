import React from "react";


const styles = {
    
    top: {
       
        color: "red",
        background: "blue",
        minHeight: 30,
        width: 1000,
        position: 'fixed',
        // top: 0
    },
    bottom: {
        
        color: "red",
        background: "blue",
        minHeight: 30,
        width: 1000,
        position: 'fixed',
        // top: 600
        float: 'right'
    },
    right: {
        
        color: "red",
        background: "blue",
        minHeight: 550,
        width: 30,
        position: 'relative',
        right: 0,
        top: 0,
        float: 'right'
    },
    left: {
        
        color: "red",
        background: "blue",
        minHeight: 550,
        width: 30,
        position: 'relative',
        top: 0,
        float: 'left'
        // left: 0
    }
};

function TestFrame() {
    return (
        <div style={styles.wrapper}>
            <div style={styles.top}></div>
            <div style={styles.bottom}></div>
            <div style={styles.right}></div>
            <div style={styles.left}></div>
        </div>
    );
}

export default TestFrame;
