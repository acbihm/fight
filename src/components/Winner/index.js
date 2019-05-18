
import React from "react";
// import SelectHeader from "../SelectHeader";
// import "./style.css";
import Popup from "../Popup";


const Winner = (props) => {
    
    const p1Won = props.p1;
    const p2Won = props.p2;
    if (p1Won === true) {
        return (
            <div>
                {console.log(`player 1 won: ${props.p1}`)}
                {console.log(`player 2 lost: ${props.p1}`)}
                <Popup winner="player 1" />

            </div>
        )
    }
    else if (p2Won === true) {
        return (
            <div>
                {console.log(`player 2 won: ${props.p2}`)}
                {console.log(`player 1 lost: ${props.p2}`)}
                <Popup winner="player 2" />



            </div>
        )
    }

}



export default Winner;
