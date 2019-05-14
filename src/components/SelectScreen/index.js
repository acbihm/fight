import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";
// import SelectStats from "../SelectStats";
// import SelectStatsP2 from "../SelectStats";
import CharInfo from "../CharInfo";
import Image from "../Image";
import SelectHeader from "../SelectHeader"
// var char1 = require('../../char1.json');

class SelectScreen extends React.Component {

    render() {
        // console.log(char1);
        return (
            <div className="select-screen" id="area">
                <SelectHeader text="Choose your character"></SelectHeader>
                {/* <Image /><br /> */}
                {/* <SelectStats name={char1[0].name} strength={char1[0].attack} defense={char1[0].defense} speed={char1[0].speed} special={char1[0].special} /> */}
                {/* <SelectStatsP2 name={char1[0].name} strength={char1[0].attack} defense={char1[0].defense} speed={char1[0].speed} special={char1[0].special} /> */}

            </div>
        )
    }

}

export default SelectScreen;