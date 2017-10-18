/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import HomePage from 'containers/HomePage/Loadable';
import StravaPage from 'containers/StravaPage/index';
import WeatherPage from 'containers/WeatherPage/index';
import CodingPage from 'containers/CodingPage/index';
import HousePage from 'containers/HousePage/index';
import NotFoundPage from 'containers/NotFoundPage/index';

ReactGA.initialize('UA-108142565-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" onUpdate={logPageView} component={HomePage} />
        <Route exact path="/strava" onUpdate={logPageView} component={StravaPage} />
        <Route exact path="/weather" onUpdate={logPageView} component={WeatherPage} />
        <Route exact path="/coding" onUpdate={logPageView} component={CodingPage} />
        <Route exact path="/house" onUpdate={logPageView} component={HousePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
