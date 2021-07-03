import React, { useState} from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Redirect, Route, Router } from 'react-router-dom';
import Routes from './Routes';
import Login from './Components/RegisterLogin/Login'
export default function App() { 
  
  const [data, setData]= useState(null)
  React.useEffect(()=>{
    if(localStorage.getItem('username')!= null){
    setData(localStorage.getItem('username'))
    }
    console.log(data)
  },[])
  console.log(data,"app")
    
  return (
    <div style={{backgroundColor:"#5580a0"}}>
        <NavBar data={ data } />
        <Routes data={ data } />
    </div>
  )
}