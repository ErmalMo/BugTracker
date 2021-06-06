import React from 'react'

export default function Users(props) {
    const {email, username, password} = props;

    return (
        <div>
            <h5>Email: {email} Username: {username} Password: {password}</h5>
        </div>
    )
}
Users.defaultProps = {
    email : "emaili",
    username : "usernamei",
    password : "passwordi"
}