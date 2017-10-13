/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/pic01.jpg';
import '!file-loader?name=[name].[ext]!./images/pic02.jpg';
import '!file-loader?name=[name].[ext]!./images/banner.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/01.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/02.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/03.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/04.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/05.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/06.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/07.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/08.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/09.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/10.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/weather.png';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/strava.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/code.jpg';
import '!file-loader?name=thumbs_[name].[ext]!./images/thumbs/home.jpg';
import '!file-loader?name=full_[name].[ext]!./images/fulls/weather.jpg';
import '!file-loader?name=full_[name].[ext]!./images/fulls/code.jpg';
import '!file-loader?name=full_[name].[ext]!./images/fulls/home.jpg';
import '!file-loader?name=[name].[ext]!./images/strava.ico';
import '!file-loader?name=[name].[ext]!./images/untappd.png';
import '!file-loader?name=[name].[ext]!./images/icon-72x72.png';
import '!file-loader?name=[name].[ext]!./images/icon-96x96.png';
import '!file-loader?name=[name].[ext]!./images/icon-128x128.png';
import '!file-loader?name=[name].[ext]!./images/icon-144x144.png';
import '!file-loader?name=[name].[ext]!./images/icon-152x152.png';
import '!file-loader?name=[name].[ext]!./images/icon-192x192.png';
import '!file-loader?name=[name].[ext]!./images/icon-384x384.png';
import '!file-loader?name=[name].[ext]!./images/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
