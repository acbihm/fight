/* eslint-disable default-case */
import React from "react";
import ReactDOM from "react-dom";
class KeyEvents extends React.Component {
    level;
    componentDidMount() {
        ReactDOM.findDOMNode(this.level).focus();
    }

    onKeyDown = event => {
        switch (event.keyCode) {
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
                    outlineStyle: 'double',
                    outlineColor: 'pink',
                    outlineWidth: 10
                }}
                tabIndex="-1"
                ref={ref => {
                    this.level = ref;
                    // console.log(ref);
                    // Foudn this on Stack overflow{(n) => this.node = n}
                }}
            />
        );
    }
}
export default KeyEvents;

