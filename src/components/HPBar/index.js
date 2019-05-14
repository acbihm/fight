import React from "react";
import "./style.css";
import SelectHeader from "../SelectHeader";
import Countdown from 'react-countdown-now';

const Completionist = () => <span>Time</span>;

// Renderer callback with condition
const renderer = ({seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{seconds}</span>;
    }
};
class HPBar extends React.Component {

 

    render() {
        return (
            <div className="timer-and-hp area">
                {/* <div className="hp-bar" id="p1">
                    <meter min="0" low="40" high="95" max="100" value="65">
                </div> */}

                <div className="p1">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="95" max="100" value="85">
                        </meter>
                    </div>

                    <div className="p1Special special">
                        <meter min="0" low="40" high="95" max="100" value="85">
                        </meter>
                    </div>
                </div>

                <div className="timer-elem">

                    <SelectHeader text={<Countdown
                        date={Date.now() + 59000}
                        renderer={renderer}
                    />}>

                    </SelectHeader>
                </div>

                <div className="p2">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="95" max="100" value="25">
                        </meter>
                    </div>

                    <div className="p2Special special">
                        <meter min="0" low="40" high="95" max="100" value="9">
                        </meter>
                    </div>
                </div>

            </div>
        );
    }

}
export default HPBar;

