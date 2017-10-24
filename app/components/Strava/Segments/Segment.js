import React from 'react';
import PropTypes from 'prop-types';

export const Segment = ({ id, name }) => (

  <tr data-id={id}><td><a href={`https://www.strava.com/segments/${id}`} target="_blank" >{name}</a></td><td></td></tr>
);

Segment.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Segment.defaultProps = {
  name: '',
  id: '',
};

export default Segment;
