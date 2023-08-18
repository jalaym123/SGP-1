import React from 'react'
import { AspectRatio, Button, Card, CardContent, CardOverflow, Typography, Breadcrumbs } from '@mui/joy'
import MUILink from '@mui/joy/Link'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Reservation = ({restroData}) => {
  return (
    <>
      <Container fluid className="px-0">
        <section className="bg-info py-3 mb-4">
          <Container>
            <Row>
              <Col className="col-6 my-auto">
                <h4>Table Reservation</h4>
              </Col>
              <Col className="col-6 my-auto d-flex justify-content-end">
                <h6>
                  <Breadcrumbs size="md">
                    <Link to="/">Home</Link>
                    <Typography>Reservation</Typography>
                  </Breadcrumbs>
                </h6>
              </Col>
            </Row>
          </Container>
        </section>
        <Row className='m-4'>
          <Col className='d-flex justify-content-center col-6'>
            <Card sx={{ width: 300, maxWidth: '100%', boxShadow: 'lg' }}>
              <CardOverflow>
                <AspectRatio>
                  <img
                    src={require('../Assets/restro.jpg')}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="body-xs">Real time table booking</Typography>
                <MUILink
                  component={Link}
                  to="/reservation/livebooking"
                  fontWeight="md"
                  color="neutral"
                  textColor="text.primary"
                  overlay
                >
                  Live Booking
                </MUILink>

                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: 'xl' }}
                >
                  ₹{restroData.liveBookingCharge}
                </Typography>
              </CardContent>
              <CardOverflow>
                <Button component={Link} variant="solid" color="danger" size="lg" to='/reservation/livebooking'>
                  Book Now
                </Button>
              </CardOverflow>
            </Card>
          </Col>

          <Col className='d-flex justify-content-center col-6'>
            <Card sx={{ width: 300, maxWidth: '100%', boxShadow: 'lg' }}>
              <CardOverflow>
                <AspectRatio>
                  <img
                    src={require('../Assets/restro.jpg')}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="body-xs">Reserve a table in advance</Typography>
                <MUILink
                  component={Link}
                  to="/reservation/advancebooking"
                  fontWeight="md"
                  color="neutral"
                  textColor="text.primary"
                  overlay
                >
                  Advance Booking
                </MUILink>

                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: 'xl' }}
                >
                  ₹{restroData.reservationCharge}
                </Typography>
                {/* <Typography level="body-xs">
                (Only <b>7</b> tables are unreserved)
              </Typography> */}
              </CardContent>
              <CardOverflow>
                <Button component={Link} variant="solid" color="danger" size="lg" to='/reservation/advancebooking'>
                  Book Now
                </Button>
              </CardOverflow>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}