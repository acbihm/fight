import React from "react";
import TypeTest from './TypeTest.js';


const background = 'https://data.whicdn.com/images/147235454/large.jpg'
const styles = {
    content: {
        padding: 20,
        color: "black",
        background: "lightgray",
        minHeight: 90,
        width: 860,
        left: 55,
        position: 'absolute',
        top: 520,
        borderRadius:30,
        borderStyle: 'outset',
        backgroundImage:`url(${background})`,
        fontWeight: 'bold'

    }
};

function TestSpeech() {
    return (
        <div style={styles.content}>
        <TypeTest />
        </div>
    );
}

export default TestSpeech;
