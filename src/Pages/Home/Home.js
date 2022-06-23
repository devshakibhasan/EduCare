import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBookAtlas, faCalendar, faCertificate, faPeopleLine, faPeopleRoof, faStar } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Container, Nav, Col, Row, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import './Home.css'
import { faStrava } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    let counts = setInterval(updated);
    let counts2 = setInterval(updated);
    let counts3 = setInterval(updated);
    let counts4 = setInterval(updated);
    let upto = 0;
    let upto2 = 0;
    let upto3 = 0;
    let upto4 = 10;
    function updated() {
        var count = document.getElementById("counter");
        var count2 = document.getElementById("counter2");
        var count3 = document.getElementById("counter3");
        var count4 = document.getElementById("counter4");
        count.innerHTML = ++upto;
        if (upto === 500) {
            clearInterval(counts);
        }
        count2.innerHTML = ++upto2;
        if (upto2 === 350) {
            clearInterval(counts2);
        }
        count3.innerHTML = ++upto3;
        if (upto3 === 570) {
            clearInterval(counts3);
        }
        count4.innerHTML = ++upto4;
        if (upto4 === 524) {
            clearInterval(counts4);
        }
    }
    return (
        <>
            <div className='home home-section'>
                <div className='home-content'>

                    <Container >
                        <Row>
                            <Col lg='4' md='6' sm='12' className='left-content img-thumbnail'>
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
                                <use xlinkHref="#gentle-wave" x="48" y="18" fill="#0f1d2d" />

                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='Expertise'>

                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <img src="https://i.ibb.co/LnG10bx/slider-img1.png" alt="" class="img-thumbnail" />
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <p className='expertise-subheading'>LEARN ANYTHING</p>
                            <h2 className='expertise-heading'>Benefits About Online Learning Expertise</h2>
                            <div className='d-flex justify-content-center align-items-center exp-content'>

                                <FontAwesomeIcon icon={faBookAtlas} className='exp-icons' />
                                <div>
                                    <h3>Online Courses</h3>
                                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>

                            </div>
                            <div className='d-flex justify-content-center align-items-center exp-content'>
                                <FontAwesomeIcon icon={faCertificate} className='exp-icons' />
                                <div>
                                    <h3>Earn A Certificates</h3>
                                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>

                            </div>
                            <div className='d-flex justify-content-center align-items-center exp-content'>
                                <FontAwesomeIcon icon={faPeopleLine} className='exp-icons' />
                                <div>
                                    <h3>Learn with Expert</h3>
                                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='counter-section'>
                <Container>
                    <Row>
                        <Col lg='3' md='6' sm='12'>
                            <div className='d-flex justify-content-center align-items-center counter-content'>
                                <FontAwesomeIcon icon={faPeopleLine} className='counter-icons' />
                                <div>
                                    <div id="counter"></div>
                                    <p>Success Stories</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='d-flex justify-content-center align-items-center counter-content'>
                                <FontAwesomeIcon icon={faPeopleRoof} className='counter-icons' />
                                <div>
                                    <div id="counter2"></div>
                                    <p>Trusted Tutors</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='d-flex justify-content-center align-items-center counter-content'>
                                <FontAwesomeIcon icon={faCalendar} className='counter-icons' />
                                <div>
                                    <div id="counter3"></div>
                                    <p>Schedules</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg='3' md='6' sm='12'>
                            <div className='d-flex justify-content-center align-items-center counter-content'>
                                <FontAwesomeIcon icon={faBookAtlas} className='counter-icons' />
                                <div>
                                    <div id="counter4"></div>
                                    <p>Courses</p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>



            <div className='Courses-section'>
                <Container>
                    
                </Container>

            </div>
        </>
    );
};

export default Home;
