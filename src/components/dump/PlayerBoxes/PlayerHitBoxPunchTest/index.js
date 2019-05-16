import React, { Fragment } from "react";
import "./style.css";
import KeyEvents from "../../../KeyEvents";

const styles = {
    position: 'inherit',
    height: 550,
    width: 380,
    // bottom: 20,
    // left: 35,
    zIndex: 9999,

    borderWith: 7,
};


class PlayerHitBoxPunchTest extends React.Component {
    state = {
        pun: 'none',
    };

    punchMid = () => {
        this.setState(prevState => {
            this.setState({ pun: 'block' })
            setTimeout(
                function () {
                    this.setState({ pun: 'none' });
                }
                    .bind(this),
                400
            );
            console.log(this)
        })
    }

    render() {

        return (
            <Fragment>
                {/* <KeyEvents
                    // onLeft={this.moveLeft}
                    // onRight={this.moveRight}
                    // onUp={this.moveUp}
                    // onDown={this.moveDown}
                    punch={this.punchMid}
                /> */}
                <div style={{
                    ...styles, ...{
                        display: `${this.state.pun}`,
                    }
                }}>
                    <div id="Ppunch">punch</div>
                </div>
            </Fragment>)
    }

}

export default PlayerHitBoxPunchTest;

