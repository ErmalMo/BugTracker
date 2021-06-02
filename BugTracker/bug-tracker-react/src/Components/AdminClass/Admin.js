import React, {useState} from 'react'
import {Button} from 'reactstrap'
import ProjectData from '../ProjectData/ProjectData'
export default function Admin() {
    const [user, setuser] = useState([])
    const [progres, setprogres] = useState([])

     function UserList(){
        fetch('http://localhost:4734/api/datausers')
        .then(response=>response.json())
        .then(data=>{
            this.setuser(data);
            console.log(user)
        });
    }
        function ProgresList(){
            fetch('http://localhost:4734/api/datausers')
            .then(response=>response.json())
            .then(data=>{
                this.setprogres(data);
                console.log(progres)
            });
        }
    
    return (
        <div>
            <ProjectData />
            <h1>Admin Class</h1>
            <Button onClick={UserList} />
            <Button onClick={ProgresList} />
        </div>
    )
}
