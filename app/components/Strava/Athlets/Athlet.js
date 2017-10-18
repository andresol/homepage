import React from 'react';
import PropTypes from 'prop-types';

export const Athlet = ({ id, name, action, profile }) => (
  <div className="box athlet">
    <div className="image round">
      <img src={profile} alt="name" />
    </div>
    <button onClick={action} value={id}>{name}</button>
  </div>
);

Athlet.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

Athlet.defaultProps = {
  name: '',
  profile: '',
  id: 0,
  action: () => {},
};

export default Athlet;
