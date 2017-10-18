import React from 'react';
import PropTypes from 'prop-types';

export const Athlet = ({ athlet, koms }) => (
  <section id="athlet">
    <h2>{athlet.name}</h2>
    <div className="stat">
      <div>Antall KOM: <span>{koms.length}</span></div>
    </div>
  </section>
);

Athlet.propTypes = {
  athlet: PropTypes.object.isRequired,
  koms: PropTypes.array.isRequired,
};

Athlet.defaultProps = {
  athlet: {},
  koms: [],
};

export default Athlet;
