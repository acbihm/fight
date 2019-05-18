import React from "react";
import "./style.css";
import Character from "../Character";
import ImgWrapper from "../ImgWrapper";
import SelectHeader from "../SelectHeader"
import Player1Character from "../Player1Character";
import Player2Character from "../Player2Character";
import Sprites from "../Sprites";
var charList = require('../../charList.json');
var spriteList = require('../../spriteList.json');


class SelectScreen extends React.Component {
    state = {
        charList,
        player1: null,
        player2: null
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
        // if (id === 1) {
        //     spriteList = character1;
        // }
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
        // console.log(char1);
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
                            handleTest={this.assignCharacter1}
                        />
                    ))}
                </ImgWrapper>
                {/* Create chosenCharacter object here, then 
                reference it below, and on the fight page */}
                {/* <Player1Character />
                <Player2Character name="testww" /> */}
                <h2> Waiting on player 1...</h2>
                <h2> Waiting on player 2...</h2>
            </div>
        )
    }

}

export default SelectScreen;