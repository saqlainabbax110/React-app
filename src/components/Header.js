import React from 'react'
import{ Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <>
         <Navbar  className="myRed" bg="dark" variant="dark"
      sticky="top" expand="lg"
      >
         <Navbar.Brand>
         Logo
       </Navbar.Brand>

       <Navbar.Toggle/>
       <Navbar.Collapse>
       <Nav className="Nav">
         <NavDropdown title="Home">
           <NavDropdown.Item href="home/Our Blog">Our Blog</NavDropdown.Item>
           <NavDropdown.Item href="home/Our Products">Our Products</NavDropdown.Item>
           <NavDropdown.Item href="home/Menu">Our Menu</NavDropdown.Item>
            <NavDropdown.Divider/>
           <NavDropdown.Item href="home/Blogging">Our Blogging  </NavDropdown.Item>

         </NavDropdown>
         <Nav.Link href="About Us">About US</Nav.Link>
         <Nav.Link href="Services">Our Services</Nav.Link>
         <Nav.Link href="Contact Us">Contact Us </Nav.Link>
       </Nav>

       </Navbar.Collapse>


  


      </Navbar>    
        </>
    )
}

export default Header

