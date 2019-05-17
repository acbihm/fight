import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import LoginScreen from './components/LoginScreen';
// import ReactDOM from "react-dom";
// import KeyEvents from './components/KeyEvents';
// import Image from "./components/Image";
// import Profile from "./components/Profile";
// import ProfileR from "./components/ProfileR";
// import SelectStats from './components/SelectStats';
// import SelectHeader from "./components/SelectHeader";
// import Footer from './components/Footer';
// import Head from "./components/Head";

class AppLogin extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <LoginScreen>
          </LoginScreen>
        </Wrapper>

      </Fragment>
    );
  }
}
export default AppLogin;
