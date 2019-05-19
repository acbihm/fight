import "./style.css";
import React from "react";
import NewRound from "../NewRound";

class GameStart extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line no-unused-expressions
        this.state =
            {
                p1Name: "marcus",
                p1Wins: 0,
                p1HitPoints: 100,
                p1SpecPoints: 50,


                p2Name: "bob",
                p2Wins: 0,
                p2HitPoints: 100,
                p2SpecPoints: 50,
                
                


            }

    }
    render() {
        console.log(this.state.p1Name)
        return (
            <div>
                <NewRound
                    p1Wins = {this.state.p1Wins}
                    p2Wins = {this.state.p2Wins}
                    p1HitPoints = {this.state.p1HitPoints}

                    p2HitPoints = {this.state.p2HitPoints}

                />
            </div>

        );
    }
}
export default GameStart;
