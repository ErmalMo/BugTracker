import React, {useState} from 'react'
import {Button} from 'reactstrap'
// import ProjectData from '../ProjectData/ProjectData'
import axios from 'axios';
import Users from './Users';
import Progres from './Progres'
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
          
        }
         catch (error) {
          console.error(error);
        }
      }
        async function ProgresLista() {
            try {
              const response = await axios.get('http://localhost:5001/api/progres');
              setProgres(response.data)
              console.log("bla",progres);
            } 
            catch (error) {
              console.error(error);
            }
          }
          function showUserList(){
            setUserClicked(true)
          }
          function showProgresList(){
            setProgresClicked(true)
          }
    return (
        <div>
            {/* <ProjectData /> */}
            <h1>Admin Class</h1>
            <Button onClick={UserList} >Get User List from Database</Button>
            <br />
            <br />
            <Button onClick={ProgresLista} > Get ProgresList from Database</Button>
            <br />
            <br />
            <Button onClick={showUserList} > Shfaq ProgresList</Button>
            <br />
            <br />
            <Button onClick={showProgresList} > Shfaq ProgresList</Button>
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
            <h1>Progres List : </h1>
            {
              
              progresClicked ? 
              progres.map(progress => (
                <div key={user.DataUserEmail}>
                  <Progres number={progress.ProjectProgres} />
                </div>
                // console.log( progress.ProjectProgres )
              ))
              :
              null
            }
        </div>
    )
}
