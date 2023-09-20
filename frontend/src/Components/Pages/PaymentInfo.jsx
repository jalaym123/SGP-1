import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import { Row, Col, Container } from 'react-bootstrap'
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';



export const PaymentInfo = (props) => {
    const [googlepay, setGooglepay] = useState(false);
    const [debit, setDebit] = useState(false);
    const [upi, setUpi] = useState(false);

    function onchange(e) {
        // setDebit(e.target.value)
        // setGooglepay(e.target.value)
        setGooglepay(false);
        setDebit(false);
        setUpi(false);
        if (e.target.value === "debit") {
            setDebit(e.target.value);
            // console.log("debit");
        }
        if (e.target.value === "googlePay") {
            setGooglepay(e.target.value);

            // console.log("google pay");
        }
        if (e.target.value === "upi") {
            setUpi(e.target.value);

            // console.log("google pay");
        }
    }
    function creatdata(total) {
        return { total };
    }
    const rows = [
        creatdata(props.price),
    ];
    return (
        <>
            <Container>
                <Row >
                    <Col className='mx-4'>
                        <Row>
                            <FormControl>
                                <FormLabel className=' text-dark text-center pt-3' id="demo-radio-buttons-group-label">Payment Mathod</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel value="debit" control={<Radio />} label="Debit or Credit Card" onChange={onchange} />
                                    <FormControlLabel value="googlePay" control={<Radio />} label="Google Pay" onChange={onchange} />
                                    <FormControlLabel value="upi" control={<Radio />} label="UPI ID" onChange={onchange} />
                                </RadioGroup>
                            </FormControl>
                        </Row>
                        {
                            googlepay &&
                            <Row className='mt-5 d-flex justify-content-center'>
                                <Col className='col-md-7 col-lg-5 col-sm-12 d-flex justify-content-center'>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Charge</TableCell>
                                                    <TableCell align="right">Total</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row, i) => (
                                                    <TableRow key={i} >
                                                        <TableCell component="th" scope="row">Your Total Charge </TableCell>
                                                        <TableCell align="right">₹{props.restroData.reservationCharge}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Col>
                            </Row>
                        }
                        {
                            upi &&
                            <TextField className='w-50 mt-3' fullWidth label="Enetr your UPI ID" id="fullWidth" />
                        }
                        {
                            debit &&
                            <>
                                <Row className='pb-3'>
                                    <TextField className='w-25' id="outlined-basic" label="First Name" variant="outlined" />
                                    <TextField className='w-25 mx-3' id="outlined-basic" label="Last Name" variant="outlined" />
                                </Row>
                                <Row className='pb-3'>
                                    <TextField className='w-25' id="outlined-basic" label="Credit-Card Number Name" variant="outlined" />
                                    <TextField className='w-25 mx-3' id="outlined-basic" label="Security Codde Name" variant="outlined" />
                                </Row>
                                <Row>
                                    <TextField className='w-25' id="outlined-basic" label="Card Expiration Name" variant="outlined" />
                                </Row>
                            </>

                        }
                    </Col>
                </Row>

            </Container>
            <Row className='mt-5 pb-3 d-flex justify-content-center'>
                <Col className='col-md-7 col-lg-5 col-sm-12 d-flex justify-content-around'>
                    <Button variant="contained" color="success" LinkComponent={Link} to="/reservation/advancebooking">
                        back
                    </Button>
                    <Button variant="contained" color="success" onClick={props.handleNext} className='ms-2'>
                        Payment
                    </Button>
                </Col>
            </Row>
        </>
    )
}