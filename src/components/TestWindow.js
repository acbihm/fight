import React from "react";



const styles = {
    content: {
        
        color: "blue",
        background: "white",
        minHeight: 300,
        width: 900,
        left: 60,
        position: 'absolute',
        top: 150,
        borderStyle: 'inset'


    }
};

function TestWindow() {
    return (
        <div style={styles.content}>

        </div>
    );
}

export default TestWindow;
