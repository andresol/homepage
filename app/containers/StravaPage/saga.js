import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_ATHLET } from './constants';
import { athletLoaded, athletLoadingError } from './actions';
/**
 * Github repos request/response handler
 */
export function* getAthlet() {
  const requestURL = 'http://www.sollie.info/api/strava/koms/131220';
  try {
    const athlet = yield call(request, requestURL);
    yield put(athletLoaded(athlet));
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
