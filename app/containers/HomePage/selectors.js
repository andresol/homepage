import { createSelector } from 'reselect';

const makeSelectWatt = () => createSelector(
  (homeState) => homeState.get('watt')
);

export {
  makeSelectWatt,
};
