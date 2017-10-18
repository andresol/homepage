import { call, put, takeLatest, select } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_KOMS, LOAD_ATHLET, LOAD_ATHLETS } from './constants';
import { komsLoaded, komsLoadingError, athletLoaded, athletLoadingError } from './actions';
import { makeSelectAthletId, makeSelectDefaultAthlets } from './selectors';
/**
 * Github repos request/response handler
 */
export function* getKoms() {
  const athletId = yield select(makeSelectAthletId());
  const requestURL = `http://www.sollie.info/api/strava/koms/${athletId}`;
  try {
    const koms = yield call(request, requestURL);
    yield put(komsLoaded(koms, athletId));
  } catch (err) {
    yield put(komsLoadingError(err));
  }
}

export function* getAthlet() {
  const athletId = yield select(makeSelectAthletId());
  const requestURL = `http://www.sollie.info/api/strava/athlet/${athletId}`;
  try {
    const athlet = yield call(request, requestURL);
    yield put(athletLoaded(athlet, athletId));
  } catch (err) {
    yield put(athletLoadingError(err));
  }
}

export function* getAthlets() {
  const athlets = yield select(makeSelectDefaultAthlets());
  for (let i = 0, len = athlets.length; i < len; i += 1) {
    const athletId = athlets[i];
    const requestURL = `http://www.sollie.info/api/strava/athlet/${athletId}`;
    try {
      const athlet = yield call(request, requestURL);
      yield put(athletLoaded(athlet, athletId));
    } catch (err) {
      yield put(athletLoadingError(err));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stravaPageData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_KOMS, getKoms);
  yield takeLatest(LOAD_ATHLET, getAthlet);
  yield takeLatest(LOAD_ATHLETS, getAthlets);
}
