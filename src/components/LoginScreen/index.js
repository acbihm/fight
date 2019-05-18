import React from "react";
import "./style.css";
import SelectHeader from "../SelectHeader"
import FormContainer from "../FormContainer";
import BlurbSmall from "../BlurbSmall";



class LoginScreen extends React.Component {

    render() {
        return (
            <div className="select-screen" id="area">
                <SelectHeader text="Log In"></SelectHeader>
                <FormContainer />
                <FormContainer />
                <BlurbSmall text="Character Select -> " />
            </div>
        )
    }

}

export default LoginScreen;