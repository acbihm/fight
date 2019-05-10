import React from "react";
import "./style.css";

function SelectStats(props) {
    return <div className="select-stats">
        <h2>NAME</h2>
        <h3><i>Strongest strong strongly strongdar character</i></h3>
        <ul>
            <li>HP: 200</li>
            <li>ATK: 150</li>
            <li>DEF: 300</li>
        </ul>
        <h3>Special: NAME NAME</h3>
    </div>;
}

export default SelectStats;