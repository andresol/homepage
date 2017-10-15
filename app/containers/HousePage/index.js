import React from 'react';
import Nav from 'components/Nav';
import StravaSection from 'components/Strava/Section';

const House = () => (
  <div className="page-wrap">
    <Nav index={4} />
    <section id="main">
      <StravaSection note={'Strava'} action={false} />
      <section id="athlets">
        <div>
          <p>Kommer mer</p>
        </div>
      </section>
    </section>
  </div>
);

export default House;
