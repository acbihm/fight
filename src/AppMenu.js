import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';
import WrapperTest from "./components/WrapperTest";
import Image from "./components/Image";
import Profile from "./components/Profile";
import ProfileR from "./components/ProfileR";

import SelectStats from './components/SelectStats';
import SelectHeader from "./components/SelectHeader";
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
        <Profile />
        <ProfileR />

        <WrapperTest>
          <SelectScreen>
            <SelectHeader />
            <Image /><Image /><Image /><Image /><Image /><Image /><Image /><Image />
            <SelectStats />

          </SelectScreen>

        </WrapperTest>
      </Fragment>
    );
  }
}
export default AppMenu;
