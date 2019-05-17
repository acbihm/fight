import React from "react";
// import { Formik } from "formik";
// import EmailValidator from "email-validator";
// import Yup from "yup";
import "./style.css";
import ValidatedLoginForm from "../ValidatedLoginForm"

class FormTest extends React.Component {

    render() {
        return (
            <div>
                <ValidatedLoginForm />
            </div>
        )
    }

}

export default FormTest;