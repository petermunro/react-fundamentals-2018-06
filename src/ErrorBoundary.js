import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
      info: ""
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
    console.log("ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">oops! {this.state.error.message}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
