import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';
import WrapperTest from "./components/WrapperTest";
import Image from "./components/Image";
import SelectScreen from './components/SelectScreen';



class AppMenu extends React.Component {
  
  // state = {
  //   x: 0,
  //   y: 0,
  // };

  // moveLeft = () => {
  //   this.setState(prevState => {
  //     this.setState({ x: prevState.x - 10 });
  //   });
  // };

  // moveRight = () => {
  //   this.setState(prevState => {
  //     this.setState({ x: prevState.x + 10 });
  //   });
  // };

  // moveUp = () => {
  //   this.setState(prevState => {
  //     this.setState({ y: prevState.y - 10 });
  //   });
  // };

  // moveDown = () => {
  //   this.setState(prevState => {
  //     this.setState({ y: prevState.y + 10 });
  //   });
  // };

  render() {
    return (
      <Fragment>
        <WrapperTest>
        <SelectScreen>
        <Image /><Image /><Image /><Image /><Image /><Image /><Image /><Image /><Image />
        </SelectScreen>
        
        </WrapperTest>
      </Fragment>
    );
  }
}
export default AppMenu;
