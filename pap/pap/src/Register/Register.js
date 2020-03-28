import React, {useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ModalTitle from 'react-bootstrap/ModalTitle';

const RegisterComponent = () => {
  const [lor,setLor] = useState(true); // lorr = left or right

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
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>) :

          (<Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>) 
        }
      </Modal.Body>

      <Modal.Footer>
        {
          lor?
          (<Button variant="primary" type="submit" block>
            Login
          </Button>) :
          (<Button variant="primary" type="submit" block>
            Register
          </Button>)
        }
        
      </Modal.Footer>
    </Modal>
  )

  
}

export default RegisterComponent;