import React from 'react';
import Nav from 'components/Nav';
import StravaSection from 'components/Strava/Section';

const Weather = () => (
  <div className="page-wrap">
    <Nav index={2} />
    <section id="main">
      <StravaSection note={'Strava'} action={false} />
      <section id="athlets">
        <div>
          <p>Vær info</p>
        </div>
      </section>
    </section>
  </div>
);

export default Weather;
