import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import InfoScreen from "./components/InfoScreen";

class AppInfo extends React.Component {
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <InfoScreen />
                </Wrapper>
            </Fragment>
                );
            }
        }
        export default AppInfo;
