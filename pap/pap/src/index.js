import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import {Switch, Route, Router, Redirect} from 'react-router-dom';

import HomeComponent from './Home/Home';
import LoginComponent from './Login/Login';
import Admin from "./layouts/Admin.js";

import "./assets/css/material-dashboard-react.css?v=1.8.0";

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

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path='/'><HomeComponent/></Route>
      <Route path='/login'><LoginComponent/></Route>
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
