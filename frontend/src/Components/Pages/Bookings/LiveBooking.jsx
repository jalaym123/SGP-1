import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Typography, Breadcrumbs } from '@mui/joy'
import { Link } from 'react-router-dom'

export const LiveBooking = () => {
  return (
    <>

      <Container fluid className="px-0">
        <section className="bg-info py-3 mb-4">
          <Container>
            <Row>
              <Col className="col-6 my-auto">
                <h4>Live Booking</h4>
              </Col>
              <Col className="col-6 my-auto d-flex justify-content-end">
                <h6>
                  <Breadcrumbs size="md">
                    <Link to="/">Home</Link>
                    <Link to="/reservation">Reservation</Link>
                    <Typography>Live Booking</Typography>
                  </Breadcrumbs>
                </h6>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>

    </>
  )
}
