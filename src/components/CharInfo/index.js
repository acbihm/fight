import React from "react";
// import SelectHeader from "../SelectHeader";
// import "./style.css";
import SelectStats from "../SelectStats";
import Image from "../Image";
// import SelectHeader from "../SelectHeader"
var char1 = require('../../char1.json');
var char2 = require('../../char2.json');
var char3 = require('../../char3.json');
var char4 = require('../../char4.json');





function CharInfo(props) {
    const chars = char1.map(ccc => {
        if (ccc) {
            console.log(ccc.name)
        } else {
            return null
        }
        return ccc;
    });

    console.log(chars[0]);
    return (
        <div>
            <SelectStats name={chars[0].name} strength={chars[0].attack} defense={chars[0].defense} speed={chars[0].speed} special={chars[0].special} />
        <Image />
        </div>
    )


}

export default CharInfo;