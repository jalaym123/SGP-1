import React from 'react'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Col, Row } from 'react-bootstrap'
import 'dayjs/locale/en-gb';
import { Button } from '@mui/material';

export const DatePickerComponent = (props) => {
    return (
        <>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='d-flex justify-content-center'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb" >
                        <DatePicker
                            label="DD/MM/YYYY"
                            value={props.value}
                            disablePast
                            onChange={(newValue) => props.setDate(newValue)}
                            views={['year', 'month', 'day']}
                        />
                    </LocalizationProvider>
                </Col>
            </Row>
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

        </>
    )
}
