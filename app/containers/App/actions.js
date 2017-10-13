/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_QUOTE_ERROR, LOAD_QUOTE, LOAD_QUOTE_SUCCESS,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadQuote() {
  return {
    type: LOAD_QUOTE,
  };
}


/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {quote} repos The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function quoteLoaded(quote) {
  return {
    type: LOAD_QUOTE_SUCCESS,
    quote,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function quoteLoadingError(error) {
  return {
    type: LOAD_QUOTE_ERROR,
    error,
  };
}
