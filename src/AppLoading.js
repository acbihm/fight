import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import KeyEvents from './components/KeyEvents';
import WrapperTest from "./components/WrapperTest";
// import Image from "./components/Image";

import SelectHeader from "./components/SelectHeader";
import SelectScreen from './components/SelectScreen';
import Footer from './components/Footer';
import Head from './components/Head';





class AppLoading extends React.Component {
    render() {
        return (
            <Fragment>
                    <Head />
                <WrapperTest>
                    <SelectScreen>
                        <SelectHeader text="Searching for opponent!" />
                    </SelectScreen>
                </WrapperTest>
                <Footer />
            </Fragment>
        );
    }
}
export default AppLoading;
