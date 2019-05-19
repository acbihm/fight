import React from "react";
import "./style.css";
import BothPlayers from "../BothPlayers";
import Timer from "../Timer";


class NewRound extends React.Component {
  render(props) {
    console.log(this.props.p1Wins)
    console.log(this.props.p2Wins)
    //the above props work

    return (
      <div>
        <div className="stage">
          <Timer time={59000}/>
          <BothPlayers
            // p1HitPoints={this.props.p1HitPoints}
            // p2HitPoints={this.props.p2HitPoints}
            // p1SpecPoints={this.props.p1SpecPoints}
            // p2SpecPoints={this.props.p2SpecPoints}
          />
        </div>
      </div>
    );
  }
}

export default NewRound;
