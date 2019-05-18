import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import LoginScreen from './components/LoginScreen';

class LoginHome extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <LoginScreen />
        </Wrapper>
      </Fragment>
    );
  }
}
export default LoginHome;
