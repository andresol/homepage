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
  LOAD_KOMS,
  LOAD_KOMS_SUCCESS,
  LOAD_KOMS_ERROR,
  LOAD_ATHLET_SUCCESS,
  LOAD_ATHLET_ERROR,
  LOAD_ATHLET,
  CHANGE_ATHLET_ID,
  LOAD_ATHLETS_STATS,
  LOAD_ATHLET_STATS_ERROR,
  LOAD_ATHLET_STATS_SUCCESS,
} from './constants';

const DEFAULT_ATHLET_ID = [131220, 131218, 981568, 119909];

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  athlets: {},
  koms: {},
  stats: {},
  athlet: {},
  athletId: 131220,
  defaultAthlets: DEFAULT_ATHLET_ID,
});

function stravaPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_KOMS: case LOAD_ATHLET: case LOAD_ATHLETS_STATS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_KOMS_SUCCESS:
      return state
        .setIn(['koms', action.athletId], action.koms)
        .set('athletId', action.athletId)
        .set('loading', false)
        .set('error', false);
    case LOAD_ATHLET_SUCCESS:
      return state
        .setIn(['athlets', action.athletId], action.athlet)
        .set('athletId', action.athletId)
        .set('loading', false)
        .set('error', false);
    case LOAD_ATHLET_STATS_SUCCESS:
      return state
        .setIn(['stats', action.athletId], action.stats)
        .set('athletId', action.athletId)
        .set('loading', false)
        .set('error', false);
    case LOAD_KOMS_ERROR: case LOAD_ATHLET_ERROR: case LOAD_ATHLET_STATS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case CHANGE_ATHLET_ID:
      return state
        .set('athletId', action.athletId)
        .set('athlet', state.get(action.athletId));
    default:
      return state;
  }
}

export default stravaPageReducer;
