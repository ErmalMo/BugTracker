import React, { useState } from 'react'
// import './StyleDataUser.css';
import {
    Card, FormText, Row,
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
// import {Form, FormGroup, Label, Col, Input  } from 'reactstrap'
export default function DataUser() {

    const [login, setLogin] = useState(false)
    
    const handleLogin = () => {
        setLogin(true)
    }
    const handleRegister = () => {
        setLogin(false)
    }

    function handleLoginSubmit(){
        console.log("Login method isnt completed yet");
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.dataEmail.value)
        console.log("test");
        fetch('http://localhost:5001/api/datauser',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //EmployeeId:null,
                DataUserEmail:e.target.dataEmail.value,
                
                DataUserName:e.target.dataUsername.value,
                DataUserPassword:e.target.dataPassword.value,
            })
        })
        
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            // console.log(result);s
        }).catch((error)=>{
            alert("faileeed",error);
        })
        
    }




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
    
    )
}
