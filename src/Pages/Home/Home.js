import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Container, Nav, Col, Row, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import './Home.css'
import { faStrava } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className='home home-section'>
            <div className='home-content'>

                <Container >
                    <Row>
                        <Col lg='4' md='6' sm='12' className='left-content'>
                            <h4>Start your favourite course</h4>
                            <h2>Now learning from anywhere, and build your <span>bright career.</span> </h2>
                        </Col>
                        <Col lg='8' md='6' sm='12' className='right-content'>
                            <div className='course'>
                                <p>1,024 Courses</p>
                            </div>
                            <div className='course2'>
                                <p>4.8 <FontAwesomeIcon icon={faStar} className='ratings' /> Ratings</p>
                           
                            </div>
                            <div class="curved-arrow vert-move">

                            </div>
                            <img src="https://i.ibb.co/LnG10bx/slider-img1.png" alt="" class="img-thumbnail" />
                        </Col>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                    </Row>
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Container>
                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(48,146,85,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(48,146,85,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(48,146,85,85.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#212832" />    

                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;
