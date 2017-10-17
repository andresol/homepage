import { call, put, takeLatest, select } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_ATHLET } from './constants';
import { athletLoaded, athletLoadingError } from './actions';
import { makeSelectAthletId } from './selectors';
/**
 * Github repos request/response handler
 */
export function* getAthlet() {
  const athletId = yield select(makeSelectAthletId());
  const requestURL = `http://www.sollie.info/api/strava/koms/${athletId}`;
  try {
    const athlet = yield call(request, requestURL);
    yield put(athletLoaded(athlet, athletId));
  } catch (err) {
    yield put(athletLoadingError(err));
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
  yield takeLatest(LOAD_ATHLET, getAthlet);
}
