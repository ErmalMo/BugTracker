import React, {useState} from 'react'
import {Button, Table} from 'reactstrap'
import Users from './Users';
import axios from 'axios';
import Home from '../HomeComponent/Home'
import ProjectData from './ProjectData'


export default function Admin() {
    const [user, setUser] = useState([])
    const [userClicked, setUserClicked] = useState(false)

    const [progres, setProgres] = useState([])
    const [progresClicked, setProgresClicked] = useState(false)

    async function UserList() {
        try {
          const response = await axios.get('http://localhost:5001/api/datauser');
          setUser(response.data)
          console.log("userClicked", userClicked)
          setUserClicked(true)
          
        }
         catch (error) {
          console.error(error);
        }
      }
        async function projectData() {
            try {
              const response = await axios.get('http://localhost:5001/api/projectdata');
              setProgres(response.data)
              console.log("bla",progres);
              setProgresClicked(true)
            } 
            catch (error) {
              console.error(error);
            }
          }
          // function showUserList(){
          //   setUserClicked(true)
          // }
          // function showProjectData(){
          //   setProgresClicked(true)
          // }
          function deleteProj(id){
            if(window.confirm('Are you sure?')){
                fetch('http://localhost:5001/api/projectdata/'+id,{
                    method:'DELETE',
                    header:{'Accept':'application/json',
                'Content-Type':'application/json'}
                })
            }
        }
    return (
        <div>
            {/* <ProjectData /> */}
            <h1>Admin Class</h1>
            <Button onClick={UserList} >Get User List from Database</Button>
            <br />
            <br />
            <Button onClick={projectData} > Get ProgresList from Database</Button>
            <br />
            <br />
            {/* <Button onClick={showUserList} > Shfaq ProgresList</Button>
            <br />
            <br />
            <Button onClick={showProjectData} > Shfaq ProgresList</Button>
            <br /> */}
            <br />
            {userClicked ?
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            </Table>
              :
              null
            }
            {
              userClicked ? 
              user.map(users => (
                <div key={user.DataUserEmail}>
                  <Users email={users.DataUserEmail} username={users.DataUserName} password={users.DataUserPassword} />
                </div>
                // console.log(users.DataUserEmail, users.DataUserName, users.DataUserPassword)
              ))
              :
              null
            }
            <br />
            <h1>Progres List : </h1>
            {
              
              progresClicked ? 
              progres.map(progress => (
                <div style={{paddingTop:"25px"}} >
                  <Button color="primary">Edit</Button>
                  <Button onClick={deleteProj} color="danger">Delete</Button>
                  <ProjectData number={progress.ProjectProgres} project={progress.ProjectProblem}/>
                  
                </div>
                // console.log( progress.ProjectProgres )
              ))
              :
              null
            }
        </div>
    )
}
