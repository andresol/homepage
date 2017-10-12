import React from 'react';
import PropTypes from 'prop-types';

function Power(props) {
  return (
    <div>{props.val} </div>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Power.propTypes = {
  val: PropTypes.string,
};

export default Power;
