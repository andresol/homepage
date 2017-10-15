import React from 'react';
import Nav from 'components/Nav';
import { LineChart, Line } from 'recharts';
import StravaSection from 'components/Strava/Section';
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const House = () => (

  <div className="page-wrap">
    <Nav index={4} />
    <section id="main">
      <StravaSection note={'Bauneveien'} action={false} />
      <section id="links">
        <div className="gallery">
          <header className="special">
            <h2>Usage</h2>
          </header>
          <div className="content">
            <LineChart className="media" width={400} height={400} data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
            <div className="media">
              <a href="coding"><img src="thumbs_code.jpg" alt="" title="Coding." /></a>
            </div>
            <div className="media">
              <a href="/house"><img src="thumbs_home.jpg" alt="" title="Home." /></a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
);

export default House;
