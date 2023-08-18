import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export const UserProfile = (props) => {
    return (
        <>
            <Container>
                <section>
                    <Row>
                        <Col className='text-center mt-5'>
                            <h3 className='main-heading'>Profile Information</h3>
                            <div className='underline mx-auto my-4'></div>
                        </Col>
                    </Row>
                </section>
                <Row className='d-flex justify-content-center'>
                    <Col className='col-md-7 col-12 col-sm-8'>
                        <Container className='shadow pt-3 pb-4 m-0 align-items-center'>
                            <Row>
                                <Col className='ps-4 col-5'>Name:</Col>
                                <Col> {props.userInfo.name}</Col>
                            </Row>
                            <Row>
                                <Col className='ps-4 col-5'>Username:</Col>
                                <Col> {props.userInfo.userId}</Col>
                            </Row>
                            <Row>
                                <Col className='ps-4 col-5'>Email:</Col>
                                <Col> {props.userInfo.email}</Col>
                            </Row>
                            <Row>
                                <Col className='ps-4 col-5'>Mobile Number:</Col>
                                <Col> {props.userInfo.mobileNumber}</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <Container className='m-5'></Container>
            </Container>
        </>
    )
}