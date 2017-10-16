import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');


const makeSelectLoading = () => createSelector(
  selectGlobal,
  (stravaState) => stravaState.get('loading'),
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (stravaState) => stravaState.get('error'),
);

const makeSelectAthlet = () => createSelector(
  selectGlobal,
  (stravaState) => stravaState.get('athlet'),
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectAthlet,
};
