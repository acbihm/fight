import "./style.css";
import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import KeyEvents from './components/KeyEvents';
import WrapperTest from "./components/WrapperTest";
// import Image from "./components/Image";

import SelectHeader from "./components/SelectHeader";
// import SelectScreen from './components/SelectScreen';
import Footer from './components/Footer';
import Head from './components/Head';
import Blurb from "./components/Blurb";
import Gametext from "./components/Gametext";
import Spinner from "./components/Spinner";
// import Searching from "./components/Searching";








class AppLoading extends React.Component {
    render() {
        return (
            <Fragment>
                    <Head />
                <WrapperTest>
                    <Blurb>
                        <SelectHeader text="Fight for e-honor" />
                        <Gametext text="Use your avatar to attack other avatars and win honor online. You can use it to buy more characters, who you can then use to earn more honor points." />
                   {/* <Searching /> */}
                        <Spinner /> </Blurb>
                    
                </WrapperTest>
                <Footer />
            </Fragment>
        );
    }
}
export default AppLoading;
