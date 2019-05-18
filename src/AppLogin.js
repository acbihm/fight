import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import LoginScreen from './components/LoginScreen';


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
