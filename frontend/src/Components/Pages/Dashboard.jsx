import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Breadcrumbs, Typography, List as JoyList, ListItem as JoyListItem, ListItemButton as JoyListItemButton, IconButton as JoyIconButton } from '@mui/joy'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { List, ListItem, IconButton, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { DialogBox } from './Includes/DialogBox';
import restroAPI from '../../api/restro';
import tableAPI from '../../api/tables';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Form from 'react-bootstrap/Form';
import Delete from '@mui/icons-material/Delete';
import { ErrorToast } from './Includes/ErrorToast';

export const Dashboard = (props) => {

    const [tables, setTables] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [newVal, setValue] = React.useState("");
    const [label, setLabel] = React.useState("");
    const [type, setType] = React.useState("");
    const [tableNo, setTableNo] = React.useState("");
    const [capacity, setCapacity] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [desc, setDesc] = React.useState("");

    const editMinTime = (e) => {
        setType('minTime')
        setLabel("HH:MM");
        setOpen(true);
    };
    const editMaxTime = (e) => {
        setType('maxTime');
        setLabel("HH:MM");
        setOpen(true);
    };
    const editMaxGuests = (e) => {
        setType('maxGuests')
        setLabel("Maximum Guests Capicity");
        setOpen(true);
    };
    const editLiveCharge = (e) => {
        setType('liveCharge')
        setLabel("Enter live reservation charge");
        setOpen(true);
    };
    const editReservationCharge = (e) => {
        setType('reservationCharge')
        setLabel("Enter advance booking charge");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (type === 'minTime')
            props.restroData.minTime = newVal;
        else if (type === 'maxTime')
            props.restroData.maxTime = newVal;
        else if (type === 'maxGuests')
            props.restroData.maxGuests = newVal;
        else if (type === 'liveCharge')
            props.restroData.liveBookingCharge = newVal;
        else if (type === 'reservationCharge')
            props.restroData.reservationCharge = newVal;

        props.setRestroData(props.restroData)
        restroAPI.put('/', props.restroData)
        setOpen(false);
    }
    const getTables = async () => {
        const res = await tableAPI.get('/')
        setTables(res.data)
    }

    React.useEffect(() => {
        getTables();
    }, [])

    const handleDelete = async (e) => {
        const tNo = e.currentTarget.getAttribute("table")
        tableAPI.delete(`/${tNo}`)
        setTables(tables.filter(t => t.tableNo !== tNo))
    }
    const handleFormSubmit = async (e) => {
        if (tables.map(t => t.tableNo).includes(tableNo)) {
            setDesc("Table already exists.")
            setShow(true)
        } else {
            await tableAPI.post('/', { tableNo, capacity })
            setTables([...tables, { tableNo, capacity }])
        }
    }
    return (
        <>
            <ErrorToast desc={desc} show={show} setShow={setShow} />
            <DialogBox open={open} handleClose={handleClose} setValue={setValue} handleSubmit={handleSubmit} newVal={newVal} label={label} type={type} restroData={props.restroData} />
            <Container fluid className="px-0">
                <section className="bg-info py-3 mb-4">
                    <Container>
                        <Row>
                            <Col className="col-6 my-auto">
                                <h4>Admin Dashboard</h4>
                            </Col>
                            <Col className="col-6 my-auto d-flex justify-content-end">
                                <h6>
                                    <Breadcrumbs size="md">
                                        <Link to="/">Home</Link>
                                        <Typography>Dashboard</Typography>
                                    </Breadcrumbs>
                                </h6>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Container className="col-md-6 col-lg-4">
                    <List dense={false}>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="edit" onClick={editMinTime} >
                                <EditIcon />
                            </IconButton>
                        }>
                            <ListItemText
                                primary={`Opens At: ${new Date(props.restroData.minTime).toLocaleTimeString('en-US',
                                    { timeZone: 'IST', hour12: true, hour: 'numeric', minute: 'numeric' }
                                )}`}
                            />
                        </ListItem>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="edit" onClick={editMaxTime} >
                                <EditIcon />
                            </IconButton>
                        }>
                            <ListItemText
                                primary={`Closes At: ${new Date(props.restroData.maxTime).toLocaleTimeString('en-US',
                                    { timeZone: 'IST', hour12: true, hour: 'numeric', minute: 'numeric' }
                                )}`}
                            />
                        </ListItem>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="edit" onClick={editMaxGuests} >
                                <EditIcon />
                            </IconButton>
                        }>
                            <ListItemText
                                primary={`Maximum guests capicity: ${props.restroData.maxGuests} guests`}
                            />
                        </ListItem>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="edit" onClick={editLiveCharge} >
                                <EditIcon />
                            </IconButton>
                        }>
                            <ListItemText
                                primary={`Live Reservation Charge: ${props.restroData.liveBookingCharge}`}
                            />
                        </ListItem>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="edit" onClick={editReservationCharge} >
                                <EditIcon />
                            </IconButton>
                        }>
                            <ListItemText
                                primary={`Advance Reservation Charge: ${props.restroData.reservationCharge}`}
                            />
                        </ListItem>
                        <ListItem>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Container className='text-center fw-bold'>
                                        Tables
                                    </Container>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Form className=' d-flex justify-content-around' onSubmit={handleFormSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="number" placeholder="Table Number" value={tableNo} onChange={(e) => setTableNo(parseInt(e.target.value || 0))} />
                                        </Form.Group>

                                        <Form.Group className="mb-3 ps-2" controlId="formBasicPassword">
                                            <Form.Control type="number" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(parseInt(e.target.value || 0))} />
                                        </Form.Group>
                                    </Form>
                                    <Button variant="contained" color="success" onClick={handleFormSubmit}>
                                        Add
                                    </Button>

                                    <JoyList sx={{ maxWidth: 300 }}>
                                        {
                                            tables.map((t, i) =>
                                                <JoyListItem key={i}
                                                    endAction={
                                                        <JoyIconButton aria-label="Delete" size="sm" color="danger" table={t.tableNo} onClick={handleDelete}>
                                                            <Delete />
                                                        </JoyIconButton>
                                                    }
                                                >
                                                    <JoyListItemButton>Table No. {t.tableNo}</JoyListItemButton>
                                                </JoyListItem>
                                            )
                                        }
                                    </JoyList>
                                </AccordionDetails>
                            </Accordion>
                        </ListItem>
                    </List>
                </Container>
            </Container >
        </>
    )
}
