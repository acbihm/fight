import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";
import Countdown from 'react-countdown-now';
import SelectHeader from "../SelectHeader";

const Completionist = () => <span>Time</span>;
// Renderer callback with condition
const renderer = ({ seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        return <span>{seconds}</span>;
    }
};

function Timer(props) {
    return (
        <div className="timer">
            <SelectHeader
                time={props.time}
                text={<Countdown
                    // date={Date.now() + 59000}
                    date={Date.now() + props.time}
                    renderer={renderer}
                />}
            >
            </SelectHeader>
        </div>
    )
}




export default Timer;