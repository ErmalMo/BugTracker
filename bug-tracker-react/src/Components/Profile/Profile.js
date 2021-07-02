import React from 'react'
export default function Profile(props) {
    const { isLogged }= props;
    if(isLogged){
        return <h1>WORKINGGGGG</h1>
    }else{
    return (
        <div>
            <h1> HELLO Profile false</h1>
        </div>
    )
}
}
Profile.defualtProps={
    isLogged:false
}