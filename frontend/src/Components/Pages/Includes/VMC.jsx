import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const VMC = () => {
  return (
    <section className='my-4 mt-5 py-2 bg-secondary bg-opacity-10'>
      <Container>
        <Row>
          <Col className='text-center col-12'>
            <h3 className='main-heading'>
              Vision, Mission And Values
            </h3>
            <div className='underline mx-auto my-4'></div>
          </Col>
          <Col className='text-center col-4'>
            <h4>
              Vision
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima omnis quo amet nostrum a ipsum non sunt, mollitia, aut voluptatum rerum ea provident, molestiae magni? Quis quibusdam doloremque nihil dolore!</p>
          </Col>
          <Col className='text-center col-4'>
            <h4>
              Mission
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima omnis quo amet nostrum a ipsum non sunt, mollitia, aut voluptatum rerum ea provident, molestiae magni? Quis quibusdam doloremque nihil dolore!</p>
          </Col>
          <Col className='text-center col-4'>
            <h4>
              Values
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima omnis quo amet nostrum a ipsum non sunt, mollitia, aut voluptatum rerum ea provident, molestiae magni? Quis quibusdam doloremque nihil dolore!</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
