import React, { useState } from 'react'

export default function Profile() {
    const [user, setUser]= useState('')
    React.useEffect(()=>{
        const data= localStorage.getItem('username')
        if(data !== ''){
          setUser(JSON.parse(data))
        }
        
      })
     function handleClick () {
         localStorage.removeItem("username");
         window.location.reload();
        window.location.reload();
     }
    return (
        <div style={{backgroundColor:"blue"}}>
           <h1 >{user}</h1> 
            <button onClick={handleClick} >LOG OUT</button>
        </div>
    )
}
