import React from "react";
import "./style.css";
import BothPlayers from "../BothPlayers";
import Timer from "../Timer";


class Stage extends React.Component {
  render() {
    return (
      <div>
        <div className="stage">
<Timer />
          <BothPlayers />
        </div>
      </div>
    );
  }
}



export default Stage;
