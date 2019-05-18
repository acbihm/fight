import React from "react";
import "./style.css";
import ValidatedLoginForm from "../ValidatedLoginForm"

class FormTest extends React.Component {
    render(props) {
        return (
            <div>
                <ValidatedLoginForm />
            </div>
        )
    }
}

export default FormTest;