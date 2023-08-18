import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Select, Option } from '@mui/joy'
import { Button } from '@mui/material';

export const GuestPicker = ({ value, setGuests, handleNext, maxGuests }) => {
    const guests = [];
    for (let i = 0; i < maxGuests; i++)
        guests.push(i + 1)
    const handleChange = (event, newValue) => {
        setGuests(newValue)
    };

    return (
        <>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='col-md-5 col-lg-3 col-sm-8 d-flex justify-content-center'>
                    <Container className='shadow p-0'>
                        <Select
                            defaultValue={value}
                            onChange={handleChange}
                        >
                            {
                                guests.map(x =>
                                    <Option key={x} value={x}>{x}</Option>
                                )
                            }
                        </Select>
                    </Container>
                </Col>
            </Row>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='col-md-5 col-lg-3 col-sm-8 d-flex justify-content-around'>
                    <Button variant="contained" color="success" onClick={handleNext}>
                        next
                    </Button>
                </Col>
            </Row>
        </>
    )
}
