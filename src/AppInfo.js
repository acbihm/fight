import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import SelectHeader from "./components/SelectHeader";
import Blurb from "./components/Blurb";
import Gametext from "./components/Gametext";
import Spinner from "./components/Spinner";

class AppInfo extends React.Component {
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <Blurb>
                        <SelectHeader text="Controls:" />
                        <Gametext text="Player 1 fdkmsnfd dsnx lorum fdsvf fdjsd s" />
                        <Spinner />
                        </Blurb>
                </Wrapper>
            </Fragment>
                );
            }
        }
        export default AppInfo;
