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

const makeSelectKoms = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('koms').toJS(),
);

const makeSelectAthlets = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('athlets').toJS(),
);

const makeSelectDefaultAthlets = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('defaultAthlets').toJS(),
);


const makeSelectAthletId = () => createSelector(
  selectStrava,
  (stravaState) => stravaState.get('athletId'),
);


export {
  makeSelectLoading,
  makeSelectError,
  makeSelectKoms,
  makeSelectAthlets,
  makeSelectAthletId,
  makeSelectDefaultAthlets,
};
