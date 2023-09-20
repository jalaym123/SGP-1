import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon ,MDBBtn} from 'mdb-react-ui-kit';


export const Footer = () => {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
                    <MDBIcon fab icon='facebook-f' size='lg' />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                    <MDBIcon fab icon='twitter' size='lg' />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
                    <MDBIcon fab icon='google' size='lg' />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                    <MDBIcon fab icon='instagram' size='lg' />
                </MDBBtn>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3' >
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 '>
                            <h6 className='text-uppercase fw-bold mb-4 '>Products</h6>
                            <p >
                                <Link to="/" style={{ textDecorationLine: 'none', color: 'white' }}>Home</Link>
                            </p>
                            <p>
                                <Link to="/about" style={{ textDecorationLine: 'none', color: 'white' }} >About Us</Link>
                            </p>
                            <p>
                                <Link to="/reservation" style={{ textDecorationLine: 'none', color: 'white' }}>Resevation</Link>
                            </p>
                            <p>
                                <Link to="/Contact" style={{ textDecorationLine: 'none', color: 'white' }}>Conatact</Link>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Varachha Road,Surat.
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                Infotech@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" />Jalay: + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" />Mit: + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='/Home'>
                    LOGO.com
                </a>
            </div>
        </MDBFooter>
    )
}
