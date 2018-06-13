import React, { Component } from "react";

class ClickDemo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <h3 onClick={this.handleClick}>Click Me - A React event handler</h3>;
  }

  handleClick = e => {
    this.log(e);
  };

  log(e) {
    alert("React event - see console for SyntheticEvent details");
    console.log("React event:", e);
  }
}

export default ClickDemo;
