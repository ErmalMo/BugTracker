import React from 'react'
// import './StyleDataUser.css';

// import {Form, FormGroup, Label, Col, Input  } from 'reactstrap'

import RegisterLoginUser from '../Reusable/RegisterLoginForm'
export default function DataUser() {

   

<<<<<<< HEAD
    return (
    <RegisterLoginUser />
    
=======
    return (<div>
        {
        login ? 
        <div className="m-2 d-flex justify-content-center">
        <Container className="App">
        <h2>Sign Up</h2>
        <Form className="form" onSubmit={handleLoginSubmit} >
          <Col md="3">
              <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="dataUsername"
                id="exampleEmail"
              />
              </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="dataPassword"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
            
            <Button outline color="primary" onClick={handleRegister} >Not yet a Member</Button>
            <br />
            <Button>Submit</Button>
            {/* <Row /> */}
          </Col>
          
        </Form>
      </Container>
      </div>
            :
        <div className="m-2 d-flex justify-content-center">
        <Container className="App">
        <h2>Sign Up</h2>
        <Form className="form" onSubmit={handleSubmit} >
          <Col md="3">
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="dataEmail"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
              </FormGroup>
              <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="dataUsername"
                id="exampleEmail"
              />
              </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="dataPassword"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
            <Button outline color="success" onClick={handleLogin} >Already a Member</Button>
            <br/>
            <Button>Submit</Button>
          </Col>
          
        </Form>
      </Container>
      </div>}
      </div>   
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
    )
}
