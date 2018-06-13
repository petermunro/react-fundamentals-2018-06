import React from "react";
import PropTypes from "prop-types";

const Address = ({ address = {} }) => {
  return (
    <div>
      <p>line 1: {address.line1}</p>
      <p>town: {address.town}</p>
      <p>county: {address.county}</p>
      <p>country: {address.country}</p>
    </div>
  );
};

Address.propTypes = {
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
};

export default Address;
