import React from 'react';
import PropTypes from 'prop-types';
import Athlet from './Athlet';

export const Athlets = ({ athlets, action }) => (
  <section id="athlets">
    {Object.values(athlets).map((a) =>
      <Athlet key={a.id} name={`${a.firstname} ${a.lastname}`} id={a.id} action={action} />
    )}
  </section>
);

Athlets.propTypes = {
  athlets: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
};

Athlets.defaultProps = {
  athlets: [],
  action: () => {},
};

export default Athlets;
