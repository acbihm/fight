import React, { Fragment } from 'react';
import PlayerHitBoxPunchTest from "../PlayerBoxes/PlayerHitBoxPunchTest";
import PlayerHitBoxKickTest from "../PlayerBoxes/PlayerHitBoxKickTest";
import PlayerTest from "../Test/PlayerTest";
import KeyEvents from "../KeyEvents";

// import "./style.css";

const styles = {

    position: 'inherit',
    height: 550,
    width: 380,
    bottom: 20,
    left: 35,
    zIndex: 9999,
    borderStyle: 'solid',


};



class PlayerRange extends React.Component {
    state = {
        x: 0,
        y: 0,
    };

    moveLeft = () => {
        this.setState(prevState => {
            this.setState({ x: prevState.x - 28 });
        });
    };

    moveRight = () => {
        this.setState(prevState => {
            this.setState({ x: prevState.x + 28 });
        });
    };

    moveUp = () => {
        this.setState(prevState => {
            this.setState({ y: prevState.y - 28 });
        });
    };

    moveDown = () => {
        this.setState(prevState => {
            this.setState({ y: prevState.y + 28 });
        });
    };

    render() {
        return (
            <Fragment>
                <KeyEvents
                    onLeft={this.moveLeft}
                    onRight={this.moveRight}
                    onUp={this.moveUp}
                    onDown={this.moveDown}
                    onUpLeft={this.moveUpLeft} />

                <div style={{...styles, ...{
                    transformOrigin: 'bottom left',
                    transform: `translate(${this.state.x}px, ${this.state.y}px)`,
                    pointerEvents: 'none'
                }}}
                    id='TestingID'>
                    <PlayerTest />
                    <PlayerHitBoxKickTest />
                    <PlayerHitBoxPunchTest />
                    <h2>Player Range test</h2>
                    <h3>550 tall x 380 wide</h3>
                </div>
            </Fragment>
        );

    }
}
export default PlayerRange;