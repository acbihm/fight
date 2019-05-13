import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
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
    borderWith: 7,
};

class PlayerRange extends React.Component {
    state = {
        x: 0,
        y: 0,
        pun: 'none',
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

    // punchMid = () => {
    //     this.setState(prevState => {
    //         this.setState({ pun: 'block' })
    //         setTimeout(
    //             function () {
    //                 this.setState({ pun: 'none' });
    //             }
    //                 .bind(this),
    //             300
    //         );

    //     })
    // }

    // punchFunction = () => {
    //     return ( <PlayerHitBoxPunchTest id='ptest' turnedOn='no' />
    //     )
    // }

    render() {
        // let punching;
        // if (this.isPunching === true) {

        //     punching =
        //         <PlayerHitBoxPunchTest />
        //         ReactDOM.render(punching); 
        // }

        return (
            <Fragment>
                <KeyEvents
                    onLeft={this.moveLeft}
                    onRight={this.moveRight}
                    onUp={this.moveUp}
                    onDown={this.moveDown}
                    punch={this.punchMid}
                />
                <div style={{
                    ...styles, ...{
                        transformOrigin: 'bottom left',
                        transform: `translate(${this.state.x}px, ${this.state.y}px)`,
                        pointerEvents: 'none',
                        // display: `${this.state.pun}`,
                    }
                }}>
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