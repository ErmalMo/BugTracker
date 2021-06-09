/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import {
    Card, FormText, Row,
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
  import '../RegisterLogin/stylee.css';
export default function RegisterLoginForm() {
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
        console.log("email",e.target.dataEmail.value)
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



    return (
        <div class="login-box" >
        {
        login ? 
        <div className="login-box" class="m-2 d-flex  justify-content-center">
        <Container className="App">
        <h2>Log in</h2>
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
          </Col>
          
        </Form>
      </Container>
      </div>
            :
            <div class="login-box">
            <h2>Register</h2>
            <img class="user" class="rounded mx-auto d-block" style={{paddingBottom:20}} src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"></img>
            <form className="form" onSubmit={handleSubmit}>
              <div class="user-box">
              <input  type="email"
                            name="dataEmail"
                            id="exampleEmail"
                             id="fname" required />
                <label>Email</label>
              </div>
              <div class="user-box">
              <input type="text" name="dataUsername" placeholder="username" id="pass" minlength="8" required /> 
                <label>Username</label>
              </div>
              <div class="user-box">
              <input type="password" name="dataPassword" placeholder="Password" id="pass" minlength="8" required /> 
                <label>Password</label>
              </div>
              <div class="col-md-12 text-center" >
              <button className="bg-dark btn-sm" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
               <button class="btn-sm" className="bg-dark " outline color="success" onClick={handleLogin} >
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                Already a Member</button>
                </div>
            </form>
              
        </div>
      }
      </div>
    )
}
