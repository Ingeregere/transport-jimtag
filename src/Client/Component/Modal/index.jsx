import React , {useEffect, useState} from "react";
import './style.css'
import {Alert, Button, Col, Form, Modal, Row} from "react-bootstrap";
import {useParams, useHistory} from "react-router-dom";
import AllServices from "./Service";
import AllServicesCustomer from "../../../app/share/ServicesCustomer/Services";
import {isAuthenticated} from "../../../app/user-pages/session";

function ModalContact() {
    const {id} = useParams()
    const history = useHistory()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [email, setEmail] = useState('')
    const [infoUser, setInfoUser] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobile, setMobile] = useState('')
    const [transport, setTransport] = useState(id)
    const [message, setMessage] = useState('')

 useEffect(()=>{
     getAllDataUser()
 })
    const getAllDataUser = () => {
        AllServicesCustomer.getAllData(isAuthenticated()[1])
            .then(infos => {
               setInfoUser(infos.data)
            });
    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )

    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} </center></strong>
        </Alert>
    )


    const saveContact = (event) =>{
        event.preventDefault();
        const contactData = {
            email,
            firstName,
            lastName,
            message,
            mobile,
            transport
        }

        AllServices.post(contactData)
            .then(response=>{
                console.log('New annonce is added', response.data)
                setSuccess(response.data.message)
                setError('')
                setEmail('')
                setFirstName('')
                setLastName('')
                setMobile('')
                setMessage('')

            })
            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
            })


    }

    return (
        <>
                <Button variant="primary" onClick={handleShow} >
                   Nous Contacter pour ce vehicule
                </Button>


            <Modal show={show} onHide={handleClose} >

                <Modal.Header closeButton className={'modalMainHeader'}>
                    <Modal.Title className={'text-white'}>Nous Contacter pour ce vehicule</Modal.Title>
                </Modal.Header>
                <Modal.Body className={'modalMain'}>
                    {
                        showError()
                    }
                    {
                        showSuccess()
                    }

                    <Form>
                        <Row>
                            <Col md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'} >Nom</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nom"
                                        value={firstName}
                                        onChange={(e)=>setFirstName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'}>Prénom</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={lastName}
                                        onChange={(e)=>setLastName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col  md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'}>Email </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col  md={6} sm={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={'text-dark'}>Téléphone</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Téléphone"
                                        value={mobile}
                                        onChange={(e)=>setMobile(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label htmlFor="exampleTextarea1" className={'text-dark'}>Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleTextarea1"
                                        rows="4"
                                        placeholder={'Envoyer du message ...'}
                                        value={message}
                                        onChange={(e)=>setMessage(e.target.value)}
                                    ></textarea>
                                </Form.Group>
                            </Col>
                        </Row>
                        <button
                            type="submit"
                            className="btn btn-primary mr-2 btn-fw"
                            onClick={(event) => saveContact(event)}
                        >
                            Envoyer
                        </button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalContact