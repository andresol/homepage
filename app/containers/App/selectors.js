import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const selectGlobal = (state) => state.get('global');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading'),
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error'),
);

const makeSelectQuote = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('quote'),
);


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectQuote,
};
