import React from 'react'
<<<<<<< HEAD

export default function Complaints(props) {
    const {id, userComplain} = props;
    function handleEditComplain(){
        alert("EDITED")
      }
      function handleDeleteComplain(id){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:5001/api/complaints/'+id,{
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
             <td className="col-sm-11">{userComplain}</td>
             <td className="col-sm-1">
                <button onClick={handleDeleteComplain}> <i class="fas fa-trash"></i></button>
             <button onClick={handleEditComplain}><i class="fas fa-user-edit"></i></button>
             </td>
           </tr>
         </thead>
     </table>
    )
}
Complaints.defaultProps = {
    id: 0,
    userComplain: ""
=======
import {Table, Button,Col} from 'reactstrap' 
import Users from './Users';

export default function Complaints(props) {
    const {id, complaints} = props;

    return (
        <Table dark>
        <tbody>
            
            <Col >  
            {/* <Button color="primary" >Edit</Button> */}
            <Button color="danger">Delete</Button></Col>
          <tr>
            <th scope="row">{Users.DataUserName}</th>
            <td>{id}</td>
           {/* <td>{complaints}</td> */}
           
            
          </tr>
        </tbody>
        
        
      </Table>
      
    )
}
Complaints.defaultProps = {
    id : "id",
    complaints : "complaints",
   
>>>>>>> 5902d04d093f7b10b8ccec063d19ee2c5063e185
}