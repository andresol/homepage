import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export const Nav = ({ index }) => (
  <nav id="nav">
    <ul>
      <li><a href="/" className={index === 0 ? 'active' : ''}><FontAwesome className="home" name="home" /></a></li>
      <li><a href="/strava" className={index === 1 ? 'active' : ''}><FontAwesome className="fa-bicycle" name="strava" /></a></li>
      <li><a href="/weather" className={index === 2 ? 'active' : ''}><FontAwesome className="fa-bolt" name="weather" /></a></li>
      <li><a href="/coding" className={index === 3 ? 'active' : ''}><FontAwesome className="fa-laptop" name="coding" /></a></li>
      <li><a href="/house" className={index === 4 ? 'active' : ''}><FontAwesome className="fa-building" name="house" /></a></li>
    </ul>
  </nav>
);

Nav.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Nav;
