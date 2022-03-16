import React from 'react';
import './Header.css'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';


export default class Header extends React.Component{
    render(){
        return (
                <Navbar class="Navbar"  bg="light" expand="lg">
                <Container style={{
                
                }}>
                <Navbar.Brand className='top_navbar__brand' id="navbar-brand" href="#home">CoupleDiary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}