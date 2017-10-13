/* import { createSelector } from 'reselect'; */

const selectHome = (state) => state.get('home');

// const globalState = (state) => state.get('global');
//
// const makeSelectQuote = () => createSelector(
//   (globalState) => globalState.get('quote')
// );

export {
  // globalState
  selectHome,
//makeSelectQuote,
};
