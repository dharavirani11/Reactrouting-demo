import { Container,Row,Col,ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.min.css';
import React from "react";



function Resume(){
    return(
        <div className="r1main">
          <Container>
            <Row className='justify-content-center'>
                <Col lg='12'>
                <div className="r1s1">
                Check out my resume
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg='12'>
                <div className="r1s2">
                    Resume
                </div>
                </Col>
           </Row>
           <Row>
            <Col>
            
            <Row>
                <Col lg='6'>
                <div className="r1s3">
                        Eduction
                </div>
              <div className="r1s4">
                <div id='square'></div>
               <div className="r1s5">
               <div id="r1s6">
                Computer Science
                </div>
                <p id='r1'>
                Cambridge University / 2004 - 2007
                </p>
                <p id="r2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
               </div>
                </div>
                </Col>
                <Col lg='6'>
                <div className="r1s3">
                      Experience
                </div>
              <div className="r1s4">
                <div id='square'></div>
               <div className="r1s5">
               <div id="r1s6">
               Software Engineer
                </div>
                <p id='r1'>
                Adobe / 2015 - 2017
                </p>
                <p id="r2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
               </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg='6'>
              <div className="r1s4">
                <div id='square'></div>
               <div className="r1s5">
               <div id="r1s6">
               Bachelor Degree
                </div>
                <p id='r1'>
                University of Tokyo / 2008 - 2010
                </p>
                <p id="r2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
               </div>
                </div>
                </Col>
                <Col lg='6'>
              <div className="r1s4">
                <div id='square'></div>
               <div className="r1s5">
               <div id="r1s6">
               Back-End Developer
                </div>
                <p id='r1'>
                Google / 2017 - 2018
                </p>
                <p id="r2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
               </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg='6'>
              <div className="r1s4">
                <div id='square'></div>
               <div className="r1s5">
               <div id="r1s6">
               Master Degree
                </div>
                <p id='r1'>
                Harvard University / 2012 - 2015
                </p>
                <p id="r2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
               </div>
                </div>
                </Col>
                <Col lg='6'>
              <div className="r1s4">
                <div id='square'></div>
               <div className="r1s5">
               <div id="r1s6">
               UI/UX Designer
                </div>
                <p id='r1'>
                Discord / 2019 - Present
                </p>
                <p id="r2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
               </div>
                </div>
                </Col>
            </Row>
            </Col>
           </Row>
       
          <div className="r1sub1">
          <Row>
                <Col lg='12'>
                <div className="r1s7">My level of knowledge in some tools</div>
                </Col>
            </Row>
            <Row>
                <Col lg='12'>
                    <div className="r1s8">
                        My Skills
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg='6'>
                    <div className="r1s9">
                        <div className="r1s10">
                            HTML/CSS
                        </div>
                        <div className="r1s11">
                            95%
                        </div>
                    </div>
                    <div className="r1s12">
                    <ProgressBar now={95} />
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="r1s9">
                        <div className="r1s10">
                            React JS
                        </div>
                        <div className="r1s11">
                            90%
                        </div>
                    </div>
                    <div className="r1s12">
                    <ProgressBar now={90} />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg='6'>
                    <div className="r1s9">
                        <div className="r1s10">
                        Web Design
                        </div>
                        <div className="r1s11">
                            80%
                        </div>
                    </div>
                    <div className="r1s12">
                    <ProgressBar now={80} />
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="r1s9">
                        <div className="r1s10">
                        Express.js  
                        </div>
                        <div className="r1s11">
                            95%
                        </div>
                    </div>
                    <div className="r1s12">
                    <ProgressBar now={95} />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg='6'>
                    <div className="r1s9">
                        <div className="r1s10">
                            JavaScript
                        </div>
                        <div className="r1s11">
                            90%
                        </div>
                    </div>
                    <div className="r1s12">
                    <ProgressBar now={90} />
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="r1s9">
                        <div className="r1s10">
                           TypeScript
                        </div>
                        <div className="r1s11">
                            80%
                        </div>
                    </div>
                    <div className="r1s12">
                    <ProgressBar now={80} />
                    </div>
                </Col>
            </Row>
          </div>

          <div className="r1sub2">
            <Row>
                <Col lg='6'>
                    <div className="r1s13">
                        <div className="r1s14">
                        Take a tour of my office
                        </div>
                        <div className="r1s15">
                            <p id='rs1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!</p>
                            <p id='rs2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum. </p>

                        </div>
                    </div>

                </Col>
                <Col lg='6'>
                <div className="r1s16">
                   
                    <a  href="https://www.youtube.com/watch?"><i class="fa-solid fa-circle-play"></i> </a>
                 </div>
                </Col>
            </Row>
          </div>
          </Container>
        </div>
    )
}
export default Resume;