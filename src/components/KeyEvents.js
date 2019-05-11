/* eslint-disable default-case */
// import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
class KeyEvents extends React.Component {
    level;
    componentDidMount() {
        ReactDOM.findDOMNode(this.level).focus();
    }
    onKeyDown = event => {
        switch (event.keyCode) {
            case 37:
                this.props.onLeft();
                break;
            case 39:
                this.props.onRight();
                break;
            // case 38:
            //     this.props.onUp();
            //     break;
            // case 40:
            //     this.props.onDown();
            //     break;

            // ======================

            // case 37 && 38:
            //     this.props.onUpLeft();
            //     break;
            // case 39 && 39:
            //     this.props.onUpRight();
            //     break;
            // case 40 && 39:
            //     this.props.onDownRight();
            //     break;
            // case 40 && 37:
            //     this.props.onDownLeft();
            //     break;
        }
    };
    render() {
        return (
            <div
                onKeyDown={this.onKeyDown}
                style={{
                    position: "absolute",
                    width: '92vw',
                    height: '89vh',
                    outline: 'none',
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