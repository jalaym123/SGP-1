import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Select, Option } from '@mui/joy'
import { Button } from '@mui/material';
import { ErrorToast } from '../../Includes/ErrorToast'
import tableAPI from '../../../../api/tables';

export const GuestPicker = ({ value, setGuests, handleNext, maxGuests, setTables }) => {
    const [show, setShow] = React.useState(false);
    const [desc, setDesc] = React.useState("");

    const guests = [];
    for (let i = 0; i < maxGuests; i++)
        guests.push(i + 1)
    const handleChange = async (event, newValue) => {
        const tables = await tableAPI.get(`/guests/${newValue}`);
        if (tables.data.length === 0) {
            setDesc("No table available with your required guest capacity.")
            setShow(true)
            return;
        }
        setTables(tables.data)
        setGuests(newValue)
    };

    return (
        <>
            <ErrorToast desc={desc} show={show} setShow={setShow} />
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
