import React from "react";
import "./style.css";
import SelectHeader from "../SelectHeader";

function SelectStats(props) {
    return <div className="select-stats">
    <div className="selection-box">
        <div id="p1Select" className="select">
        <SelectHeader text={props.name}></SelectHeader>

            <h3><i><b>Special: &nbsp;</b></i> {props.special}</h3>
            <ul>
                <li><i><b>Strength: &nbsp;</b></i> {props.strength}</li>
                <li><i><b>Defense: &nbsp;</b></i> {props.defense}</li>
                <li><i><b>Speed: &nbsp;</b></i> {props.speed}</li>
            </ul>
        </div>

        <div id="p2Select" className="select">
        <SelectHeader text={props.name}></SelectHeader>
        <h3><i><b>Special: &nbsp;</b></i> {props.special}</h3>
            <ul>
                <li><i><b>Strength: &nbsp;</b></i> {props.strength}</li>
                <li><i><b>Defense: &nbsp;</b></i> {props.defense}</li>
                <li><i><b>Speed: &nbsp;</b></i> {props.speed}</li>
            </ul>
            
        </div>
        </div>
    </div>
}

export default SelectStats;