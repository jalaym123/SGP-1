import React from "react"
import { Row, Col, Container, Button } from 'react-bootstrap'
import { Breadcrumbs, Typography } from '@mui/joy';
import { Link } from 'react-router-dom'
import { Table, TableCell, TableHead, TableRow, TableBody, rows } from "@mui/material"


export const MyBooking = (props) => {
    function createData(guests, date, time) {
        return { guests, date, time };
    }


    const rows = [
        createData(props.guests, props.date, props.time),
    ];


    return (
        <>
            <section className="bg-info py-3 mb-4">
                <Container>
                    <Row>
                        <Col className="col-6 my-auto">
                            <h4>MyBooking</h4>
                        </Col>
                        <Col className="col-6 my-auto d-flex justify-content-end">
                            <h6>
                                <Breadcrumbs size="md">
                                    <Link to="/">Home</Link>
                                    <Typography>MyBooking</Typography>
                                </Breadcrumbs>
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container className="mt-5 mb-5">
                <Row    >
                    <Col>
                        <Table aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Guests</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, i) => (
                                    <TableRow key={i} >
                                        <TableCell component="th" scope="row">{props.guests} </TableCell>
                                        <TableCell align="right">{row.date} </TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                        <TableCell align="right"> <Button variant="primary" type="submit">
                                            Cancelled
                                        </Button></TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}