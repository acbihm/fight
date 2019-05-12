import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import KeyEvents from './components/KeyEvents';
import Wrapper from "./components/Wrapper";
// import Image from "./components/Image";
import Profile from "./components/Profile";
import ProfileR from "./components/ProfileR";

// import SelectStats from './components/SelectStats';
// import SelectHeader from "./components/SelectHeader";
import SelectScreen from './components/SelectScreen';
import Footer from './components/Footer';
import Head from "./components/Head";




class AppMenu extends React.Component {
  render() {
    return (
      <Fragment>
        <Profile />
        <ProfileR />
        <Head />
        <Wrapper>
          <SelectScreen>
          </SelectScreen>
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}
export default AppMenu;
