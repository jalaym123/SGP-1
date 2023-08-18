import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <section className="section footer bg-dark text-white">
            <Container>
                <Row className='py-4'>
                    <Col className="col-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda dignissimos laboriosam aliquid soluta aliquam pariatur neque libero dicta. Dicta sunt cupiditate dolorem error minima molestiae voluptas placeat ex unde!</p>
                    </Col>
                    <Col className="col-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/about">About</Link>
                        </div>
                        <div>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div>
                            <Link to="/">Blog</Link>
                        </div>
                    </Col>
                    <Col className="col-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <Container className='ps-0'>
                            <p className='text-white mb-1'>217, Shreedeep Residency, Changa - 388421</p>
                        </Container>
                        <Container className='ps-0'>
                            <p className='text-white mb-1'>+91 9012432141</p>
                        </Container>
                        <Container className='ps-0'>
                            <p className='text-white mb-1'>+91 9428572710</p>
                        </Container>
                        <Container className='ps-0'>
                            <p className='text-white mb-1'>jalaym123@gmail.com</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
