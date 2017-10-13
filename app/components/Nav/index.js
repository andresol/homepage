import React from 'react';
import FontAwesome from 'react-fontawesome';

export const Nav = () => (
  <nav id="nav">
    <ul>
      <li><a href="/" className="active"><FontAwesome className="home" name="home" /></a></li>
      <li><a href="/strava"><FontAwesome className="fa-bicycle" name="strava" /></a></li>
      <li><a href="/"><FontAwesome className="fa-bolt" name="weather" /></a></li>
      <li><a href="/"><FontAwesome className="fa-laptop" name="coding" /></a></li>
      <li><a href="/"><FontAwesome className="fa-building" name="house" /></a></li>
    </ul>
  </nav>
);

export default Nav;
