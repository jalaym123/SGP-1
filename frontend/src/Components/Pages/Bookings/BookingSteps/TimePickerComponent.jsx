import React from 'react'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { Button } from '@mui/material';
import { Row, Col, Container } from 'react-bootstrap';

export const TimePickerComponent = (props) => {
    return (
        <>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='col-md-5 col-lg-3 col-sm-8 d-flex justify-content-center'>
                    <Container className='shadow p-0'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DigitalClock
                                minTime={dayjs(props.minTime)}
                                maxTime={dayjs(props.maxTime)}
                                timeStep={15}
                                skipDisabled
                                value={props.value}
                                defaultValue={props.value}
                                onChange={(newValue) => props.setTime(newValue)}
                            />
                        </LocalizationProvider>
                    </Container>
                </Col>
            </Row>
            {
                props.buttons &&
                <Row className='mt-5 d-flex justify-content-center'>
                    <Col className='col-md-5 col-lg-3 col-sm-8 d-flex justify-content-around'>
                        <Button variant="contained" color="success" onClick={props.handleBack}>
                            back
                        </Button>
                        <Button variant="contained" color="success" onClick={props.handleNext} className='ms-2'>
                            next
                        </Button>
                    </Col>
                </Row>

            }
        </>
    )
}
