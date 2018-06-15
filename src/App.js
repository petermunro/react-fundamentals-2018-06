import React, { Component } from "react";
import Address from "./Address";
import NumberComp from "./NumberComp";
import ClickDemo from "./ClickDemo";
import Contact from "./Contact";
import MyInput from "./MyInput";
import TweetBox from "./TweetBox";
import contacts from "./contacts.json";
import NameListContainer from "./NameListContainer";
import ErrorBoundary from "./ErrorBoundary";

import "./App.css";

const Name = ({ name }) => <p>Name: {name}</p>;

class App extends Component {
  render() {
    const nameComponents = contacts.map(contact => (
      <Name name={contact.name} key={contact.id} />
    ));
    const mockAddress = {
      line1: "16 The Harbor",
      town: "Newport",
      county: "Gwent",
      country: "Wales"
    };
    const appRenderedOutput = (
      <div className="App">
        <Address address={mockAddress} />
        <NumberComp number={9} />
        <TweetBox onSend={this.handleSend} maxLength={20} />
        <NameListContainer />
        {nameComponents}

        <ErrorBoundary>
          <ClickDemo />
        </ErrorBoundary>
        <ErrorBoundary>
          <MyInput />
        </ErrorBoundary>

        <Contact
          name="Peter Munro"
          address={mockAddress}
          email="peter@petermunro.org"
        />
      </div>
    );
    // console.log(appRenderedOutput);
    return appRenderedOutput;
  }

  handleSend(message) {
    console.log("Sending:", message);
  }
}

export default App;
