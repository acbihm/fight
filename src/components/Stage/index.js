import React from "react";
import "./style.css";
// import EnemyTest from "../Test/EnemyTest";
// import PlayerTest from "../Test/PlayerTest";
import EnemyRange from "../EnemyRange";
import PlayerRange from "../PlayerRange";


class Stage extends React.Component {
  render() {
    return (
      <div>
        <div className="stage">test
        <PlayerRange />


          <EnemyRange />
          {/* <EnemyTest /> */}
        </div>



      </div>
    );
  }
}



export default Stage;
