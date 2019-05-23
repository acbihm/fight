import React from "react";
import "./style.css";
import Character from "../Character";
import ImgWrapper from "../ImgWrapper";
import SelectHeader from "../SelectHeader"
import BlurbSmall from "../BlurbSmall";

import P1CharacterNameBar from "../P1CharacterNameBar";
import P2CharacterNameBar from "../P2CharacterNameBar";
// import Sprites from "../Sprites";
var charList = require('../../charList.json');
// var spriteList = require('../../spriteList.json');


class SelectScreen extends React.Component {
    state = {
        charList,
        player1Name: "Player 1",
        player2Name: "Player 2"
    }


  

    handleItemClick = id => {
        // let guessedCorrectly = false;
        // const newData = this.state.data.map(item => {
        //     if (newItem.id === id) {
        //         if (!newItem.clicked) {
        //         }
        //     }
        //     return newItem;
        // });
    };

    // handleItemClick = id => {
    //     const newData = this.state.data.map(item => {
    //     });
    // };
    // showAlert() {
    //     alert("Im an alert");
    // }

    assignPlayer1 = (id) => {

        if (id === 1) {
            console.log("ONE")
            // this.setState(this.state.player1Name);
            this.setState({ player1Name: "ONE" })

        }
        else if (id === 2) {
            console.log("TWO")
            this.setState({ player1Name: "TWO" })

        }
        else if (id === 3) {
            console.log("THREE")
            this.setState({ player1Name: "THREE" })

        }
        else if (id === 4) {
            console.log("FOUR")
            this.setState({ player1Name: "FOUR" })
        }
    }


    // assignPlayer2 = (id) => {

    //     if (id === 1) {
    //         console.log("ONE")
    //         // this.setState(this.state.player1Name);
    //         this.setState({ player2Name: "ONE" })

    //     }
    //     else if (id === 2) {
    //         console.log("TWO")
    //         this.setState({ player2Name: "TWO" })

    //     }
    //     else if (id === 3) {
    //         console.log("THREE")
    //         this.setState({ player2Name: "THREE" })

    //     }
    //     else if (id === 4) {
    //         console.log("FOUR")
    //         this.setState({ player2Name: "FOUR" })
    //     }
        // return (
        //     // this.state.spriteList.map(spriteList => (
        //         <Sprites
        //             walk={spriteList.walk}
        //             stand={spriteList.stand}
        //             punch={spriteList.punch}
        //             kick={spriteList.kick}
        //         />
        //     // ))
        // )
    // }

    render() {
        return (
            <div className="select-screen" id="area">
                <SelectHeader text="Choose your character"></SelectHeader>
                <ImgWrapper>
                    {this.state.charList.map(charList => (
                        <Character
                            id={charList.id}
                            key={charList.id}
                            name={charList.name}
                            image={charList.image}
                            className={charList.id}
                            // handleTest1={this.assignCharacter1}
                        // handleTest2={this.assignCharacter2}
                        />
                    ))}
                </ImgWrapper>
                {/* Create chosenCharacter object here, then 
                reference it below, and on the fight page */}
                <P1CharacterNameBar name={this.state.player1Name} />
                <P2CharacterNameBar name={this.state.player2Name} />
                {/* <h2> Waiting on player 1...</h2>
                <h2> Waiting on player 2...</h2> */}
                <BlurbSmall text="Ready to fight?" />

            </div>
        )
    }

}

export default SelectScreen;