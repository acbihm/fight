import React, { Component } from "react";
import NavTabs from "./NavTabs/index";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Select from "./Pages/Select";
import Fight from "./Pages/Fight";

import Wrapper from "./Wrapper";
import SelectHeader from "./SelectHeader";
import Footer from './Footer';
import Head from './Head';
import Blurb from "./Blurb";
import Gametext from "./Gametext";
import Spinner from "./Spinner";

class Container extends Component {
    state = {
        currentPage: "Home"
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "About") {
            return <About />;
        } 
        else if (this.state.currentPage === "Select") {
            return <Select />;
        } else {
            return <Fight />;
        }
    };

    render() {
        return (
            <div>
                
                {this.renderPage()}
                <Head />
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                <Wrapper>
                    <Blurb>
                        <SelectHeader text="Fight for e-honor" />
                        <Gametext text="Use your avatar to attack other avatars and win honor online. You can use it to buy more characters, who you can then use to earn more honor points." />
                   {/* <Searching /> */}
                        <Spinner /> </Blurb>
                    
                </Wrapper>
                <Footer />
            </div>
        );
    }
}

export default Container;
