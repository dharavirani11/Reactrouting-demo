import { Container,Row,Col} from "react-bootstrap";


function Blog(){
    return(
        <div className="b1main">
            <Container>
            <Row>
                    <Col lg='12'>
                    <div className="p1s1">Check out my latest blog posts</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                    <div className="p1s2">
                        My Blog
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='4'>
                        <div className="b1s1 b11">
                            <div className="b1s2">
                                <img src={require('./imgs/asset 11.jpeg')}></img>
                                <div className="b1s3">11 Dec, 20</div>
                            </div>
                            <div>
                                <p id='b1'>Top tools for Potographer</p>
                                <p id="b2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="b1s1 b11">
                            <div className="b1s2">
                                <img src={require('./imgs/asset 12.jpeg')}></img>
                                <div className="b1s3">12 Aug, 20</div>
                            </div>
                            <div>
                                <p id='b1'>Take a tour of my office</p>
                                <p id="b2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="b1s1 b11">
                            <div className="b1s2">
                                <img src={require('./imgs/asset 13.jpeg')}></img>
                                <div className="b1s3">4 Feb, 20</div>
                            </div>
                            <div>
                                <p id='b1'>How i became a Web Designer</p>
                                <p id="b2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='4'>
                        <div className="b1s1">
                            <div className="b1s2">
                                <img src={require('./imgs/asset 14.jpeg')}></img>
                                <div className="b1s3">11 Dec, 19</div>
                            </div>
                            <div>
                                <p id='b1'>How to improve work performance</p>
                                <p id="b2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="b1s1">
                            <div className="b1s2">
                                <img src={require('./imgs/asset 15.jpeg')}></img>
                                <div className="b1s3">15 Nov, 19</div>
                            </div>
                            <div>
                                <p id='b1'>How to work from home</p>
                                <p id="b2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="b1s1">
                            <div className="b1s2">
                                <img src={require('./imgs/asset 16.jpeg')}></img>
                                <div className="b1s3">8 Aug, 19</div>
                            </div>
                            <div>
                                <p id='b1'>How to enjoy your buisness trip</p>
                                <p id="b2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Blog;