/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Img(props) {
  return (
    <img className={props.className} src={props.src} alt={props.alt} />
  );
}

export const UntappdImg = styled(({ src, alt }) => (<Img src={src} alt={alt} />))`
width: 30px;
`;


// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
