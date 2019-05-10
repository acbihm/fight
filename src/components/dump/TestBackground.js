import React from "react";
import TypeTest from './TypeTest.js';


const styles = {
    content: {
        
        color: "blue",
        background: "#3f51b5",
        // minHeight: 500,
        width: '100%',
        minHeight: 900,
        position: 'relative',

        

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
