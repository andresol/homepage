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
} from './constants';

const athlets = {
  131220: { id: '131220', name: 'Sollie', koms: [], profile: '' },
  131218: { id: '131218', name: 'Vondouce Erikstad', koms: [], profile: '' },
  981568: { id: '981568', name: 'Eddy The boss', koms: [], profile: '' },
  119909: { id: '119909', name: 'Per The Machine Allan', koms: [], profile: '' },
};

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  athlets: Object.values(athlets),
  athlet: athlets['131220'],
  athletId: 131220,
});

function stravaPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_KOMS: case LOAD_ATHLET:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_KOMS_SUCCESS:
      return state
        .setIn(['athlet', 'id'], action.athletId)
        .setIn(['athlet', 'name'], athlets[action.athletId].name)
        .setIn(['athlet', 'koms'], action.koms)
        .set('athletId', action.athletId)
        .set('loading', false)
        .set('error', false);
    case LOAD_ATHLET_SUCCESS:
      return state
        .setIn(['athlet', 'id'], action.athlet.id)
        .setIn(['athlet', 'name'], `${action.athlet.firstname} ${action.athlet.lastname}`)
        .setIn(['athlet', 'profile'], action.athlet.profile)
        .setIn(['athlet', 'koms'], action.koms)
        .set('athletId', action.athletId)
        .set('loading', false)
        .set('error', false);
    case LOAD_KOMS_ERROR: case LOAD_ATHLET_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case CHANGE_ATHLET_ID:
      return state
        .set('athletId', action.athletId);
    default:
      return state;
  }
}

export default stravaPageReducer;
