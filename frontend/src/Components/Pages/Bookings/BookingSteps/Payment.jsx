import React,{useState} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ErrorToast } from '../../Includes/ErrorToast';
import axios from 'axios';
import config from '../../../../config.json';

export const Payment = (props) => {
    const [show, setShow] = useState(false);
    const [desc, setDesc] = useState("");


    function createData(guests, date, time, total) {
        return { guests, date, time, total };
    }

    const rows = [
        createData(props.guests, props.date, props.time, props.price),
    ];

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    const displayRazorpay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            // alert("Razorpay SDK failed to load. Are you online?");
            // return;
            setDesc("Razorpay SDK failed to load. Are you online?");
            return setShow(true);
        }

        // creating a new order
        const result = await axios.post("http://localhost:5000/api/payment/orders", {
            rupees: rows[0].total
        });

        if (!result) {
            // alert("Server error. Are you online?");
            // return;
            setDesc("Server error. Are you online?");
            return setShow(true);
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: config.razorpay.id, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Jalay Movaliya",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/api/payment/success", data);
                alert(result.data.msg);
                
            },
            prefill: {
                name: "Jalay Movaliya",
                email: "jalaym123@gmail.com",
                contact: "8780279011",
            },
            notes: {
                address: "Surat",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            <ErrorToast desc={desc} show={show} setShow={setShow} />
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
                    <Button variant="contained" color="success" onClick={displayRazorpay}>
                        Pay {rows[0].total}
                    </Button>
                    <Button variant="contained" color="success" LinkComponent={Link} to='/reservation/advancebooking/payment' className='ms-2'>
                        proceed to payment
                    </Button>
                </Col>
            </Row>
        </>
    )
}