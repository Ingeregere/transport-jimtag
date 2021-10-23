import React, {useEffect, useState} from 'react';
import './style.css'
import { Card, Col, Container, Row} from "react-bootstrap";
import ModalContact from '../Modal'
import AllServices from "./service";
import {useParams} from "react-router-dom";

const Detail = () => {
    const {id} = useParams()
    const [currentproduct,setCurrentProduct] = useState('')


    const getTransportById = () =>{
        AllServices.getTransportById(id)
            .then( current=>{
                setCurrentProduct(current.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }

    useEffect(() =>{
        getTransportById()
    },[])
    return (
        <>
            <Container>
                <h3 className={'text-dark'}>Voici la détail complet du vehicule</h3>
                <Card className={'cardMain'}>
                    <Row>

                            <Col lg={6} md={6} sm={6} xs={12} >
                                <Card className={'mb-2 mt-2 ml-2 cardProduct'}>
                                            <Card.Img variant="top" src= {`http://backend-e-commerce-transport.jimtag.fr:80/api/transport/viewImageTransportById/${id}`} className={'imageProduct img-fluid'}  />
                                </Card>
                            </Col>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <Card className={'mb-2 mt-2 ml-2 mr-2 cardProduct'}>

                                        <Card.Body>
                                            <Card.Title>Détail complet</Card.Title>
                                            <h6>Marque : {currentproduct.brand} </h6>
                                            <h6>Model : {currentproduct.model}</h6>
                                            <h6>Fonction: {currentproduct.box}</h6>
                                            <h6>Année : {currentproduct.dateRegistration}</h6>
                                            <h6>Km : {currentproduct.kilometer}</h6>
                                            <ModalContact />

                                        </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card>

            </Container>


        </>
    );
};

export default Detail;