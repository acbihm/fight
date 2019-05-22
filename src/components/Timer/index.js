import React from "react";
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


                gameTimer={props.gameTimer}
                // onChange={props.handleTimeout}


                text={<Countdown
                    date={Date.now() + props.gameTimer}
                    renderer={renderer}
                    onComplete={props.onComplete}
                />}
            >
            </SelectHeader>
        </div>
    )
}




export default Timer;