/* eslint-disable default-case */
import React from "react";
import ReactDOM from "react-dom";
import { Gamepad } from 'joystick-react';


class KeyEvents extends React.Component {
    level;
    componentDidMount() {
        ReactDOM.findDOMNode(this.level).focus();
        const gamepad1 = new Gamepad(true);
        gamepad1.on('gamepadevent', event => {
            switch (event.keyCode) {
                case 1:
                    this.props.onQKey();
                    break;
                case 2:
                    this.props.onWKey();
                    break;
                case 13:
                    this.props.onDKey();
                    this.props.onDKey();
                    // console.log(event.keyCode)
                    break;
                case 15:
                    this.props.onAKey();
                    this.props.onAKey();
                    break;
                case 4:
                    this.props.onSpaceKey();
                    break;
            }
        });


        const gamepad2 = new Gamepad(true);
        gamepad2.on('gamepadevent', event => {
            switch (event.keyCode) {
                case 1:
                    this.props.onQKey();
                    break;
                case 2:
                    this.props.onWKey();
                    break;
                case 13:
                    this.props.onDKey();
                    this.props.onDKey();
                    // console.log(event.keyCode)
                    break;
                case 15:
                    this.props.onAKey();
                    this.props.onAKey();
                    break;
                case 4:
                    this.props.onSpaceKey();
                    break;
            }
        });

        

    }


    onKeyDown = (event) => {
        switch (event.keyCode) {
            case 1:
                this.props.onSpaceKey();
                break;
            case 32:
                this.props.onSpaceKey();
                console.log(event.type)
                break;
            case 65:
                this.props.onAKey();
                break;
            case 68:
                this.props.onDKey();
                break;
            case 81:
                this.props.onQKey();
                break;
            case 87:
                this.props.onWKey();
                break;
            case 37:
                this.props.onLeft();
                break;
            case 39:
                this.props.onRight();
                break;
            case 80:
                this.props.onPKey();
                break;
            case 79:
                this.props.onOKey();
                break;
        }
    };
    render() {
        const gamepad1 = new Gamepad(true);
        gamepad1.on('gamepadevent', event => console.log(event));

        const gamepad2 = new Gamepad(true);
        gamepad2.on('gamepadevent', event => console.log(event));

        return (
            <div
                onKeyDown={this.onKeyDown}
                style={{
                    position: "absolute",
                    width: '92vw',
                    height: '89vh',
                    // outlineStyle: 'double',
                    // outlineColor: 'pink',
                    // outlineWidth: 10
                }}
                tabIndex="0"
                ref={ref => {
                    this.level = ref;
                }}
            />
        );
    }
}
export default KeyEvents;

