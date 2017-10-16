import React from 'react';
import Nav from 'components/Nav';
import StravaSection from 'components/Strava/Section';
import Athlet from 'components/Strava/Athlet';
import Athlets from 'components/Strava/Athlets';
import Segments from '../../components/Strava/Segments/index';

const Strava = () => (
  <div className="page-wrap">
    <Nav index={1} />
    <section id="main">
      <StravaSection note={'Strava'} action={false} />
      <Athlets list={[{ name: 'Andre Sollie', id: '131220' }]} />
      <Athlet />
      <Segments list={[{ name: 'Muur Ekeberg', id: '131220', rating: 4 }]} />
    </section>
  </div>
);

export default Strava;
