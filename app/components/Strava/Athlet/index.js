import React from 'react';
import PropTypes from 'prop-types';

export const Athlet = ({ name, koms }) => (
  <section id="athlet">
    <h2>{name}</h2>
    <div className="stat">
      <div>Antall KOM: <span>{koms.length}</span></div>
    </div>
  </section>
);

Athlet.propTypes = {
  name: PropTypes.string.isRequired,
  koms: PropTypes.array.isRequired,
};

Athlet.defaultProps = {
  name: '',
  koms: [],
};

export default Athlet;
