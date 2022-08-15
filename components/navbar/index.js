import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Offcanvas} from "react-bootstrap"
import { useMediaQuery } from 'react-responsive'

function CommonNavbar() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })


  return (
    <Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="/home">
    <img src="/logo2.png" alt="web_logo" className='main-logo' />
  </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="offcanvasNavbarLabel-expand-lg" />


 {!isTabletOrMobile && <Navbar.Collapse >
<Nav className="me-auto" />





<Nav>

  <Nav.Link eventKey={2} href="/about">Portfolio</Nav.Link>
  <Nav.Link eventKey={2} href="/contact">Resume</Nav.Link>
  <Nav.Link eventKey={2} href="/info">About Us</Nav.Link>
</Nav>
</Navbar.Collapse>}


{isTabletOrMobile && <Navbar.Offcanvas
id={`offcanvasNavbar-expand-lg`}
aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
placement="start"
>
<Offcanvas.Header closeButton>
  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
    Offcanvas
  </Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
  <Nav className="justify-content-end flex-grow-1 pe-3">
    <Nav.Link href="#action1">Home</Nav.Link>
    <Nav.Link href="#action2">Link</Nav.Link>
    <NavDropdown
      title="Dropdown"
      id={`offcanvasNavbarDropdown-expand-lg`}
    >
      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action4">
        Another action
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">
        Something else here
      </NavDropdown.Item>
    </NavDropdown>
  </Nav>
 
</Offcanvas.Body>
</Navbar.Offcanvas> }


  </Container>
</Navbar>
  )
}

export default CommonNavbar


