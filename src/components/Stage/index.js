import React from "react";
import "./style.css";
import EnemyRange from "../EnemyRange";
import PlayerRange from "../PlayerRange";
import HPBar from "../HPBar";


class Stage extends React.Component {
  render() {
    return (
      <div>
        <div className="stage">
        <HPBar />
        <PlayerRange />
          <EnemyRange />
        </div>
      </div>
    );
  }
}



export default Stage;
