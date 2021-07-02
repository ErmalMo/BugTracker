import React, { useState} from 'react'
import { 
  Navbar as RSNavBar,
  Nav, 
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from '../../Pictures/bugWhite.png'
import './NavBar.css'

export default function NavBar(props) {



  // const [isAdmin, setIsAdmin] = useState(false)
  // const [isLogedIn, setIsLogedIn] = useState(false)
  return (
    <div className="body">
      <div className="divName">
      <img src={Logo} alt="a"/> 
      <h1 style={{fontSize:"50px", color:"white" }} >Bug Tracker</h1>
      </div>
      <div class="d-flex justify-content-center">
      <RSNavBar className="navBar" color="#5580a0" light expand="md">
        <Nav >
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"5px" }} href="/">
                Home
            </NavLink>
          </NavItem>{''}
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/projectdata">
                Add a project
            </NavLink>
          </NavItem>
          <NavItem>
              <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/feed">
                  Feed
              </NavLink>
            </NavItem>
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/register-login">
                Register/Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/contactus">
              Contact us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/rateus">
              Rate us
            </NavLink>
          </NavItem>
        </Nav>
      </RSNavBar>
      </div>
      
    </div>
  )
}