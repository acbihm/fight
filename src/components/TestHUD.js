import React from "react";


const styles = {
    content: {
        padding: 20,
        color: "white",
        background: "green",
        minHeight: 50,
        width: 1000,
        borderStyle: 'outset'
    }
};

function TestHUD() {
    return (
        <div style={styles.content}>
        <h1>NAME</h1>
        </div>
    );
}

export default TestHUD;
