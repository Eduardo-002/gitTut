import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ModalTitle from 'react-bootstrap/ModalTitle';

const firebase = require('firebase');

const LoginComponent = () => {
  const [lor,setLor] = useState(true); // lorr = left or right
  const [name,setName] = useState(null);
  const [lastName,setLastName] = useState(null);
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);

  const history = useHistory();

  

  const doLogin = async () => {
    
    await firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(()=>{
        history.push('/dashboard');
      }, err => {
        console.log(err);
      })
  }

  return (
    <Modal show={true}>
      <Modal.Header>
        <Container fluid>
          <Row>
            <Col>
              <Button disabled={lor} onClick={()=>setLor(true)} block>Login</Button>
            </Col>
            <Col>
              <Button disabled={!lor} onClick={()=>setLor(false)} block>Register</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Header>

      <Modal.Body>
        {
          lor?
          (<Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
          </Form>) :

          (<Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>) 
        }
      </Modal.Body>

      <Modal.Footer>
        {
          lor?
          (<Button onClick={(()=>doLogin())} variant="primary" type="submit" block>
            Login
          </Button>) :
          (<Button onClick={()=>doRegist()} variant="primary" type="submit" block>
            Register
          </Button>)
        }
        
      </Modal.Footer>
    </Modal>
  )

  
}

export default LoginComponent;