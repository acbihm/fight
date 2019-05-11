import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';
// import EnemyTest from "./components/Test/EnemyTest";
import Wrapper from "./components/Wrapper";
import Head from "./components/Head";
import Stage from "./components/Stage"
import Footer from "./components/Footer";


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
        <Head />
        <Wrapper>
          <Stage />
          <KeyEvents
            onLeft={this.moveLeft}
            onRight={this.moveRight}
            onUp={this.moveUp}
            onDown={this.moveDown}
            onUpLeft={this.moveUpLeft}
          />
          {/* <EnemyTest /> */}
          {/*
          <div
            style={{
              zIndex: 9999,
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
             <HitBoxPunchTest />
            <HitBoxKickTest />
            <GuardTest /> 
          </div>*/}
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}
export default AppTest;
