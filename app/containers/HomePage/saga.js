import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';

import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
// import { makeSelectWatt } from 'containers/HomePage/selectors';
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  // const username = yield select(makeSelectWatt());
  const requestURL = 'http://www.energyhive.com/mobile_proxy/getCurrentValuesSummary?token=';
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
