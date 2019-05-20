import React from "react";
import "./style.css";
import SelectHeader from "../SelectHeader"
import BlurbSmall from "../BlurbSmall";
// import SelectHeader from "./components/SelectHeader";
import Blurb from "../Blurb";
// import Gametext from "../Gametext";
import Gametext from "../Gametext"
// import Spinner from "./components/Spinner";
// import BlurbSmall from "./components/BlurbSmall";



class InfoScreen extends React.Component {



    render() {
        return (
            <div className="select-screen" id="area">
                <SelectHeader text="How to play"></SelectHeader>
                <Gametext text="Players can play one of two ways: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                They can choose to use the keyboard to control their character.
                &nbsp; &nbsp;&nbsp; &nbsp;  --or-- &nbsp; &nbsp; They can choose to use a gamepad/controller." />
                <BlurbSmall text="Got it?" />
            </div>
        )
    }

}

export default InfoScreen;