import React, { Component } from "react";
import NavTabs from "./NavTabs/index";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Select from "./Pages/Select";
import Fight from "./Pages/Fight";
import Head from "./Head";
import Footer from "./Footer";

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
                <Head/>
                    <NavTabs
                        currentPage={this.state.currentPage}
                        handlePageChange={this.handlePageChange}
                    />
                    {this.renderPage()}
                    <Footer />
            </div>
        );
    }
}

export default Container;
