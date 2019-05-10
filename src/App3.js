import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';
import EnemyTest from "./components/Test/EnemyTest";
// import HitBoxPunchTest from "./components/Test/HitBoxPunchTest";
// import HitBoxKickTest from "./components/Test/HitBoxKickTest";
import WrapperTest from "./components/WrapperTest";
// import GuardTest from "./components/Test/GuardTest";
import Image from "./components/Image";
// import data from "data.json";







class App3 extends React.Component {
  state = {
    x: 0,
    y: 0,
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
      this.setState({ y: prevState.y + 10 }, { x: prevState.x - 10 });
    });
  };
  moveUPLeft = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y - 10 }, { x: prevState.x - 10 });
    });
  };
  moveDownLeft = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y - 10 }, { x: prevState.x - 10 });
    });
  };
  moveDownRight = () => {
    this.setState(prevState => {
      this.setState({ y: prevState.y - 10 }, { x: prevState.x + 10 });
    });
  };

  render() {
    return (
      <Fragment>
        <WrapperTest>
        <Image /><Image /><Image />
          <KeyEvents
            onLeft={this.moveLeft}
            onRight={this.moveRight}
            onUp={this.moveUp}
            onDown={this.moveDown}
            onUpLeft={this.moveUpLeft}
          />
          
          <EnemyTest />


          <div
            style={{
              position: "absolute",
              backgroundColor: "lightblue",
              top: 0,
              clear: 'both',
              height: 600,
              width: 200,
              transform: `translate(${this.state.x}px, ${this.state.y}px)`,
              pointerEvents: 'none'
            }}>
            {/* <HitBoxPunchTest />
            <HitBoxKickTest />
            <GuardTest /> */}

          </div>
        </WrapperTest>
      </Fragment>
    );
  }
}
export default App3;
