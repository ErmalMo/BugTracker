import React from 'react'
import { 
  Card,
  Navbar as RSNavBar,
  Nav, 
  Col,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Card>
      <RSNavBar color="light" light expand="md">
        <Col md="5" />
        <Col md="7" >
        <Nav >
        <NavItem>
            <NavLink>
              <Link to="/">
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/datauser">
                Register
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
        </Col>
      </RSNavBar>
    </Card>
  )
}