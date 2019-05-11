import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';
// import EnemyTest from "./components/Test/EnemyTest";
import Wrapper from "./components/Wrapper";
import Head from "./components/Head";
import Stage from "./components/Stage"
import Footer from "./components/Footer";
import PlayerRange from "./components/PlayerRange"


class AppFight extends React.Component {
    // state = {
    //     x: 0,
    //     y: 0,
    // };

    // moveLeft = () => {
    //     this.setState(prevState => {
    //         this.setState({ x: prevState.x - 10 });
    //     });
    // };

    // moveRight = () => {
    //     this.setState(prevState => {
    //         this.setState({ x: prevState.x + 10 });
    //     });
    // };

    // moveUp = () => {
    //     this.setState(prevState => {
    //         this.setState({ y: prevState.y - 10 });
    //     });
    // };

    // moveDown = () => {
    //     this.setState(prevState => {
    //         this.setState({ y: prevState.y + 10 });
    //     });
    // };

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
