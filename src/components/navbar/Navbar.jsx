import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './../../styles/index.scss';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';


const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [click, setClick] = useState(false);

    const handleMenuVisibility = () => {
        setExpanded(expanded ? false : "expanded");
        setClick(!click);
    }
    const collapseMenu = () => {
        setExpanded(false);
        setClick(false);
    }
    const menuIcon = {
        close: <BsIcons.BsJustifyRight onClick={handleMenuVisibility} className="toggle-icon"/>,
        open: <BsIcons.BsX onClick={handleMenuVisibility} className="toggle-icon"/>
    };


    return (
        <Container fluid className="con-fluid">
            <Container className='container con-af-fluid'>
                <Navbar expand='lg' expanded= {expanded} className="Navbar">
                    <Navbar.Brand as={Link} to='/' className="navbar-brand" onClick={collapseMenu}> 
                        <IoIcons.IoBonfireSharp className='logo'/> <h1>Foodhub</h1>
                    </Navbar.Brand>

                    {click ? menuIcon.open : menuIcon.close}

                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav">
                            <Nav.Link as={Link} to='/' onClick={collapseMenu} className="nav-emp">About</Nav.Link>
                            <Nav.Link as={Link} to='#' onClick={collapseMenu} className="nav-emp">Events</Nav.Link>
                            <Nav.Link as={Link} to='#' onClick={collapseMenu} className="nav-emp">Menu</Nav.Link>
                            <Nav.Link as={Link} to='#' onClick={collapseMenu} className="nav-emp">Gallery</Nav.Link>
                            <Nav.Link as={Link} to='#' onClick={collapseMenu} className="nav-emp">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>



    )
}

export default NavBar

