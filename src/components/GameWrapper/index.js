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
                roundId: Date.now()
            };
    }

    onRoundEnd = () => {
        this.setState({
            roundId: Date.now()
        })
    }
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

                />
            </div>
        );
    }
}

export default GameWrapper;

