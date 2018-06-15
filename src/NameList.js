import React from "react";
import PropTypes from "prop-types";

const NameList = ({ contacts }) => (
  <ul>{contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}</ul>
);

NameList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default NameList;
