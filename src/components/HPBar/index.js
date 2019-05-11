import React from "react";
import "./style.css";

class HPBar extends React.Component {
    render() {
        return (
            <div className="timer-and-hp area">
                <div className="hp-bar" id="p1">
                    <meter value="800" min="0" max="1000" id='p1HP'>HP</meter>
                </div>
                <div className="timer-elem">
                    <h1>59</h1>
                </div>
                <div className="hp-bar" id="p2">
                    <meter value="800" min="0" max="1000" id='p1HP'>HP</meter>
                </div>
            </div>
        );
    }

}
export default HPBar;

