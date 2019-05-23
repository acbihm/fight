import React from "react";
import "./style.css";
import SelectHeader from "../SelectHeader"
import BlurbSmall from "../BlurbSmall";
// import SelectHeader from "./components/SelectHeader";
// import Blurb from "../Blurb";
// import Gametext from "../Gametext";
import Gametext from "../Gametext"
// import Spinner from "./components/Spinner";
// import BlurbSmall from "./components/BlurbSmall";



class InfoScreen extends React.Component {



    render() {
        return (
            <div className="select-screen" id="area">
                <SelectHeader text="How to play"></SelectHeader>
                
               <img src="https://imgur.com/Y4lslr0.png" alt="controls"/>
               <Gametext text="Players can play with a gamepad or with the keyboard. The arrow keys control movement, and the 'P' key will punch, and the 'O' key will kick" />
               
                <BlurbSmall text="Got it?" />
            </div>
        )
    }

}

export default InfoScreen;