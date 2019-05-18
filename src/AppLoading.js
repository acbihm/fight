import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import SelectHeader from "./components/SelectHeader";
import Blurb from "./components/Blurb";
import Gametext from "./components/Gametext";
import Spinner from "./components/Spinner";

class AppLoading extends React.Component {
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <Blurb>
                        <SelectHeader text="Loading" />
                        <Gametext text="Pls wait" />
                        <Spinner /> </Blurb>
                </Wrapper>
            </Fragment>
        );
    }
}
export default AppLoading;
