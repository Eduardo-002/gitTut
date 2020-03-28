import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import HomeComponent from './Home/Home';
import LoginComponent from './Login/Login';
import DashboardComponent from './Dashboard/Dashboard'

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyAt7jG7uuoAu9AV8pWzHnh9Izlh31lbXV0",
  authDomain: "pap1-369f6.firebaseapp.com",
  databaseURL: "https://pap1-369f6.firebaseio.com",
  projectId: "pap1-369f6",
  storageBucket: "pap1-369f6.appspot.com",
  messagingSenderId: "699724819078",
  appId: "1:699724819078:web:a15f45b5863546d0b6ff07"
});

const routing = (
  <Router>
    <Switch>
      <Route exact path='/'><HomeComponent/></Route>
      <Route path='/login'><LoginComponent/></Route>
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
