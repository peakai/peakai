import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import {Router} from 'react-router';
var ReactGA = require('react-ga');
ReactGA.initialize('UA-166982-13');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export default class Root extends Component {
  render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} onUpdate={logPageView} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
