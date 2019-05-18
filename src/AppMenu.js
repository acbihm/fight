import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import SelectScreen from './components/SelectScreen';

class AppMenu extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <SelectScreen />
        </Wrapper>
      </Fragment>
    );
  }
}
export default AppMenu;
