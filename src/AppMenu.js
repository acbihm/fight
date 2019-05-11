import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import KeyEvents from './components/KeyEvents';
import Wrapper from "./components/Wrapper";
import Image from "./components/Image";
import Profile from "./components/Profile";
import ProfileR from "./components/ProfileR";

import SelectStats from './components/SelectStats';
import SelectHeader from "./components/SelectHeader";
import SelectScreen from './components/SelectScreen';
import Footer from './components/Footer';
import Head from "./components/Head";




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
        {/* <Profile />
        <ProfileR /> */}
        <Head />
        <Wrapper>
          <SelectScreen>
            {/* <SelectHeader /> */}
            <Image /><Image /><Image /><Image /><Image /><Image /><Image /><Image />
            <SelectStats /> 
          </SelectScreen>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}
export default AppMenu;
