import React, {useState} from 'react'
import {Button} from 'reactstrap'
// import ProjectData from '../ProjectData/ProjectData'
export default function Admin() {
    const [user, setuser] = useState([])
    const [progres, setprogres] = useState([])

     function UserList(){
        fetch('http://localhost:4734/api/datausers')
        .then(response=>response.json())
        .then(data=>{
            setuser(data);
            console.log("data")
            console.log(data)
        });
    }
        function ProgresList(){
            fetch('http://localhost:4734/api/progres')
            .then(response=>response.json())
            .then(data=>{
                setprogres(data);
                console.log(data)
                
                console.log("data2")
            });
        }
    
    return (
        <div>
            {/* <ProjectData /> */}
            <h1>Admin Class</h1>
            <Button onClick={UserList} >Get User List</Button>
            <Button onClick={ProgresList} > Get ProgresList</Button>
        </div>
    )
}
