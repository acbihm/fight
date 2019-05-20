import React, { Component } from "react";
import NavTabs from "./NavTabs/index";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Select from "./Pages/Select";
import Fight from "./Pages/Fight";
// import Head from "./Head";
import Footer from "./Footer";

class NavRouter extends Component {
    state = {
        currentPage: "Home"
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "Info") {
            return <Info/>;
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
                {/* <Head/> */}
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

export default NavRouter;
