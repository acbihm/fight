import "./style.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';


class App3 extends React.Component {
  state = {
    x: 110,
    y: 110
  };
  moveLeft = () => {
    this.setState(prevState => {
      this.setState({ x: prevState.x - 10 });
    });
  };
  moveRight = () => {
    this.setState(prevState => {
      this.setState({ x: prevState.x + 10 });
    });
  };
  moveUp = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y - 10 });
    });
  };
  moveDown = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y + 10 });
    });
  };
  moveUpLeft = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y + 10 },{ x: prevState.x - 10 } );
    });
  };
  moveUPLeft = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y - 10 },{ x: prevState.x - 10 } );
    });
  };
  moveDownLeft = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y - 10 },{ x: prevState.x - 10 } );
    });
  };
  moveDownRight = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y - 10 },{ x: prevState.x + 10 } );
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
          onUpLeft={this.moveUpLeft}
        />
        <div
          style={{
            position: "absolute",
            backgroundColor: "blue",
            height: 40,
            width: 40,
            transform: `translate(${this.state.x}px, ${this.state.y}px)`,
            pointerEvents: 'none',
          }}
        />
      </Fragment>
    );
  }
}
export default App3;
