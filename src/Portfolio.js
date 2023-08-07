import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';


function Portfolio() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="p1main">
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="p1s1">Showcasing some of my best work</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <div className="p1s2">
                            Portfolio
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg='6'>
                        <Row>
                            <Col lg='10'>
                                <div>
                                    <nav>
                                        <ul className="p1s3">
                                            <li id='all'><Link to="all">All</Link></li>
                                            <li><Link to="brand">Brand</Link></li>
                                            <li><Link to="logo">Logo</Link></li>
                                            <li><Link to="design">Design</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Col lg='4'>
                        <div className="p1s88">
                            <img src={require('./imgs/asset 5.jpeg')}></img>
                            <div className="layer">
                                <p className="i1">Lable tag Mokeup</p>

                                <p className="i2"><a href='#' onClick={handleShow}>More Info</a></p>
                                <Modal show={show} onHide={handleClose}     >

                                    <img src={require('./imgs/asset 5.jpeg')}  ></img>

                                </Modal>
                            </div>
                            <div className="p1s09">

                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="p1s88">
                            <img src={require('./imgs/asset 6.jpeg')}></img>
                            <div className="layer">
                                <p className="i1">   3D BAg Mockup</p>

                                <p className="i2"><a href="#" onClick={handleShow}>More Info</a></p>
                                <Modal show={show} onHide={handleClose}>

                                    <img src={require('./imgs/asset 6.jpeg')}  ></img>

                                </Modal>
                            </div>
                            <div className="p1s09">

                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="p1s88">
                            <img src={require('./imgs/asset 7.jpeg')}></img>
                            <div className="layer">
                                <p className="i1">Morden Bag Design</p>

                                <p className="i2"><a href="#" onClick={handleShow}>More Info</a></p>
                                <Modal show={show} onHide={handleClose}>
                                </Modal>
                            </div>
                            <div className="p1s09">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg='4'>
                        <div className="p1s88">
                            <img src={require('./imgs/asset 7.jpeg')}></img>
                            <div className="layer">
                                <p className="i1">T-shirt Design</p>

                                <p className="i2"><a src={require("./imgs/asset 8.jpeg")}>More Info</a></p>
                            </div>
                            <div className="p1s09">

                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="p1s88">
                            <img src={require('./imgs/asset 8.jpeg')}></img>
                            <div className="layer">
                                <p className="i1">Coffee Cup Design</p>

                                <p className="i2"><a href="./imgs/asset 8.jpeg">More Info</a></p>
                            </div>
                            <div className="p1s09">

                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="p1s88">
                            <img src={require('./imgs/asset 9.jpeg')}></img>
                            <div className="layer">
                                <p className="i1">Packaging Bag Mockup</p>

                                <p className="i2"><a href="./imgs/asset 8.jpeg">More Info</a></p>
                            </div>
                            <div className="p1s09">

                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default Portfolio;