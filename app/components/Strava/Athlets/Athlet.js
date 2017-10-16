import React from 'react';
import PropTypes from 'prop-types';

export const Athlet = ({ id, name }) => (
  <li data-id={id}>{name}</li>
);

Athlet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Athlet.defaultProps = {
  name: '',
  id: '',
};

export default Athlet;
