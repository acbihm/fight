import React from "react";
import "./style.css";
// import SelectHeader from "../SelectHeader";
class HPBar extends React.Component {


    render(props) {

        return (
            <div className="timer-and-hp area">
                <div className="p1">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="85" max="100" value={this.props.player1HP}        >
                            {/* <meter min="0" low="40" high="85" max="100" value={props.p1HitPoints}> */}
                        </meter>
                    </div>
                    <div className="p1Special special">
                    
                        <meter min="0" low="40" high="85" max="100" value={this.props.spec1}>
                    </meter>
                    </div>
                </div>

                <div className="timer-elem"></div>

                <div className="p2">
                    <div className="hp-bar" >
                        <meter min="0" low="40" high="85" max="100" value={this.props.player2HP}>
                        </meter>
                    </div>
                    <div className="p2Special special">
                    <h1 id="play1">PLAYER 1</h1>
                    <h1 id="play2">PLAYER 2</h1>
                    <h1 id="combo1">COMBOS: {this.props.combo1}</h1>
                    <h1 id="combo2">COMBOS: {this.props.combo2}</h1>
                    <h4 id="wins1">WIN COUNT</h4>
                    <h2 id="winsCount">{this.props.player1Wins} | {this.props.player2Wins}</h2>
                        <meter min="0" low="40" high="85" max="100" value={this.props.spec2}>
                    </meter>
                    </div>
                </div>
            </div>
        );
    }
}
export default HPBar;

