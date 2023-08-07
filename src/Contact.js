import { Col, Container,Form,Row } from "react-bootstrap";


function Contact(){
    return(
        <div className="c1main">
            <Container>
            <Row>
                    <Col lg='12'>
                    <div className="p1s1">Feel free to contact me anytimes</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                    <div className="p1s2">
                        Get in Touch
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='7' sm='12' md='12'>
                        <div className="c1s3">
                        <div className="c1s4">
                            Message Me

                        </div>
                        <form>
                            <div className="c1s5">
                               <Row >
                                <Col lg='6'>
                                <input type='text' id='c1'placeholder="Name" required></input>
                                </Col>
                             
                               
                                <Col lg='6'className="align-items-start" >
                                <input type='text' id='c2'placeholder="Email" required></input>
                                </Col>
                                </Row>
                            </div>
                           <Row>
                            <Col lg='12' sm='12'>
                            <div className="c1s6">
                            <input type='text' id='c3'placeholder="Subject" required></input>
                          
                            </div>
                            </Col>
                           </Row>
                            <Row>
                                <Col lg='12'sm='12'>
                                <input type='text' id='c4'placeholder="Message" required></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div className="c1s7">
                            <button>Send Message</button>
                            </div>
                                </Col>
                            </Row>
                        </form>
                        
                        </div>
                    </Col>
                    <Col>
                    <Row>
                        <Col lg='12'>
                        <div className="c1s4">Contact Info</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                        <div className="c1s9">Always available for freelance work if the right project comes along, Feel free to contact me!</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                        <div className="c1s11">
                        <i class="fa-brands fa-gg-circle"></i> 
                        <div className="c1s10">
                            <div className="c1">Name</div>
                            <div className="c2">emma smith</div>
                        </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                        <div className="c1s11">
                        <i class="fa-solid fa-compass"></i>
                        <div className="c1s10">
                            <div className="c1">location</div>
                            <div className="c2">4155 mann island, united kingdom.</div>
                        </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                        <div className="c1s11">
                        <i class="fa-solid fa-phone"></i>
                        <div className="c1s10">
                            <div className="c1">call me</div>
                            <div className="c2">+44 1632 967704</div>
                        </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                        <div className="c1s11">
                        <i class="fa-solid fa-paper-plane"></i>
                        <div className="c1s10">
                            <div className="c1">email me</div>
                            <div className="c22">emma@example.com</div>
                        </div>
                        </div>
                        </Col>
                    </Row>
                    
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}
export default Contact;