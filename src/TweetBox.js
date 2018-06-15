import React, { Component } from "react";
import "./TweetBox.css";
import PropTypes from "prop-types";

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.maxLength = props.maxLength || 140;
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>{this.maxLength - this.state.message.length} characters remaining</p>
        <button type="submit">Send</button>
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSend(this.state.message);
  }

  handleChange(event) {
    if (event.target.value.length > this.maxLength) {
      return;
    }
    this.setState({ message: event.target.value });
  }
}

TweetBox.propTypes = {
  onSend: PropTypes.func,
  maxLength: PropTypes.number
};

export default TweetBox;
