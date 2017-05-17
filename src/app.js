/**
 * app.js
 *
 * this is the entry file for the application, only setup and boilerplate code
 *
 */
// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import auth from 'utils/auth';

// import sanitize css
// import 'sanitize.css/sanitize.css';
// import 'react-redux-toastr/src/styles/index.scss';

import configureStore from './config.redux/store';
import ReduxToastr from './lib/react-redux-toastr';
import { makeSelectLocationState } from './config.redux/selectors';
import { createRoutes } from './config.routes/routes';
import PPTheme from './theme';

Stripe.setPublishableKey('pk_test_X9sZwXwoYLj4fFnWCvXWntmO');   // TEST KEY
// Stripe.setPublishableKey('pk_live_qElipTZ1MpTIsPNjdn3IxCCN');   // LIVE KEY

export const historyObj = browserHistory;
// Needed for material-ui libarry
injectTapEventPlugin();
// create redux store with history
const initialState = {};
const store = configureStore(initialState, historyObj);
// sync history and store, as the react-router-redux reducer
const history = syncHistoryWithStore(historyObj, store, {
  selectLocationState: makeSelectLocationState(),
});

const rootRoute = createRoutes(store, auth);

/* eslint-disable no-console */
/* eslint-disable prefer-template */
// This is for disabling the console warning due to a known issue of React
console.error = (() => {
  const error = console.error;
  return (exception, ...args) => {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') !== 0) {
      error.apply(console, args);
    }
  };
})();
/* eslint-enable no-console */
/* eslint-enable prefer-template */

ReactDOM.render(
  <MuiThemeProvider>
    <ThemeProvider theme={PPTheme}>
      <Provider store={store}>
        <div>
          <Router
            history={history}
            routes={rootRoute}
            render={
                // Scroll to top when going to new page, imitating default browser behavior
                applyRouterMiddleware(useScroll())
            }
          />
          <ReduxToastr />
        </div>
      </Provider>
    </ThemeProvider>
  </MuiThemeProvider>, document.getElementById('app')
);
