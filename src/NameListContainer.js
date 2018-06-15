import React, { Component } from "react";
import NameList from "./NameList";

class NameListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("/contacts.json")
      .then(response => response.json())
      .then(json => this.setState({ contacts: json }))
      .catch(ex => {
        console.log("Err:", ex);
        // throw new Error("Error getting contacts");
      });
  }

  render() {
    return <NameList contacts={this.state.contacts} />;
  }
}

export default NameListContainer;
