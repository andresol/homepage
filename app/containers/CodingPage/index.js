import React from 'react';
import Nav from 'components/Nav';
import StravaSection from 'components/Strava/Section';

const Coding = () => (
  <div className="page-wrap">
    <Nav index={3} />
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

export default Coding;
