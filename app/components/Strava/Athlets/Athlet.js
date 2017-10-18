import React from 'react';
import PropTypes from 'prop-types';

export const Athlet = ({ id, name, action }) => (
  <li><button onClick={action} value={id}>{name}</button></li>
);

Athlet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

Athlet.defaultProps = {
  name: '',
  id: 0,
  action: () => {},
};

export default Athlet;
