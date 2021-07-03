import React from 'react'
import ContactModal from '../Contact/ContactModal';
export default function Contact(props) {
    
    const {id, userContact, email } = props;

    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{id}</td>
                    <td> {userContact} </td>
                    <td> {email} </td>
                    <td> { <ContactModal /> } </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
Contact.defaultProps={
     id:0,
    userContact:"",
     email:""

}