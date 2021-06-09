import React, {useState} from 'react'
import {Button, Table} from 'reactstrap'
import Users from './Users';
import axios from 'axios';
import Home from '../HomeComponent/Home'
import ProjectData from './ProjectData'
import Complaints from './Complaints'


export default function Admin() {
    const [user, setUser] = useState([])
    const [userClicked, setUserClicked] = useState(false)

    const [complaints, setComplaints] = useState([])
    const [complaintsClicked, setComplaintsClicked] = useState(false)

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
      async function ComplaintsList() {
        try {
          const response = await axios.get('http://localhost:5001/api/complaints');
          setComplaints(response.data)
          console.log("complaintsClicked", complaintsClicked)
          setComplaintsClicked(true)
          
        }
         catch (error) {
          console.error(error);
        }
      }

      function deleteCOmp(id){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:5001/api/complaints/'+id,{
                method:'DELETE',
                header:{
                'Accept':'application/json',
                'Content-Type':'application/json'}
            })
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
     //   render(){
  //  const{id,complaints}=this.state;
    return (
        <div>
          <h1>Complaints</h1>
          <Button onClick={ComplaintsList}>Complaints of the users </Button>
            {/* <ProjectData /> */}
            <h1>Admin Class</h1>
            <Button onClick={UserList} >Get User List from Database</Button>
            <br />
            <br />
            <h1>Progres List : </h1>
            <Button onClick={projectData} > Get ProgresList from Database</Button>
            <br />
            <br />
            {/* <Button onClick={showUserList} > Shfaq ProgresList</Button>
            <br />
            <br />
            <Button onClick={showProjectData} > Shfaq ProgresList</Button>
            <br /> */}
            <br />

            {complaintsClicked ?
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
              complaintsClicked ? 
              complaints.map(complaintss => (
                <div key={complaints.id}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                <Button onClick={deleteCOmp} color="danger">Delete</Button>
                  <Complaints id={complaintss.complaints} complaints={complaintss.complaints}  />
                </div>
                // console.log(users.DataUserEmail, users.DataUserName, users.DataUserPassword)
              ))
              :
              null
            }

            
            {
              userClicked ?
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


             
            <br />
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
  //  }
}


