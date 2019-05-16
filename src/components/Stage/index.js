import React from "react";
import "./style.css";

// import HPBar from "../HPBar";
import BothPlayers from "../PlayerRange";


class Stage extends React.Component {
  render() {
    return (
      <div>
        <div className="stage">
          {/* <HPBar /> */}
          <BothPlayers />
        </div>
      </div>
    );
  }
}



export default Stage;
