import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import GameStart from "./components/GameStart";

class AppFight extends React.Component {    
    
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <GameStart 
                    //need to pass the previous page into this one.
                        props="test"
                        
                    />
                </Wrapper>
            </Fragment>
        );
    }
}
export default AppFight;
