/*
 * AppReducer
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
  LOAD_QUOTE_SUCCESS,
  LOAD_QUOTE,
  LOAD_QUOTE_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  quote: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUOTE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('quote', false);
    case LOAD_QUOTE_SUCCESS:
      return state
        .set('quote', action.quote.contents.quotes[0])
        .set('loading', false)
        .set('error', false);
    case LOAD_QUOTE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('quote', false);
    default:
      return state;
  }
}

export default appReducer;
