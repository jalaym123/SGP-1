import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VMC } from './Includes/VMC';
import { Breadcrumbs , Typography} from '@mui/joy';
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <Container fluid className="px-0">
        <section className="bg-info py-3 mb-4">
        <Container>
          <Row>
            <Col className="col-6 my-auto">
              <h4>About Us</h4>
            </Col>
            <Col className="col-6 my-auto d-flex justify-content-end">
              <h6>
                <Breadcrumbs size="md">
                  <Link to="/">Home</Link>
                  <Typography>About</Typography>
                </Breadcrumbs>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className="my-5 py-2">
          <Container>
            <h5 className="main-heading">Our Company</h5>
            <div className="underline mb-3"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam itaque corporis vitae saepe error velit quasi porro, perspiciatis est consectetur facere maiores quis minus praesentium non alias delectus sit!</p>
          </Container>
        </Container>
      </section>

      <VMC />
    </Container>
  )
}
