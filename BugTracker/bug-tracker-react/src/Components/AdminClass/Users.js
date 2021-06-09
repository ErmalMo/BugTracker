import React from 'react'
import './StyleUser.css'
import { Progress } from 'reactstrap'
export default function Users(props) {
    const {id, email, username, password} = props;

    
    function handleEditUser(){
      alert("EDITED")
    }
    function handleDeleteUser(id){
      if(window.confirm('Are you sure?')){
          fetch('http://localhost:5001/api/datauser/'+id,{
              method:'DELETE',
              header:{'Accept':'application/json',
          'Content-Type':'application/json'}
          })
      }
  }
    return (

        
        <table class="table table-bordered text-white">
           {/* <thead>
              <tr>
                <th>id</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead> */}
            <thead>
              <tr>
              <td className="col-sm-1">{id}</td>
                <td className="col-sm-4">{email}</td>
                <td className="col-sm-3">{username}</td>
                <td className="col-sm-3">{password}</td>
                <td className="col-sm-1"><button onClick={handleDeleteUser}> <i class="fas fa-trash"></i></button>
                <button onClick={handleEditUser}><i class="fas fa-user-edit"></i></button>
                </td>
              </tr>
            </thead>
        </table>
    )
}
Users.defaultProps = {
  id :0,
    email : "emaili",
    username : "usernamei",
    password : "passwordi"
}