import React from "react";
import "./style.css";
import NewRound from "../NewRound";

class GameWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                player1Char: "Alex",
                player2Char: "Jeff",
                player1Wins: 1,
                player2Wins: 0,
                gameCount: 1,
                roundId: Date.now(),
                gameRunning: false
            };
    }

    onRoundEnd = () => {
        this.setState({
            roundId: Date.now()
        })
    }

    updateWins = (roundWinner) => {
        if (roundWinner === this.state.player1Char) {
            this.setState({
                player1Wins: this.state.player1Wins + 1,
                gameCount: this.state.gameCount + 1
            })
        }
        if (roundWinner === this.state.player2Char) {
            this.setState({
                player2Wins: this.state.player2Wins + 1,
                gameCount: this.state.gameCount + 1
            })
        }
        // alert("success")
        this.onRoundEnd()
    }

    // exitRound = () => {
    //     alert('round over')
    // }
    // componentDidUpdate(_, prevState) {

    //     if (this.state.gameRunning === true) {
    //         return null
    //     }
    //     else if (this.state.gameRunning === false) {
    //         this.exitRound();
    //     }
    // }

    render(props) {
        return (
            <div className="game-wrapper">

                <NewRound
                    key={this.state.roundId}
                    testPass={this.props.testPass}
                    player1Char={this.state.player1Char}
                    player2Char={this.state.player2Char}
                    player1Wins={this.state.player1Wins}
                    player2Wins={this.state.player2Wins}
                    gameCount={this.state.gameCount}
                    updateWins={this.updateWins}
                    exitRound={this.exitRound}
                />
            </div>
        );
    }
}

export default GameWrapper;

