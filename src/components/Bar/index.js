import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./style.css";


function Bar() {
    return (
        <ProgressBar now={60} />
    );
}
export default Bar;