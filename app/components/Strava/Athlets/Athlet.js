import React from 'react';
import PropTypes from 'prop-types';

export const Athlet = ({ id, name, action }) => (
  <li data-id={id}><button onClick={action}>{name}</button></li>
);

Athlet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

Athlet.defaultProps = {
  name: '',
  id: '',
  action: () => {},
};

export default Athlet;
