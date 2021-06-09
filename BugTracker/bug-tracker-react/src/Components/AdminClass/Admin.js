import React, {useState} from 'react'
import {Badge, Col, Button, Table} from 'reactstrap'
import Users from './Users';
import axios from 'axios';
import Home from '../HomeComponent/Home'
import ProjectData from './ProjectData'
import Complaints from './Complaints'
<<<<<<< HEAD
=======


>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
export default function Admin() {
    const [user, setUser] = useState([])
    const [userClicked, setUserClicked] = useState(false)

<<<<<<< HEAD
=======
    const [complaints, setComplaints] = useState([])
    const [complaintsClicked, setComplaintsClicked] = useState(false)
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185

    const [progres, setProgres] = useState([])
    const [progresClicked, setProgresClicked] = useState(false)

    const [coomplains, setCoomplains] = useState([])
    const [clickedCom, setClickedCom] = useState(false)
    
    async function UserList() {
        try {
          const response = await axios.get('http://localhost:5001/api/datauser');
          setUser(response.data)
          console.log("userClicked", userClicked)
          setUserClicked(true)
<<<<<<< HEAD
=======
          
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
        }
         catch (error) {
          console.error(error);
        }
      }
<<<<<<< HEAD
      async function ComplainList() {
        try {
          const responsee = await axios.get('http://localhost:5001/api/complaints');
          setCoomplains(responsee.data)
=======
      async function ComplaintsList() {
        try {
          const response = await axios.get('http://localhost:5001/api/complaints');
          setComplaints(response.data)
          console.log("complaintsClicked", complaintsClicked)
          setComplaintsClicked(true)
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
          
          console.log("userClicked", userClicked)
          setClickedCom(true)
        }
         catch (error) {
          console.error(error);
        }
      }

<<<<<<< HEAD
      // ComplainList
    



=======
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
      
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
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
<<<<<<< HEAD
        <div  className="text-white bg-dark  ">
            {/* <ProjectData /> */}
            <h1 className="text-center"><Badge color="dark">Admin Dashboard</Badge></h1>
            <div className="text-center" >
            <Button sm="4" onClick={UserList} >Get User List from Database</Button>{" "}
            <Button onClick={projectData} > Get ProgresList from Database</Button>{" "}
            <Button onClick={ComplainList} > Get Complaints from Database</Button>{" "}
            </div>
            {/* <br />
            <Button onClick={showUserList} > Shfaq ProgresList</Button>
=======
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
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
            <br />
            <br />
            <Button onClick={showProjectData} > Shfaq ProgresList</Button>
            <br /> */}
            <br />
<<<<<<< HEAD
            {userClicked ?
            <Table className="text-white bg-dark">
=======

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
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
              <thead>
              <tr>
                <td className="col-sm-1"><h5>id</h5></td>
                <td className="col-sm-4"><h5>Email</h5></td>
                <td className="col-sm-3"><h5>Username</h5></td>
                <td className="col-sm-3"><h5>Password</h5></td>
                <td className="col-sm-1"><h5>Actions</h5></td>
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
                  <Users id={users.DataUserId} email={users.DataUserEmail} username={users.DataUserName} password={users.DataUserPassword} />
                </div>
                // console.log(users.DataUserEmail, users.DataUserName, users.DataUserPassword)
              ))
              :
              null
            }
            <br />
<<<<<<< HEAD
            {progresClicked?
            <Table className="text-white bg-dark">
              <thead>
              <tr>
                <td className="col-sm-4"><h5>Progress</h5></td>
                <td className="col-sm-8"><h5>Project Problem</h5></td>
                <td className="col-sm-1"><h5>Actions</h5></td>
              </tr>
            </thead>
            </Table>
            :
            null}
            
=======
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
            {
              
              progresClicked ? 
              progres.map(progress => (
                <div  >
                   <ProjectData number={progress.ProjectProgres} project={progress.ProjectProblem}/> 
                  
                </div>
              ))
              :
              null
            }
            
            {clickedCom?
            <Table className="text-white bg-dark">
              <thead>
              <tr>
                <td className="col-sm-4"><h5>ID</h5></td>
                <td className="col-sm-8"><h5>User Complaints</h5></td>
                <td className="col-sm-1"><h5>Actions</h5></td>
              </tr>
            </thead>
            </Table>
            :
            null}
            {
              
              clickedCom ? 
              coomplains.map(progress => (
                <div  >
                  <ComplainList id={coomplains.id} userComplain={coomplains.complaints}/>
                </div>
              ))
              :
              null
            }
        </div>
        
     )
  //  }
}


