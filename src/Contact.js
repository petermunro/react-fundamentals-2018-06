import React, { Component } from "react";
import PropTypes from "prop-types";
import Address from "./Address";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    // const name = this.props.name;
    // const address = this.props.address || {};
    // const email = this.props.email;
    const { name, address = {}, email } = this.props;
    return (
      <div>
        <p onClick={this.handleClick}>Name: {name}</p>
        {this.state.isExpanded && (
          <div>
            <Address address={address} />
            <p>Email: {email}</p>
          </div>
        )}
      </div>
    );
  }

  handleClick = event => {
    console.log("handleClick");
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
    // this.setState({ isExpanded: !this.state.isExpanded });
  };
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.object,
  email: PropTypes.string
};

export default Contact;
