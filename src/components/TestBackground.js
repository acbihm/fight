import React from "react";
import TypeTest from './TypeTest.js';


const styles = {
    content: {
        padding: 20,
        color: "blue",
        background: "#3f51b5",
        minHeight: 500,
        width: 600,
        position: 'absolute',
        top: 300

    }
};

function TestBackground() {
    return (
        <div style={styles.content}>
        <TypeTest />
        </div>
    );
}

export default TestBackground;
