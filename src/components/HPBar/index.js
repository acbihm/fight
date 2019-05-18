import React from "react";
import "./style.css";
import SelectHeader from "../SelectHeader";
// import Countdown from 'react-countdown-now';

// const Completionist = () => <span>Time</span>;

// // Renderer callback with condition
// const renderer = ({ seconds, completed }) => {
//     if (completed) {
//         // Render a completed state
//         return <Completionist />;
//     } else {
//         // Render a countdown
//         return <span>{seconds}</span>;
//     }
// };


class HPBar extends React.Component {
    componentDidMount() {
    }

    render(props) {
        return (
            <div className="timer-and-hp area">
                <div className="p1">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="85" max="100" value={this.props.hp1}>
                        </meter>
                    </div>
                    <div className="p1Special special">
                        <meter min="0" low="40" high="85" max="100" value={this.props.spec1}>
                        </meter>
                    </div>
                </div>
                <div className="timer-elem">
                    
                </div>
                <div className="p2">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="85" max="100" value={this.props.hp2}>
                        </meter>
                    </div>
                    <div className="p2Special special">
                        <meter min="0" low="40" high="85" max="100" value={this.props.spec2}>
                        </meter>
                    </div>
                </div>
            </div>
        );
    }

}
export default HPBar;

