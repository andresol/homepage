import React from 'react';
import PropTypes from 'prop-types';
import Action from './Action';
import StyledSection from './StyledSection';

const Section = ({ note, action }) => (
  <StyledSection id="banner">
    <div className="inner">
      <h1>{note}</h1>
      { action ? <Action /> : ''}
    </div>
  </StyledSection>
);


// We require the use of src and alt, only enforced by react in dev mode
Section.propTypes = {
  note: PropTypes.string.isRequired,
  action: PropTypes.bool.isRequired,
};


export default Section;
