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
const makeSelectAthlets = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('athlets').toJS(),
);


export {
  makeSelectLoading,
  makeSelectError,
  makeSelectAthlet,
  makeSelectAthlets,
};
