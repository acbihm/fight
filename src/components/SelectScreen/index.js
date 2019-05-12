import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";
import SelectStats from "../SelectStats";
import Image from "../Image";
import SelectHeader from "../SelectHeader"


function SelectScreen(props) {
    return (
        <div className="select-screen" id="area">
            <SelectHeader text="Choose your character"></SelectHeader>
            <Image /><Image /><Image /><Image /><br />
            <SelectStats name="Hank" strength="3" defense="4" speed="5" special="Propane" />
        </div>
    )
}

export default SelectScreen;