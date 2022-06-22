import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';

import { Container, Nav, Col, Row, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Header = () => {
    return (
        <div >
            {/* <div className='top-head'>
                <Container>
                    <Row>
                        <Col>
                            <p>All course 28% off for <span>Liberian people’s.</span> </p>
                        </Col>
                        <Col>
                            <p><FontAwesomeIcon icon={faPhone} className='icons' /> (970) 262-1413</p>
                        </Col>
                        <Col>
                            <p><FontAwesomeIcon icon={faEnvelope} className='icons' /> devshakibhasan@gmail.com</p>
                        </Col>
                        <Col>
                            <p>
                                <a href=""><FontAwesomeIcon icon={faFacebook} className='icons' /></a>
                                <a href=""><FontAwesomeIcon icon={faGithub} className='icons' /></a>
                                <a href=""> <FontAwesomeIcon icon={faInstagram} className='icons' /></a>
                                <a href="">      <FontAwesomeIcon icon={faLinkedin} className='icons' /></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <Navbar expand="lg" className='header' fixed="top">
                <Container className='nav-container'>
                    <Navbar.Brand href="/"><h1 className='logo'>EduCare</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-auto ">
                            <Nav.Link href="/" className='first-nav'>Home</Nav.Link>

                            <NavDropdown title="All Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Pages</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Pages</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ ">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blog" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Pages</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">Contact</Nav.Link>
                          
                           
                        </Nav>
                        <div className='Buttons'>
                                <Button className='sign-btn'>Sign in</Button>{' '}
                                <Button className='signUp-btn'>Sign Up</Button>{' '}
                                {/* <Button className='signUp-btn'>Hire Me</Button>{' '} */}
                                {/* <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className=""
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                            </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
