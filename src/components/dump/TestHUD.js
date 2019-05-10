import React from "react";


const styles = {
    content: {
        color: "white",
        background: "green",
        minHeight: 100,
        float: 'left',
        width: '100%',
        padding: 0,
        margin: 0

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
