/*
Created by They Said So
See more at https://theysaidso.com/api*/

import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ quote, person }) => (
  <div className="column">
    <h3>Quote of the day</h3>
    <p>{quote}</p>
    <p>- {person}</p>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
};

Quote.defaultProps = {
  quote: 'Default? Woohoo! The two sweetest words in the English language!',
  person: 'Homer',
};

export default Quote;
