import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import KeyEvents from './components/KeyEvents';
import Wrapper from "./components/Wrapper";
import Head from "./components/Head";
import Stage from "./components/Stage"
import Footer from "./components/Footer";


class AppFight extends React.Component {

    render() {
        return (
            <Fragment>
                <Head />
                <Wrapper>
                    {/* <KeyEvents
                        onLeft={this.moveLeft}
                        onRight={this.moveRight}
                        onUp={this.moveUp}
                        onDown={this.moveDown}
                        onUpLeft={this.moveUpLeft} /> */}
                    <Stage />
                </Wrapper>
                <Footer />
            </Fragment>
        );
    }
}
export default AppFight;
