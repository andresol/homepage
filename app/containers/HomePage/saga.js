import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_QUOTE } from 'containers/App/constants';

import { quoteLoaded, quoteLoadingError } from 'containers/App/actions';
import request from 'utils/request';
/**
 * Github repos request/response handler
 */
export function* getQuote() {
  const requestURL = 'https://quotes.rest/qod';
  try {
    const repos = yield call(request, requestURL);
    yield put(quoteLoaded(repos));
  } catch (err) {
    yield put(quoteLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_QUOTE, getQuote);
}
