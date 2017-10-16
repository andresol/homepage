/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_ATHLET,
  LOAD_ATHLET_SUCCESS,
  LOAD_ATHLET_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  athlet: { id: '131220', name: 'Andre Sollie', koms: [] },
});

function stravaPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ATHLET:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_ATHLET_SUCCESS:
      return state
        .setIn(['athlet', 'koms'], action.athlet)
        .set('loading', false)
        .set('error', false);
    case LOAD_ATHLET_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default stravaPageReducer;
