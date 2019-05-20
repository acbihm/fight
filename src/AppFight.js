import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import GameWrapper from "./components/GameWrapper";

class AppFight extends React.Component {    
    
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <GameWrapper 
                    testPass="successfully recieved props from appFight"
                    />
                </Wrapper>
            </Fragment>
        );
    }
}
export default AppFight;
