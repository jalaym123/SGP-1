import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../../api/users';
import { ErrorToast } from './ErrorToast';

export const LoginForm = (props) => {
    const navigate = useNavigate();
    let initState = {
        emailOruserId: "",
        password: ""
    }
    props.userInfo && (initState = props.userInfo);

    let [state, setState] = useState(initState);
        const [show, setShow] = useState(false);
        const [desc, setDesc] = useState("");

    const updateState = (obj) => {
        setState(prevState => { return { ...prevState, ...obj } });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res;
        if (e.target[2].checked)
            res = await api.get(`/${state.emailOruserId}`, {
                params: {
                    admin: e.target[2].checked
                }
            })
        else
            res = await api.get(`/${state.emailOruserId}`);


        const user = res.data.user;

        if (!user) {
            setDesc("Account with provided email or username doesn't exists, please create a new account.");
            return setShow(true);
        }
        if (state.password !== user.password) {
            setDesc("Password doesn't match, please try again");
            return setShow(true);
        }
        props.setInfo({
            email: user.email,
            mobileNumber: user.mobileNumber,
            name: user.name,
            password: user.password,
            userId: user.userId,
            admin: user.admin
        });
        navigate("/");
    }

    return (
        <>
            <ErrorToast desc={desc} show={show} setShow={setShow} />
            <Form onSubmit={handleSubmit} method="post">
                <Container className='text-center mb-3'><h3>Login</h3></Container>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" required={true} placeholder="Enter email or username" value={state.emailOruserId} onChange={(e) => updateState({ emailOruserId: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-4" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required={true} placeholder="Enter password" value={state.password} onChange={(e) => updateState({ password: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me if you are admin" />
                </Form.Group>

                <Container className='d-flex justify-content-center'>
                    <Button variant="primary" type="submit" className='px-3'>
                        {props.buttonText ? props.buttonText : "Login"}
                    </Button>
                </Container>

                <Row className='mt-4'>
                    <Col><hr className='hr-text' /></Col>
                    <Col className='col-2 text-center'>OR</Col>
                    <Col><hr className='hr-text' /></Col>
                </Row>
                <Row>
                    <Container className='text-center mt-3'>
                        Don't have an acount? <Link to="/signup">Sign Up</Link>
                    </Container>
                </Row>
            </Form>
        </>
    )
}