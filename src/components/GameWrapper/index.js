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
            };
    }
    render(props) {
        // console.log(this.state.player1Char)
        // console.log(this.props.testPass)
        //example --> (this.props)

        //functions
        //setState
        //handlers

        return (
            <div className="game-wrapper">

            {/* {this.state.example}
            {this.props.example} */}

                <NewRound 
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

