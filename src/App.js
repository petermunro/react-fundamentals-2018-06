import React, { Component } from "react";
import Address from "./Address";
import NumberComp from "./NumberComp";
import ClickDemo from "./ClickDemo";
import Contact from "./Contact";
import MyInput from "./MyInput";

import "./App.css";

class App extends Component {
  render() {
    const mockAddress = {
      line1: "16 The Harbor",
      town: "Newport",
      county: "Gwent",
      country: "Wales"
    };
    return (
      <div className="App">
        <Address address={mockAddress} />
        <NumberComp number={9} />
        <ClickDemo />
        <MyInput />
        <Contact
          name="Peter Munro"
          address={mockAddress}
          email="peter@petermunro.org"
        />
      </div>
    );
  }
}

export default App;
