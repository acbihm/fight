import React from "react";
import "./style.css";
import Character from "../Character";
import ImgWrapper from "../ImgWrapper";
import SelectHeader from "../SelectHeader"
import Player1Character from "../Player1Character";
import Player2Character from "../Player2Character";
var charList = require('../../charList.json');

class SelectScreen extends React.Component {
    state = {
        charList,
        // player1,
        // player2
    }



    // handleItemClick = id => {
        
    //     const newData = this.state.data.map(item => {


    //     });
    // };


    // showAlert() {
    //     alert("Im an alert");
    // }
    assignCharacter = (id) => {
        console.log(id)
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
                            // onClick={this.showAlert}
                            handleTest={this.assignCharacter}

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