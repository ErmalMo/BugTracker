import React, { useState} from 'react'
import NavBar from './Components/NavBar/NavBar'
import Routes from './Routes';
export default function App() { 
  return (
    <div style={{backgroundColor:"#5580a0"}}>
    <NavBar />
    <Routes />
    </div>
  )
}