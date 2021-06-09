import React from 'react'
import {Progress} from 'reactstrap'
export default function ProjectData(props) {
    const {project, number} = props;
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
            <thead>
              <tr>
                 <td className="col-sm-4">
                        <Progress color="success" value={number} />
                    </td>
                    <td className="col-sm-8">
                        <p>{project}</p>
                    </td>
                    <td className="col-sm-1">
                <button onClick={handleDeleteUser}> <i class="fas fa-trash"></i></button>
                <button onClick={handleEditUser}><i class="fas fa-user-edit"></i></button>
                </td>
              </tr>
            </thead>
        </table>
    )
}
ProjectData.defaultProps = {
    project : "",
    number : 0
}