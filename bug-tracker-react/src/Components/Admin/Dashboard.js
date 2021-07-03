import React, {useState} from 'react'
import {Col , Row } from 'reactstrap'
import axios from 'axios';
import {Table } from 'reactstrap'

import Contact from './Contact'
import Users from './Users';
import Rates from './Rates';
import ProjectProblem from './ProjectProblems';
export default function Dashboard() {
    const [users, setUsers]= useState([])
    const [rate, setRate]= useState([])
    const [contact, setContact]= useState([])
    const [project, setProject]= useState([])

    const [userClicked, setUserClicked] = useState(false)
    const [contactClicked, setContactClicked] = useState(false)
    const [rateClicked, setRateClicked] = useState(false)
    const [projectClicked, setProjectClicked] = useState(false)


    function getUsers(){
        const res = axios.get('http://localhost:5000/api/UserDatas').then(resp => {
            setUsers(resp.data)
            console.log(users)
        });
    }
    function getProjects(){
        axios.get('http://localhost:5000/api/ProjectDatas').then(resp => {
        setProject(resp.data)
        console.log(project)
        });
    }
    function getContacts(){
        axios.get('http://localhost:5000/api/Contacts').then(resp => {
            setContact(resp.data)
            console.log(contact);
        });
    }
    function getRates(){
        axios.get('http://localhost:5000/api/Ratings').then(resp => {
            setRate(resp.data)
            console.log(rate);
        });
    }
    function show(){
        setUserClicked(!userClicked)
    }
    function show2(){
        setContactClicked(!contactClicked)
        console.log(contactClicked,"cntctnc")
    }
    function show1(){
        setRateClicked(!rateClicked)
    }
    function show3(){
        setProjectClicked(!projectClicked)
        console.log(projectClicked,"TEST")
    }
    return (
        <div className="bodyDashboard">
            <button onClick={getUsers}>Users</button>
            <button onClick={getProjects}>Projects</button>
            <button onClick={getContacts}>Contacts</button>
            <button onClick={getRates}>Rates</button>
            <br />
            <button onClick={show}>Show Users</button>
            <button onClick={show3}>Show Projects</button>
            <button onClick={show2}>Show Contacts</button>
            <button onClick={show1}>Show rates</button>
            {userClicked ?
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>complaints</th>
              </tr>
            </thead>
            </Table>
              :
              null 
            }           
            {
              userClicked ? 
              users.map(us => (
                <div key={users.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <Users email={us.email} username={us.username} password={us.password}  />
                </div>
                // console.log(users.DataUserEmail, users.DataUserName, users.DataUserPassword)
              ))
              :
              null
            }






            {/* 2 */}
            {projectClicked ?
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>complaints</th>
              </tr>
            </thead>
            </Table>
              :
              null 
            }           
            {
              projectClicked ? 
              project.map(us => (
                <div key={us.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <ProjectProblem id={us.id} projectProblem={us.projectProblem} projectProgress={us.projectProgress} email={us.email}  />
                </div>
                // console.log(users.DataUserEmail, users.DataUserName, users.DataUserPassword)
              ))
              :
              null
            }
            {/* 2 */}




            {/* 3 */}
            {contactClicked ?
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>complaints</th>
              </tr>
            </thead>
            </Table>
              :
              null 
            }           
            {
              contactClicked ? 

              contact.map(us => (
                <div key={us.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <Contact id={us.id} userContact={us.userContact} email={us.email}  />
                </div>
                // console.log(us.email)
              ))

              :
              null
            }
            {/* 3 */}



            {/* 4 */}
            {rateClicked ?
            <Table>
              <thead>
              <tr>
                <th>id</th>
                <th>Ratings</th>
                <th>Email</th>
                <th >edit</th>
              </tr>
            </thead>
            </Table>
              :
              null 
            }           
            {
              rateClicked ? 

              rate.map(us => (
                <div key={us.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <Rates id={us.id} userRating={us.userRating} email={us.email}  />
                </div>
                // console.log(us.email)
              ))

              :
              null
            }
            {/* 4 */}

        </div>
    )
}
