import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import Stage from "./components/Stage"

class AppFight extends React.Component {
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <Stage />
                </Wrapper>
            </Fragment>
        );
    }
}
export default AppFight;
