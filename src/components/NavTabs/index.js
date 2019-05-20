import React from "react";
import './style.css';

function NavTabs(props) {
    return (
        <div className="headbar small-nav">
            <ul className="nav">
                <li className="">
                    {/* <span id="small-nav"> */}
                    
                    <a
                        href="#home"
                        onClick={() => props.handlePageChange("Home")}
                        className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                    >
                    <span className="fa fa-home"></span>
                    &nbsp; &nbsp;
                        Main Menu
        </a>
                    {/* </span> */}
                </li>
                <li className="">
                    <a
                        href="#info"
                        onClick={() => props.handlePageChange("Info")}
                        className={props.currentPage === "Info" ? "nav-link active" : "nav-link"}
                    >
                        Game Info
        </a>
                </li>
                <li className="">
                    <a
                        href="#select"
                        onClick={() => props.handlePageChange("Select")}
                        className={props.currentPage === "Select" ? "nav-link active" : "nav-link"}
                    >
                        Character Select
        </a>
                </li>
                <li className="">
                    <a
                        href="#fight"
                        onClick={() => props.handlePageChange("Fight")}
                        className={props.currentPage === "Fight" ? "nav-link active" : "nav-link"}
                    >
                        Start Match
        </a>
                </li>
            </ul>

            <span id="cog">| &nbsp; &nbsp;
            <span className="fa fa-cog">
                </span>
            </span>
        </div>
    );
}

export default NavTabs;
