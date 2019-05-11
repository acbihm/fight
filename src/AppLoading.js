import "./style.css";
import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import SelectHeader from "./components/SelectHeader";
import Footer from './components/Footer';
import Head from './components/Head';
import Blurb from "./components/Blurb";
import Gametext from "./components/Gametext";
import Spinner from "./components/Spinner";

// import ReactDOM from "react-dom";
// import KeyEvents from './components/KeyEvents';
// import Image from "./components/Image";
// import Searching from "./components/Searching";
// import SelectScreen from './components/SelectScreen';









class AppLoading extends React.Component {
    render() {
        return (
            <Fragment>
                    <Head />
                <Wrapper>
                    <Blurb>
                        <SelectHeader text="Fight for e-honor" />
                        <Gametext text="Use your avatar to attack other avatars and win honor online. You can use it to buy more characters, who you can then use to earn more honor points." />
                   {/* <Searching /> */}
                        <Spinner /> </Blurb>
                    
                </Wrapper>
                <Footer />
            </Fragment>
        );
    }
}
export default AppLoading;
