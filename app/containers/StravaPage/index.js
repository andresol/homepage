import React from 'react';
import Nav from 'components/Nav';
import StravaSection from 'components/Strava/Section';

const Strava = () => (
  <div className="page-wrap">
    <Nav index={1} />
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

export default Strava;
