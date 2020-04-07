import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

const firebase = require('firebase');

const HomeComponent = () => {
  const history = useHistory();

  return (
    <Button onClick={()=>history.push('dashboard')}>Log in</Button>
  );
}

export default HomeComponent;