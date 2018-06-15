import React, { Component } from "react";

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    throw new Error("MyInput: error thrown");
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange(event) {
    const newValue = event.target.value;
    // setTimeout(() => console.log(event.target.value), 1000);
    // this.setState({ username: event.target.value });             // object form
    this.setState(prevState => ({ username: newValue })); // functional form
  }
}

export default MyInput;
