import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';
import EnemyTest from "./components/Test/EnemyTest";
import WrapperTest from "./components/WrapperTest";
import Image from "./components/Image";
import Bar from "./components/Bar";
// import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SelectScreen from './components/SelectScreen';
import SelectStats from './components/SelectStats';
import SelectHeader from "./components/SelectHeader";



class AppTest extends React.Component {
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

  render() {
    return (
      <Fragment>
        <WrapperTest>
        {/* <Bar/> */}
        <ProgressBar now={50} />
        
        <SelectScreen>
        <SelectHeader />
        <Image /><Image /><Image /><Image /><Image /><Image /><Image /><Image />
                <SelectStats />

        </SelectScreen>
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
              left: 0,
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
export default AppTest;
