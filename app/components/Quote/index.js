/*
Created by They Said So
See more at https://theysaidso.com/api*/

import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ quote, author }) => (
  <div className="column">
    <h3>Quote of the day</h3>
    <p>{quote}</p>
    <p>- {author}</p>
    <div>
      <div>Created by They Said</div>
      <div>So See more at <a href="https://theysaidso.com/api">https://theysaidso.com/api</a></div>
    </div>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Quote.defaultProps = {
  quote: 'Default? Woohoo! The two sweetest words in the English language!',
  author: 'Homer',
};

export default Quote;
