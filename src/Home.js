import {Row,Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



function Home(){
    return(
        <div className="header1" >
            
          
            <Container>
            <Row className='justify-content-space-between'>
                <Col lg='7' md='4'sm='2' xs='1'>
                    <div className='h1s1 '>
                        <img src={require('./imgs/logo.png')}></img>
                    </div>
                    </Col>
                    
                        <Col  lg='5' md='8' sm='10' xs='11'>
                        <div>
                      <nav>
                        <ul className='h1s2'>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="resume">Resume</Link></li>
                            <li><Link to="portfolio">Portfolio</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                      </nav>
                      </div>
                        </Col>
               
            </Row>
            <Row className='title'>
                <Col lg='12' >
                <div className='s1s2'>
                    emma smith
                </div>
                </Col>
            </Row>
            <Row className='title2'>
                <Col>
                <div className='s1s3'>I'm a Designer</div>
                </Col>
            </Row>
            </Container>
            <Row >
                <Col lg='12'>
                <Row >
                <Col lg={{span:'12'}}>
                <div className='s1s4 '>
            <ul>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li>
                <i class="fa-brands fa-linkedin-in"></i>
                </li>
                <li>
                <i class="fa-brands fa-github"></i>
                </li>
                <li>
                <i class="fa-brands fa-instagram"></i>
                </li>
            </ul>
       
       </div>
       
                </Col>
                </Row>
                </Col>
               
            </Row>
          
           
        </div>
    );
}

export default Home;