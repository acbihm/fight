import React from "react";
import './style.css';
function NavTabs(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => props.handlePageChange("Home")}
                    className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                >
                    Home
        </a>
            </li>
            <li className="nav-item">
                <a
                    href="#info"
                    onClick={() => props.handlePageChange("Info")}
                    className={props.currentPage === "Info" ? "nav-link active" : "nav-link"}
                >
                    Info
        </a>
            </li>
            <li className="nav-item">
                <a
                    href="#select"
                    onClick={() => props.handlePageChange("Select")}
                    className={props.currentPage === "Select" ? "nav-link active" : "nav-link"}
                >
                    Select
        </a>
            </li>
            <li className="nav-item">
                <a
                    href="#fight"
                    onClick={() => props.handlePageChange("Fight")}
                    className={props.currentPage === "Fight" ? "nav-link active" : "nav-link"}
                >
                    Fight
        </a>
            </li>
        </ul>
    );
}

export default NavTabs;
