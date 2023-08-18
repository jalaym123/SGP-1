import React from 'react'
import { VMC } from './Includes/VMC';
import { Services } from './Includes/Services';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slides } from './Includes/Slides'

export const Home = () => {
    return (
        <>
            <Slides />
            <section className='my-3 mb-5'>
                <Container>
                    <Row>
                        <Col className='col-12 text-center'>
                            <h3 className='main-heading'>
                                Our Company
                            </h3>
                            <div className='underline mx-auto my-4'></div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi eligendi facere, quae eos error architecto nesciunt voluptatum dolor, esse iusto sed, autem unde sapiente. Reiciendis, mollitia. Consequatur, dicta laudantium.</p>
                            <Link to="/about" className='btn btn-warning shadow'>Read More</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <VMC />
            <Services />
        </>
    )
}
