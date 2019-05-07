import React from "react";
import ArrowKeysReact from 'arrow-keys-react';

ArrowKeysReact.config({
    left: () => {
        console.log('left key detected.');
    },
    right: () => {
        console.log('right key detected.');
    },
    up: () => {
        console.log('up key detected.');
    },
    down: () => {
        console.log('down key detected.');
    }
});

export default ArrowKeysReact;
