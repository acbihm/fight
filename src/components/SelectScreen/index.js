import React from "react";
import "./style.css";
import Character from "../Character";
import ImgWrapper from "../ImgWrapper";
import SelectHeader from "../SelectHeader"
import BlurbSmall from "../BlurbSmall";

import P1CharacterNameBar from "../P1CharacterNameBar";
import P2CharacterNameBar from "../P2CharacterNameBar";
import Sprites from "../Sprites";
var charList = require('../../charList.json');
var spriteList = require('../../spriteList.json');


class SelectScreen extends React.Component {
    state = {
        charList,
        player1Name: false,
        player2Name: false
    }

    // handleItemClick = id => {
    //     const newData = this.state.data.map(item => {
    //     });
    // };
    // showAlert() {
    //     alert("Im an alert");
    // }

    assignCharacter1 = (id) => {
        // var spriteList;
        // console.log(id)
        if (id === 1) {
            console.log("Hank Hill")
            // this.setState(this.state.player1Name);
            this.setState({ player1Name: "Hank" })

        }
        else if (id === 2) {
            console.log("Peggy Hill")
            this.setState({ player1Name: "Peggy" })

        }
        else if (id === 3) {
            console.log("Dale")
            this.setState({ player1Name: "Dale" })

        }
        else if (id === 4) {
            console.log("Bobby")
            this.setState({ player1Name: "Bobby" })
        }
    }
    assignCharacter2 = (id) => {
        // var spriteList;
        // console.log(id)
        if (id === 1) {
            console.log("Hank Hill")
            // this.setState(this.state.player1Name);
            this.setState({ player2Name: "Hank" })

        }
        else if (id === 2) {
            console.log("Peggy Hill")
            this.setState({ player2Name: "Peggy" })

        }
        else if (id === 3) {
            console.log("Dale")
            this.setState({ player2Name: "Dale" })

        }
        else if (id === 4) {
            console.log("Bobby")
            this.setState({ player2Name: "Bobby" })
        }
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
    }

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
                            handleTest1={this.assignCharacter1}
                        // handleTest2={this.assignCharacter2}
                        />
                    ))}
                </ImgWrapper>
                {/* Create chosenCharacter object here, then 
                reference it below, and on the fight page */}
                <P1CharacterNameBar name={this.state.player1Name} />
                <P2CharacterNameBar name={this.state.player1Name} />
                {/* <h2> Waiting on player 1...</h2>
                <h2> Waiting on player 2...</h2> */}
                <BlurbSmall text="Ready to fight?" />

            </div>
        )
    }

}

export default SelectScreen;