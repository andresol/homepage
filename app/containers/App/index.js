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

import HomePage from 'containers/HomePage/Loadable';
import Strava from 'containers/StravaPage/Loadable';
import Weather from 'containers/WeatherPage/Loadable';
import Coding from 'containers/CodingPage/Loadable';
import House from 'containers/HousePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/strava" component={Strava} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/coding" component={Coding} />
        <Route exact path="/house" component={House} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
