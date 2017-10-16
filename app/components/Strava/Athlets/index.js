import React from 'react';
import PropTypes from 'prop-types';
import Athlet from './Athlet';

export const Athlets = ({ athlets, action }) => (
  <section id="athlets">
    {athlets.map((a) =>
      <Athlet key={a.id} name={a.name} id={a.id} action={action} />
    )}
  </section>
);

Athlets.propTypes = {
  athlets: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
};

Athlets.defaultProps = {
  athlets: [],
  action: () => {},
};

export default Athlets;
