import React from "react";
import "./style.css";
import SelectHeader from "../SelectHeader"
import FormContainer from "../FormContainer";
class LoginScreen extends React.Component {

    render() {
        return (
            <div className="select-screen" id="area">
                <SelectHeader text="Log In"></SelectHeader>
                <FormContainer />
                <FormContainer />
                <div>test</div>

            </div>
        )
    }

}

export default LoginScreen;