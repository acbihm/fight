import React from "react";
import "./style.css";
// import EnemyTest from "../Test/EnemyTest";
// import PlayerTest from "../Test/PlayerTest";
import EnemyRange from "../EnemyRange";
import PlayerRange from "../PlayerRange";





const Stage = () => (
  <div>
    <div className="stage">test
    <PlayerRange>
        {/* <PlayerTest /> */}
      </PlayerRange>

      <EnemyRange />
      {/* <EnemyTest /> */}
    </div>



  </div>
);

export default Stage;
