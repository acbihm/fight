import React, { Component } from "react";
import "./style.css";

class Form1 extends Component {
  // Setting the component's initial state
  state = {
    username2: "",
    password2: ""
  };

  handleInputChange = event => {
    // Getting the value2 and name2 of the input which triggered the change
    let value2 = event.target.value2;
    const name2 = event.target.name2;

    if (name2 === "password2") {
      value2 = value2.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name2]: value2
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.username2) {
      alert("Fill out your first and  name2 please!");
    } else if (this.state.password2.length < 6) {
      alert(
        `Choose a more secure password2 ${this.state.username2} `
      );
    } else {
      alert(`Hello ${this.state.username2}`);
    }

    this.setState({
      username2: "",

      password2: ""
    });
  };

  render() {
    // Notice how each input has a `value2`, `name2`, and `onChange` prop
    return (
      <div>
      <h3> Sign In</h3>
      
        <form className="form">
          <input
            value2={this.state.username2}
            name2="username2"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          
          <input
            value2={this.state.password2}
            name2="password2"
            onChange={this.handleInputChange}
            type="password2"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <hr></hr>
        <p>or sign up </p>
      </div>
      
    );
  }
}

export default Form1;
