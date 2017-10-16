import React from 'react';
import PropTypes from 'prop-types';
import Athlet from './Athlet';

export const Athlets = ({ list }) => (
  <section id="athlets">
    {list.map((x) =>
      <Athlet key={x.id} name={x.name} id={x.id} />
    )}
  </section>
);

Athlets.propTypes = {
  list: PropTypes.array.isRequired,
};

Athlets.defaultProps = {
  name: '',

};

export default Athlets;
