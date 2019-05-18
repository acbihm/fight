import React from "react";
import "./style.css";

function Character(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                
                        {props.name}
                    

                
            </div>
            
        </div>
    );
}

export default Character;
