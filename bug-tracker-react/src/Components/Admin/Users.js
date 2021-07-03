import React from 'react'
import ModalRegLog from '../RegisterLogin/ModalRegLog'
export default function Users(props) {
    
    const {email, username, password, role } = props;

    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{email}</td>
                    <td> {username} </td>
                    <td> {password} </td>
                    <td> {role} </td>
                    <td> {role} </td>
                    <td> {role} </td>
                    <td> { <ModalRegLog /> } </td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
Users.defaultProps={
     id:"",
    userContact:"",
     email:""

}