import React from "react";
import TestSpeech from "./TestSpeech";
// import TestHUD from "./TestHUD.js";
import TestWindow from "./TestWindow.js";
// import TestFrame from "./TestFrame.js";
import TestFloor from "./TestFloor.js";

const styles = {
    wrapper: {
        marginTop: 10,
        marginRight: 'auto', /* 1 */
        marginLeft:  'auto', /* 1 */
        minWidth: 700, /* 2 */
        minHeight: 650,
        maxWidth: 900, /* 2 */
        maxHeight: 800,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 10

    }
};

function Wrapper() {
    return (
        <div style={styles.wrapper}>
      {/* <TestFrame /> */}
      {/* <TestHUD /> */}
      <TestWindow />
      <TestSpeech />
      <TestFloor /> 
        </div>
    );
}

export default Wrapper;
