import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Services = () => {
  return (
    <section className='my-4 mt-5 py-2'>
      <Container>
        <Row>
          <Col className='text-center col-12'>
            <h3 className='main-heading'>
              Our Services
            </h3>
            <div className='underline mx-auto my-4'></div>
          </Col>
          <Col className='text-center col-4'>
            <Card className='shadow'>
              <Card.Img varient='top' src={require('../../Assets/fooddelivery.jpg')} />
              <hr className='my-3' />
              <Card.Body className='pt-0'>
                <Card.Title>Food Delivery</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati autem voluptate exercitationem facilis adipisci nisi aliquam error, sequi vel culpa fugit delectus eveniet quibusdam deleniti laudantium alias sint ab.
                </Card.Text>
                <Link to="" className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className='text-center col-4'>
            <Card className='shadow'>
              <Card.Img varient='top' src={require('../../Assets/dinein.webp')} />
              <hr className='my-3' />
              <Card.Body className='pt-0'>
                <Card.Title>Dine In</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas expedita laborum nemo tempore laboriosam commodi nobis voluptatem quaerat mollitia eos repellat, dolorem maiores veritatis repudiandae, explicabo, voluptatum quos sed.
                </Card.Text>
                <Link to="" className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className='text-center col-4'>
            <Card className='shadow'>
              <Card.Img varient='top' src={require('../../Assets/tablereservation.jpg')} />
              <hr className='my-3' />
              <Card.Body className='pt-0'>
                <Card.Title>Table Reservation</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, officia quod! A recusandae ipsam aut aperiam eos? Fugit necessitatibus, ad, quo praesentium vel ratione iure eligendi pariatur expedita, recusandae optio.
                </Card.Text>
                <Link to="/reservation" className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
