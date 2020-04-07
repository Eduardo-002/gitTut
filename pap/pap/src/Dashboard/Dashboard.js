










/*import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const firebase = require('firebase');

const DashboardComponent = () => {
  const history = useHistory();

  firebase.auth().onAuthStateChanged(async _usr => {
    if(!_usr)
      history.push('/login');
    else{
      console.log(1);
    }

  });

  const signOut = () => firebase.auth().signOut();

  return (
    <div>
      <Button onClick={()=>history.push('/dashboard/news')}>News</Button>
      <Button onClick={()=>history.push('/dashboard/home')}>Home</Button>
      <Button onClick={()=>signOut()}>Sign Out</Button><br></br>

      {window.location.pathname=='/dashboard/home'?<p>Home</p>:
       window.location.pathname=='/dashboard/news'?<p>News</p>:
      null}
    </div>
  );
}
/*

<Router>
        <Switch>
          <Route path='/dashboard/home'><HomeComponent text={'asd'}/></Route>
          <Route path='/dashboard/news'>dash news</Route>
          <Route>Couldn't find that page</Route>
        </Switch>
      </Router>

*/
export default DashboardComponent;