import { createSelector } from 'reselect';

const selectStrava = (state) => state.get('strava');

const makeSelectLoading = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('loading'),
);

const makeSelectError = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('error'),
);

const makeSelectAthlet = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('athlet').toJS(),
);

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectAthlet,
};
