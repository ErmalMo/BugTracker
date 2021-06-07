import React from 'react'
import {Table, Button,Col} from 'reactstrap' 
export default function Users(props) {
    const {email, username, password} = props;

    return (
        <Table dark>
        <tbody>
            
            <Col >  
            <Button color="primary" >Edit</Button>
            <Button color="danger">Delete</Button></Col>
          <tr>
            <th scope="row">1</th>
            <td>{email}</td>
            <td>{username}</td>
            <td>{password}</td>
            
          </tr>
        </tbody>
        
        
      </Table>
      
    )
}
Users.defaultProps = {
    email : "emaili",
    username : "usernamei",
    password : "passwordi"
}