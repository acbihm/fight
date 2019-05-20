import React from "react";
import "./style.css";
class HPBar extends React.Component {


    render(props) {

        return (
            <div className="timer-and-hp area">
                <div className="p1">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="85" max="100" value={this.props.player1HP}>
                            {/* <meter min="0" low="40" high="85" max="100" value={props.p1HitPoints}> */}
                        </meter>
                    </div>
                    <div className="p1Special special">
                        {/* <meter min="0" low="40" high="85" max="100" value={props.spec1}>
                    </meter> */}
                    </div>
                </div>


                <div className="timer-elem"></div>


                <div className="p2">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="85" max="100" value={this.props.player2HP}>
                        </meter>
                    </div>
                    <div className="p2Special special">
                        {/* <meter min="0" low="40" high="85" max="100" value={props.spec2}>
                    </meter> */}
                    </div>
                </div>
            </div>
        );
    }



}
export default HPBar;

