import Typing from 'react-typing-animation';
import React from "react";

const styles = {
    content: {
        fontSize: 100,
        top: 200,
position: 'absolute'
    }
};


const TypeTest = () => (
    <Typing speed={50} style={styles.content}>
    This line will be typed at 50ms/character,
    <Typing.Speed ms={200} />
    then this will be typed at 200ms/character.
  </Typing>
);

export default TypeTest;
