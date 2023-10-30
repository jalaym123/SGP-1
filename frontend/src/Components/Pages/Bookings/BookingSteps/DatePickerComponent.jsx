import { Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const DatePickerComponent = ({ value, handleBack, handleNext, setDate, setTables, tables, restroData }) => {
    const handleDate = async (newValue) => {
        const slots = (new Date(restroData.maxTime).getHours() - new Date(restroData.minTime).getHours()) * 2 + 1;
        tables = tables.filter(table => {
            const bookings = table.bookings[newValue.date().toString() + "-" + newValue.month().toString() + "-" + newValue.year().toString()]
            let size = 0;
            if (bookings !== undefined) size = bookings.length;
            return size !== slots;
        })
        setDate(newValue)
        setTables(tables)
    }
    return (
        <>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='d-flex justify-content-center'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb" >
                        <DatePicker
                            label="DD/MM/YYYY"
                            value={value}
                            disablePast
                            onChange={handleDate}
                            views={['year', 'month', 'day']}
                        />
                    </LocalizationProvider>
                </Col>
            </Row>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='col-md-5 col-lg-3 col-sm-8 d-flex justify-content-around'>
                    <Button variant="contained" color="success" onClick={handleBack}>
                        back
                    </Button>
                    <Button variant="contained" color="success" onClick={handleNext} className='ms-2'>
                        next
                    </Button>
                </Col>
            </Row>

        </>
    )
}
