import React from "react";
import PropTypes from "prop-types";

const NumberComp = ({ number }) => <p>{number}</p>;

NumberComp.propTypes = {
  number: PropTypes.number.isRequired
};

export default NumberComp;
