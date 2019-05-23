import React from "react";
import "./style.css";

function Character(props) {

    // const sendId = () => {
    //    props.handleTest1(props.id)
    // }

    return (
        <div className="card">
            <div className="img-container"
            // onClick={sendId}
            >
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                {props.name}
            </div>
        </div>
    );

}

export default Character;
