import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"

function Header1() {
  return (
    <>
        {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" id='header'>
          <Container>
            <Navbar.Brand href="#" id='home'><img src={require('./../../Assets/Images/logo.png')} height="" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='navbarToggle' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={require('./../../Assets/Images/logo.png')} height="" width='200' alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='navbarlink'><NavLink className='navlink' to='/home'>HOME</NavLink></Nav.Link>
                    <Nav.Link className='navbarlink'><NavLink className='navlink' to='/about'>ABOUT US</NavLink></Nav.Link>
                    <Nav.Link className='navbarlink'><NavLink className='navlink' to='/courses'>COURSES</NavLink></Nav.Link>
                    <Nav.Link className='navbarlink'><NavLink className='navlink' to='/placement'>PLACEMENT</NavLink></Nav.Link>
                    <Nav.Link className='navbarlink'><NavLink className='navlink' to='/gallery'>GALLERY</NavLink></Nav.Link>
                    <Nav.Link className='navbarlink'><NavLink className='navlink' to='/contactus'>CONTACT US</NavLink></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header1



// let aa = [
//   {
//     title : '',
//     data : ['', '']
//   },
//   {
//     title : '',
//     data : ['', '']
//   }
// ]