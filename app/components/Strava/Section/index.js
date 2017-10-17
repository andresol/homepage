import styled from 'styled-components';
import PropTypes from 'prop-types';
import Action from 'components/Section/Action';
import React from 'react';

const Section = ({ note, action }) => (
  <section id="banner" className="strava-banner">
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


const StravaSection = styled(Section)`
  height: 100px;
`;

export default StravaSection;
