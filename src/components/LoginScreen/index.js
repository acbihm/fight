import React from "react";
// import SelectHeader from "../SelectHeader";
import "./style.css";
// import SelectStats from "../SelectStats";
// import SelectStatsP2 from "../SelectStats";
// import CharInfo from "../CharInfo";
// import Image from "../Image";
import SelectHeader from "../SelectHeader"
// import Form1 from "../Form1";
// import Form2 from "../Form2";
import FormTest from "../FormTest";
// var char1 = require('../../char1.json');

class LoginScreen extends React.Component {

    render() {
        // console.log(char1);
        return (
            <div className="select-screen" id="area">
                <SelectHeader text="Log In"></SelectHeader>
                <FormTest />
            {/* <Form1 />
            <h2></h2>
            <Form2 /> */}
            </div>
        )
    }

}

export default LoginScreen;