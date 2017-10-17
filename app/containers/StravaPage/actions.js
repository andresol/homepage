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
  LOAD_KOMS, LOAD_KOMS_ERROR, LOAD_KOMS_SUCCESS, CHANGE_ATHLET_ID, LOAD_ATHLET, LOAD_ATHLET_SUCCESS, LOAD_ATHLET_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadKoms() {
  return {
    type: LOAD_KOMS,
  };
}

export function loadAthlet() {
  return {
    type: LOAD_ATHLET,
  };
}

export function changeAthletId(athletId) {
  return {
    type: CHANGE_ATHLET_ID,
    athletId,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {quote} athlet The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function komsLoaded(koms, athletId) {
  return {
    type: LOAD_KOMS_SUCCESS,
    koms,
    athletId,
  };
}

export function athletLoaded(athlet, athletId) {
  return {
    type: LOAD_ATHLET_SUCCESS,
    athlet,
    athletId,
  };
}


/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function komsLoadingError(error) {
  return {
    type: LOAD_KOMS_ERROR,
    error,
  };
}

export function athletLoadingError(error) {
  return {
    type: LOAD_ATHLET_ERROR,
    error,
  };
}
