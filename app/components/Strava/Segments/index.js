import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import Segment from './Segment';


export const Segments = ({ koms }) => (
  <section id="segments">
    <Table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {koms.map((x) =>
          <Segment key={x.id} name={x.name} rating={3} />
        )}
      </tbody>
    </Table>
  </section>
);

Segments.propTypes = {
  koms: PropTypes.array.isRequired,
};

Segments.defaultProps = {
  koms: [],
};

export default Segments;
