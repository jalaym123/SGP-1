import React from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'
import { Row, Col, Container } from 'react-bootstrap';
import { DatePickerComponent } from './BookingSteps/DatePickerComponent'
import { TimePickerComponent } from './BookingSteps/TimePickerComponent'
import { GuestPicker } from './BookingSteps/GuestPicker'
import { Payment } from './BookingSteps/Payment';
import { ErrorToast } from '../Includes/ErrorToast'
import { Typography, Breadcrumbs } from '@mui/joy'
import { Link } from 'react-router-dom'

export const AdvanceBooking = (props) => {
    console.log(props)
    const [show, setShow] = React.useState(false);
    const [desc, setDesc] = React.useState("");

    const handleNext = () => {
        if (props.Step === 0) {
            props.setStep(1)
        } else if (props.Step === 1) {
            if (!props.Date) {
                setDesc("Please select a date")
                setShow(true)
                return;
            }
            props.setStep(2)
        } else if (props.Step === 2) {
            if (!props.Time) {
                setDesc("Please select a time")
                setShow(true)
                return;
            }
            props.setStep(3)
        }
    }
    const handleBack = () => {
        if (props.Step === 1) {
            props.setStep(0)
        } else if (props.Step === 2) {
            props.setStep(1)
        } else if (props.Step === 3) {
            props.setStep(2)
        }
    }

    const steps = [
        "Guests",
        "Choose Date",
        "Choose Time Slot",
        "Payment"
    ]

    return (
        <>
            <ErrorToast desc={desc} show={show} setShow={setShow} />
            <Container fluid className="px-0">
                <section className="bg-info py-3 mb-4">
                    <Container>
                        <Row>
                            <Col className="col-6 my-auto">
                                <h4>Advance Booking</h4>
                            </Col>
                            <Col className="col-6 my-auto d-flex justify-content-end">
                                <h6>
                                    <Breadcrumbs size="md">
                                        <Link to="/">Home</Link>
                                        <Link to="/reservation">Reservation</Link>
                                        <Typography>Advance Booking</Typography>
                                    </Breadcrumbs>
                                </h6>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container className="p-5">
                    <Row className='d-flex justify-content-center pb-4'>
                        <Col>
                            <Stepper activeStep={props.Step} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Col>
                    </Row>

                    {
                        props.Step === 0 && (
                            <GuestPicker maxGuests={props.restroData.maxGuests} setGuests={props.setGuests} value={props.Guests} handleNext={handleNext} />
                        )
                    }
                    {
                        props.Step === 1 && (
                            <DatePickerComponent
                                setDate={props.setDate}
                                value={props.Date}
                                handleBack={handleBack}
                                handleNext={handleNext}
                            />
                        )
                    }
                    {
                        props.Step === 2 && (
                            <TimePickerComponent
                                minTime={props.restroData.minTime}
                                maxTime={props.restroData.maxTime}
                                buttons={true}
                                setTime={props.setTime}
                                value={props.Time}
                                handleBack={handleBack}
                                handleNext={handleNext}
                            />
                        )
                    }
                    {
                        props.Step === 3 && (
                            <Payment
                                guests={props.Guests}
                                date={`${props.Date.date()}/${props.Date.month() + 1}/${props.Date.year()}`}
                                time={new Date(props.Time.toISOString()).toLocaleTimeString('en-us', { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' })}
                                price={props.restroData.reservationCharge}
                                handleBack={handleBack}
                                handleNext={handleNext}
                            />
                        )
                    }
                </Container>
            </Container>
        </>
    )
}
