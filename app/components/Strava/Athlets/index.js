import React from 'react';
import PropTypes from 'prop-types';
import Athlet from './Athlet';

export const Athlets = ({ athlets }) => (
  <section id="athlets">
    {athlets.map((a) =>
      <Athlet key={a.id} name={a.name} id={a.id} />
    )}
  </section>
);

Athlets.propTypes = {
  athlets: PropTypes.array.isRequired,
};

Athlets.defaultProps = {
  athlets: [],
};

export default Athlets;
