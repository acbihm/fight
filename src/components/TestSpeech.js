import React from "react";
import TypeTest from './TypeTest.js';


// const background = 'https://data.whicdn.com/images/147235454/large.jpg'
const styles = {
    content: {
        paddingRight: 17,
        paddingLeft: 17,
        paddingTop: 40,
        minHeight: 63, 
        maxHeight: 90,
        color: "black",
        background: '#fbfbf0',
        width: '90%',
        left: 40,
        position: 'relative',
        float: 'left',
        borderRadius:20,
        borderStyle: 'inset',
        // backgroundImage:`url(${background})`,
        fontWeight: 'bold', 

        // float: 'left',
        top: 35, 
        marginRight: 'auto', /* 1 */
        marginLeft:  'auto', /* 1 */


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
