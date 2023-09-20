import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Payment = (props) => {

    function createData(guests, date, time, total) {
        return { guests, date, time, total };
    }

    const rows = [
        createData(props.guests, props.date, props.time, props.price),
    ];

    return (
        <>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='col-md-7 col-lg-5 col-sm-12 d-flex justify-content-center'>
                    <TableContainer component={Paper}>
                        <Table aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Guests</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, i) => (
                                    <TableRow key={i} >
                                        <TableCell component="th" scope="row"> {row.guests} </TableCell>
                                        <TableCell align="right"> {row.date} </TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                        <TableCell align="right">₹{row.total}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col className='col-md-7 col-lg-5 col-sm-12 d-flex justify-content-around'>
                    <Button variant="contained" color="success" onClick={props.handleBack}>
                        back
                    </Button>
                    <Button variant="contained" color="success" LinkComponent={Link} to='/reservation/advancebooking/payment' className='ms-2'>
                        proceed to payment
                    </Button>
                </Col>
            </Row>
        </>
    )
}