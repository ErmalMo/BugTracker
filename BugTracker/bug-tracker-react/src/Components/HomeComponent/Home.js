import React, { useState } from 'react'
import {Col, Input, Button, Row, FormGroup, Label } from 'reactstrap'
import './Style.css'
export default function Home() {
  const [complain, setcomplain] = useState("");
  const [rating, setrating] = useState(1);
  const [project, setproject] = useState("");
  //http://localhost:5001/api/ratings
  function handleRating(e){
      e.preventDefault();
      console.log("test");
          fetch('http://localhost:5001/api/ratings',{
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              //EmployeeId:null,
              rating:rating,
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
//handleProject
function handleProject(e){
  e.preventDefault();
  console.log("test");
      fetch('http://localhost:5001/api/projectdata',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          //EmployeeId:null,
          ProjectProblem:project,
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






// /complaintsfromuser
  //http://localhost:5001/api/complaints
  function handleComplaints(e){
    e.preventDefault();
    console.log("test");
        fetch('http://localhost:5001/api/complaints',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            //EmployeeId:null,
            complaints:complain,
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
  
  function handleProjectChange(e){
    setproject(e.target.value)
    console.log(e.target.value)
  }


  function handleRatingChange(e){
    setrating(e.target.value)
    console.log(e.target.value)
  }

  function handleComplainChange(e){
    setcomplain(e.target.value)
    console.log(e.target.value)
  }
  // mt-2 d-flex justify-content-center 
    return(
        <div className="home-div">
          <Row>
             <Col sm="12" md={{ size: 6, offset: 4 }}>
            Bug Tracker is a platform that helps you find the solutions to your project problems!  <br />
          <br />  
          </Col>
          </Row>
          <Row>

      <div className=" m-5  text-muted justify-content-center ">
          <FormGroup >
        <textarea onChange={handleProjectChange} placeholder="Write here the problem that your having on your project" style={{height:"500px", width:"90%"}} type="textarea" name="problem" id="exampleText" />
        <Button outline color="primary" onClick={handleProject}>Submit Rating!</Button>
      </FormGroup>
      </div>







        <Col sm="12" md={{ size: 7, offset: 5 }}>
     
          <div className=" m-3  text-muted justify-content-center " style={{width:"350px", backgroundColor:"lightblue"}}>
          
            <h6>Rate Us!</h6>
            <FormGroup>
          <Input onChange={handleRatingChange} name="ratingfromuser"  type="select" id="exampleSelect"
         
          >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          </Input>
          <br />
          </FormGroup>
          <Button outline color="primary" onClick={handleRating}>Submit Rating!</Button>
           
          </div>
          </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 7, offset: 5 }}>
              <div className=" m-3  text-muted justify-content-center " style={{width:"350px", backgroundColor:"primary"}}>
              <FormGroup>
              <Label for="examplePassword">Write your complaint here</Label>
              <Input onChange={handleComplainChange}
                type="text"
                name="complaintfromuser"
                id="examplePassword"
                placeholder="Complaints"
              />
            </FormGroup>
                <Button outline color="primary" onClick={handleComplaints}>Submit your issue!</Button>
              </div> 
          </Col>
          </Row>
        </div> 
    )
}
