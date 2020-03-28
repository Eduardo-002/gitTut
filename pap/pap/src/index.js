import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import HomeComponent from './Home/Home';
import RegisterComponent from './Register/Register';

const routing = (
  <Router>
    <Switch>
      <Route exact path='/'><HomeComponent/></Route>
      <Route path='/register'><RegisterComponent/></Route>
      <Route path='/login'>login</Route>
      <Route path='/dashboard'>dashboard</Route>
      <Route>Couldn't find that page</Route>
    </Switch>
  </Router>
)


ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
