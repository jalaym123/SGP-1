import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  './vision.css'

export const VMC = () => {
  return (
    <section className='my-4 mt-5 py-2 bg-secondary bg-opacity-10 pb-4'>
      <Container>
        <Row>
          <Col className='text-center col-12'>
            <h3 className='main-heading'>
              Vision, Mission And Values
            </h3>
            <div className='underline mx-auto my-4'></div>
          </Col>
          <Col className='text-center col-4'>
            <div class="card">
              <div class="content">
                <p class="heading mx-auto">Vision
                </p><p class="para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  laboriosam at voluptas minus culpa deserunt delectus sapiente
                  inventore pariatur
                </p>
              </div>
            </div>
          </Col>
          <Col className='text-center col-4'>
          <Col className='text-center col-4'>
            <div class="card">
              <div class="content">
                <p class="heading mx-auto">Mission
                </p><p class="para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  laboriosam at voluptas minus culpa deserunt delectus sapiente
                  inventore pariatur
                </p>
              </div>
            </div>
          </Col>
          </Col>
          <Col className='text-center col-4'>
          <Col className='text-center col-4'>
            <div class="card">
              <div class="content">
                <p class="heading mx-auto">Values</p>
                <p class="para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  laboriosam at voluptas minus culpa deserunt delectus sapiente
                  inventore pariatur
                </p>
              </div>
            </div>
          </Col>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
