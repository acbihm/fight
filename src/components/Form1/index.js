import React, { Component } from "react";
import "./style.css";

class Form1 extends Component {
  // Setting the component's initial state
  state = {
    username1: "",
    password1: ""
  };

  handleInputChange = event => {
    // Getting the value1 and name1 of the input which triggered the change
    let value1 = event.target.value1;
    const name1 = event.target.name1;

    if (name1 === "password1") {
      value1 = value1.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name1]: value1
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.username1) {
      alert("Fill out your first and  name1 please!");
    } else if (this.state.password1.length < 6) {
      alert(
        `Choose a more secure password1 ${this.state.username1} `
      );
    } else {
      alert(`Hello ${this.state.username1}`);
    }

    this.setState({
      username1: "",

      password1: ""
    });
  };

  render() {
    // Notice how each input has a `value1`, `name1`, and `onChange` prop
    return (
      <div>
      <h3> Sign In</h3>
      
        <form className="form">
          <input
            value1={this.state.username1}
            name1="username1"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          
          <input
            value1={this.state.password1}
            name1="password1"
            onChange={this.handleInputChange}
            type="password1"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <hr></hr>
        <p>or sign up</p>
      </div>
      
    );
  }
}

export default Form1;
