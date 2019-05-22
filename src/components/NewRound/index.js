import React from "react";
import "./style.css";
import BothPlayers from "../BothPlayers";
import Timer from "../Timer";

class NewRound extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        player1Char: this.props.player1Char,
        player2Char: this.props.player2Char,
        player1Wins: this.props.player1Wins,
        player2Wins: this.props.player2Wins,
        gameCount: this.props.gameCount,

        gameTimer: 59000,
        roundIsRunning: true,
        roundWinner: "winnnnertest",

        //draw?
        //maybe others?
      };
  }

  handleTimeout = () => {
  
      alert("Timeout")
    
    // this.setState({
    //   [name]: value
    // });
  };

  render(props) {
    console.log("")
    console.log("======NEW ROUND COMPONENT======")
    console.log(this.props.testPass)
    console.log(this.props.player1Char)
    console.log(this.props.player2Char)
    console.log(this.props.player1Wins)
    console.log(this.props.player2Wins)
    console.log(this.props.gameCount)
    console.log("*****last 3 are passed states*****")
    console.log(this.state.gameTimer)
    console.log(this.state.roundIsRunning)
    console.log(this.state.roundWinner)
    console.log("========================")
    console.log("")
    //these all work
    console.log(this.state.player1Wins)










    return (
      <div>
        <div className="new-round">
          <Timer gameTimer={this.state.gameTimer}
                  onDone={this.handleTimeout}
          />

          <BothPlayers
            testPass={this.props.testPass}
            player1Char={this.props.player1Char}
            player2Char={this.props.player2Char}
            player1Wins={this.props.player1Wins}
            player2Wins={this.props.player2Wins}
            gameCount={this.props.gameCount}
            roundIsRunning={this.state.roundIsRunning}
            roundWinner={this.state.roundWinner}
          />
        </div>
      </div>
    );
  }
}

export default NewRound;
