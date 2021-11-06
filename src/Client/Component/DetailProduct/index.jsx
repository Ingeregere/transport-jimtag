import React, {useEffect, useState} from 'react';
import './style.css'
import {Card, Carousel, Col, Container, Row} from "react-bootstrap";
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
    },[getTransportById])
    return (
        <>
            <Container>
                <h3 className={'text-dark'}>Voici le détail complet du véhicule</h3>
                <Card className={'cardMain'}>
                    <Row>

                            <Col lg={6} md={6} sm={6} xs={12} >
                                <Carousel>
                                    <Carousel.Item>
                                        <Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewFirstImageTransportById/${id}`} className={'imageProduct img-fluid'}  />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewSecondImageTransportById/${id}`} className={'imageProduct img-fluid'}  />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewThirdImageTransportById/${id}`} className={'imageProduct img-fluid'}  />
                                    </Carousel.Item>
                                    <Carousel.Item><Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewFourthImageTransportById/${id}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                    <Carousel.Item><Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewFifthImageTransportById/${id}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                    <Carousel.Item><Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewSixthImageTransportById/${id}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                    <Carousel.Item><Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewSeventhImageTransportById/${id}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                    <Carousel.Item><Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewEighthImageTransportById/${id}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                    <Carousel.Item><Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewNinthImageTransportById/${id}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                    <Carousel.Item><Card.Img variant="top" src= {`https://backend-e-commerce-transport.jimtag.fr/api/transport/viewTenthImageTransportById/${id}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                </Carousel>
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
                                            <h6>Etat et dimmensions des pneus : {currentproduct.pav}</h6>
                                            <h6>Charge autorisée et Volume du bac : {currentproduct.ptc}</h6>
                                            <h6>Consommation moyenne du carburant : {currentproduct.ptr}</h6>
                                            <h6 >Suspension : {currentproduct.suspension}</h6>
                                            <ModalContact />
                                            <p></p>

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