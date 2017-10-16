import React from 'react';
import PropTypes from 'prop-types';

export const Segment = ({ id, name, rating }) => (
  <tr data-id={id}><td>{name}</td> <td>{rating}</td></tr>
);

Segment.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

Segment.defaultProps = {
  name: '',
  id: '',
  rating: 0,
};

export default Segment;
