import "babel-es6-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux'

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
  // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Full from './containers/Full/'

const history = createBrowserHistory();

function init() {
    ReactDOM.render((
      <Provider>
        <HashRouter history={history}>
          <Switch>
            <Route path="/" name="Home" component={Full}/>
          </Switch>
        </HashRouter>
      </Provider>
    ), document.getElementById('root'));
}

init();
