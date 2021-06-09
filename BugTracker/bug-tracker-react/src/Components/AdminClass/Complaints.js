import React from 'react'
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
   
}