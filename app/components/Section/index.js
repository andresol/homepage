import React from 'react';
import PropTypes from 'prop-types';
import Action from './Action';

const Section = ({ note, action }) => (
  <section id="banner">
    <div className="inner">
      <h1>{note}</h1>
      { action ? <Action /> : ''}
    </div>
  </section>
);


// We require the use of src and alt, only enforced by react in dev mode
Section.propTypes = {
  note: PropTypes.string.isRequired,
  action: PropTypes.bool.isRequired,
};


export default Section;
