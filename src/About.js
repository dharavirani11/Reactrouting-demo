import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.min.css';
import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function About() {
    return (
        <div className="a1main">
            <Container>
                <Row className="justify-content-center">
                    <Col lg='12'>
                        <div className="a1a1">Get to know me</div>

                    </Col>
                </Row >
                <Row className="justify-content-center">
                    <Col lg='12'>
                        <div className="a1a2">
                            About Me
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-space-evenly">
                    <Col lg='5'>
                        <div className="a1a3">
                            <img src={require('./imgs/asset 1.jpeg')}></img>
                        </div>
                    </Col>
                    <Col lg='7'>
                        <div className="a1a33">
                            <Row>
                                <Col>
                                    <Row>
                                        <Col>

                                            <div className="a1a4">Who am i?</div>
                                        </Col>
                                        <Row>
                                            <Col>
                                                <div className="a1a5">
                                                    I'm Emma Smith, a visual UX/UI Designer and Web Developer
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className="a1a6">
                                                    I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                                                </div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col lg='6'>
                                                <div className="a1a7"><span>Name:</span><p>emma smith</p></div>
                                            </Col>
                                            <Col lg='6'>
                                                <div className="a1a8"><span>Email:</span><p>emma@example.com</p></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg='6'>
                                                <div className="a1a9"><span>Age:</span><p>21</p></div>
                                            </Col>
                                            <Col lg='6'>
                                                <div className="a1a9"><span>From:</span><p>Liverpool,UK</p></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg='4'>
                                                <div className="a1a11">
                                                    <button>Download CV</button>
                                                </div>
                                            </Col>
                                            <Col lg='2'>
                                                <div className="a1a12">

                                                </div>
                                            </Col>
                                            <Col lg='4'>
                                                <div className="a1a13 ">
                                                    <i class="fa-brands fa-twitter"></i>
                                                    <i class="fa-brands fa-facebook"></i>
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                    <i class="fa-brands fa-github"></i>
                                                    <i class="fa-brands fa-instagram"></i>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Row>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="a1s1slider">
                <Container>
                    <Row>
                        <Col>
                            <div className="a1s1">
                                Services i offer to my clients
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="a1s2">
                            My Services
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg='4'>
                                    <div className="a1s3">
                                        <div className="a1s4">
                                            <i class="fa-brands fa-css3-alt"></i>
                                            <p id='s1'>Design Trends</p>
                                            <p id='s2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg='4'>
                                    <div className="a1s3">
                                        <div className="a1s4">
                                            <i class="fa-regular fa-images"></i>
                                            <p id='s1'>PSD Design</p>
                                            <p id='s2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg='4'>
                                    <div className="a1s3">
                                        <div className="a1s4">
                                            <i class="fa-brands fa-gg-circle"></i>
                                            <p id='s1'>Design Trends</p>
                                            <p id='s2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg='4'>
                                    <div className="a1s3">
                                        <div className="a1s4">
                                            <i class="fa-brands fa-wordpress-simple"></i>
                                            <p id='s1'>Web Development</p>
                                            <p id='s2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg='4'>
                                    <div className="a1s3">
                                        <div className="a1s4">
                                            <i class="fa-solid fa-arrows-up-down-left-right"></i>
                                            <p id='s1'>Fully Responsive</p>
                                            <p id='s2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg='4'>
                                    <div className="a1s3">
                                        <div className="a1s4">
                                            <i class="fa-solid fa-rocket"></i>
                                            <p id='s1'>Branding</p>
                                            <p id='s2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="a3main">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="a3s1">
                                What my clients think about me
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <div className="a3s2">
                                Testimonials
                            </div>
                        </Col>
                        </Row>
                        <Row>
                            <Col lg='12'>
                            <Row>
                            <OwlCarousel className='owl-theme  owp' nav={false} items={2} mouseDrag={true}  autoplayTimeout={5000} autoplay loop>
                           
                                <Col lg='6'md='12' sm='12'   className="w-100">
                                <div class='item'>
                                <div className="a3s3">
                           <div className="a33">
                           <div className="a3s4">
                                <img src={require('./imgs/asset 4.jpeg')}></img>
                               <div className="a3s5">
                                <div className="a3s6">John
                                Santana</div>
                                <div className="a3s7">Enterpreneur</div>
                           </div>
                               
                               </div>
                               <div className="a3a8">
                               <i class="fa-solid fa-quote-right"></i>
                               </div>
                            </div>
                            <div className="a3s9">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.

                            </div>

                        </div>
                                </div>
                                </Col >
                                <Col md='12' sm='12' lg='6'className="w-100">
                                <div class='item'>
                                <div className="a3s3">
                           <div className="a33">
                           <div className="a3s4">
                                <img src={require('./imgs/asset 3.jpeg')}></img>
                               <div className="a3s5">
                                <div className="a3s6">Julia Sakura</div>
                                <div className="a3s7">Envato Customer</div>
                           </div>
                               
                               </div>
                               <div className="a3a8">
                               <i class="fa-solid fa-quote-right"></i>
                               </div>
                            </div>
                            <div className="a3s9">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.

                            </div>

                        </div>
                                </div>
                                
                                </Col>
                                <Col lg='6' md='12' sm='12' className="w-100">
                                <div class='item'>
                                <div className="a3s3">
                           <div className="a33">
                           <div className="a3s4">
                                <img src={require('./imgs/asset 2.jpeg')}></img>
                               <div className="a3s5">
                                <div className="a3s6">Maria Willson</div>
                                <div className="a3s7">Envato Customer</div>
                           </div>
                               
                               </div>
                               <div className="a3a8">
                               <i class="fa-solid fa-quote-right"></i>
                               </div>
                            </div>
                            <div className="a3s9">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.

                            </div>

                        </div>
                                </div>
                                </Col>
                               
                            </OwlCarousel>
                            </Row>
                            </Col>
                        </Row>

                            
                     
                </Container>
            </div>
            <div className="a4main">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="a3s1">
                                Get started with my services
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="a3s2">
                                Choose a Plan
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='4'>
                            <div className="a4s1">
                                <i class="fa-regular fa-circle-dot"></i>
                                <div className="a4s2">Buisness</div>
                                <div className='a4s3'>$39/month</div>
                                <p className="a4s4">Mobile App Design</p>
                                <p className="a4s4">Responsive Design</p>
                                <p className="a4s4">Database Development</p>
                                <p className="a4s4">Web Design</p>
                                <p className="a4s4">24/7 Support
                                </p>
                                <div className="a4s5">
                                    <button>Get Started</button>
                                </div>


                            </div>
                        </Col>
                        <Col lg='4'>
                            <div className="a4s1">
                                <i class="fa-solid fa-rocket rr"></i>
                                <div className="a4s2">Professional</div>
                                <div className='a4s3'>$29/month</div>
                                <p className="a4s4">Mobile App Design</p>
                                <p className="a4s4">Responsive Design</p>
                                <p className="a4s4">Database Development</p>
                                <p className="a4s4">Web Design</p>
                                <p className="a4s4">24/7 Support
                                </p>
                                <div className="a4s5">
                                    <button>Get Started</button>
                                </div>


                            </div>
                        </Col>
                        <Col lg='4'>
                            <div className="a4s1">
                                <i class="fa-solid fa-egg"></i>
                                <div className="a4s2">Standard</div>
                                <div className='a4s3'>$19/month</div>
                                <p className="a4s4">Mobile App Design</p>
                                <p className="a4s4">Responsive Design</p>
                                <p className="a4s4">Database Development</p>
                                <p className="a4s4">Web Design</p>
                                <p className="a4s4">24/7 Support
                                </p>
                                <div className="a4s5">
                                    <button>Get Started</button>
                                </div>


                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

}
export default About;