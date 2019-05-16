import React from "react";
import "./style.css";
import BothPlayers from "../PlayerRange";


class Stage extends React.Component {
  render() {
    return (
      <div>
        <div className="stage">

          <BothPlayers />
        </div>
      </div>
    );
  }
}



export default Stage;
