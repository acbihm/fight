import React from "react";



const styles = {
    content: {
        borderRadius:20,
        paddingRight: 17,
        paddingLeft: 17,
        color: "blue",
        background: "white",
        width: '87%',
        float: 'left',
        marginRight: 'auto', /* 1 */
        marginLeft:  'auto', /* 1 */
        borderStyle: 'inset',
        height: 480,
        left: 40,
        top: 20,
        position: 'relative',
  
    

    }
};

function TestWindow() {
    return (
        <div style={styles.content}>

        </div>
    );
}

export default TestWindow;
