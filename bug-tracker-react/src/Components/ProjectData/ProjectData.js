import React, {useState} from 'react'
import './Style.css'
import axios from 'axios'
import { Col , Row } from 'reactstrap' 
import HomeTest1 from '../../Pictures/testHome.png'
export default function ProjectData() {
    const emailLC = localStorage.getItem('username')

    const [projectProblem, setProjectProblem]= useState(null)


    function handleSubmit(e){
        e.preventDefault();
        console.log("RATE",JSON.parse(emailLC))
        if(projectProblem != null){
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/ProjectDatas',
            data: {
                projectProblem:projectProblem,
                projectProgress:0,
                email:JSON.parse(emailLC)
            }
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
        }else{
            console.log("Contact field shoudnt be empty")
        }
    }


    function handleInput(e){
        setProjectProblem(e.target.value) 
    }
    return (
        <div className="bodyProjectData">
             
             {/* <Row>
                <Col sm="6">
                    <div className="picUpContact" > 
                        <img className="picProjectDate" src={HomeTest1} alt="homepictest" />
                    </div>
                </Col>
                <Col sm="6"  > */}
                    <textarea onChange={handleInput}  class="txtAreaProject" type="text" rows="5" cols="18" placeholder="Enter your message" />
                    <br />
                    <button onClick={handleSubmit} className="submitProjectData">Submit your project data</button>
                {/* </Col>
                
                 </Row> */}
        </div>
    )
}
