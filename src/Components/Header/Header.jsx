import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <>
        <Navbar bg="light" expand="lg" id='header'>
            <Container id='headercontainer'>
              <Navbar.Brand href="#home" id='home'><img src={require('./../../Assets/Images/logo.png')} height="" alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" id='navbar'>
                  <Nav.Link className='navlink'><Link to='/home'>HOME</Link></Nav.Link>
                  <Nav.Link className='navlink'><Link to='/home'>ABOUT US</Link></Nav.Link>
                  <Nav.Link className='navlink'><Link to='/home'>COURSES</Link></Nav.Link>
                  <Nav.Link className='navlink'><Link to='/home'>PLACEMENT</Link></Nav.Link>
                  <Nav.Link className='navlink'><Link to='/home'>GALLERY</Link></Nav.Link>
                  <Nav.Link className='navlink'><Link to='/home'>CONTACT US</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header