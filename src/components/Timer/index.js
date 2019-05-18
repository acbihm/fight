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
        // Render a countdown
        return <span>{seconds}</span>;
    }
};

class Timer extends React.Component {
    render() {
        return (
            <div className="timer">
                <SelectHeader text={<Countdown
                        date={Date.now() + 59000}
                        renderer={renderer}
                    />}>
                    </SelectHeader>
            </div>
        )
    }
}



export default Timer;