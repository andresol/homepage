/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from './Img';

const icon = ({ to, src }) => (<Link className="" to={to}><span className="icon"><Img src={src} alt="Strava" /></span></Link>);

const
  StravaIcon = styled(icon)`
`;


// We require the use of src and alt, only enforced by react in dev mode
icon.propTypes = {
  to: PropTypes.string,
  src: PropTypes.string,
};


export default StravaIcon;
