import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import Segment from './Segment';


export const Segments = ({ list }) => (
  <section id="segments">
    <Table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {list.map((x) =>
          <Segment key={x.id} name={x.name} rating={x.rating} />
        )}
      </tbody>
    </Table>
  </section>
);

Segments.propTypes = {
  list: PropTypes.array.isRequired,
};

Segments.defaultProps = {
};

export default Segments;
