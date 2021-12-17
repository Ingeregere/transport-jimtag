import React, {useEffect, useState} from 'react';
import './style.css'
import {Card, Carousel, Col, Container, Row} from "react-bootstrap";
import ModalContact from '../Modal'
import AllServices from "./service";
import {useParams} from "react-router-dom";
const API = "https://www.back-office.jimtag.fr/images/transports/"


const Detail = () => {
    const {id} = useParams()
    const [currentproduct,setCurrentProduct] = useState([])


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
        let isMounted = true;
        if(isMounted){
            getTransportById()
        }
        return () => { isMounted = false };
    },[])
    return (
        <>
            <Container>
                <h3 className={'text-dark'}>Voici les détails complet du véhicule</h3>
                <Card className={'cardMain'}>
                    <Row>
                        {currentproduct.map((transportbyid)=>(
                                    <Col lg={6} md={6} sm={6} xs={12} key={transportbyid.id}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.firstImage}`} className={'imageProduct img-fluid'}  />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.secondImage}`} className={'imageProduct img-fluid'}  />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.thirdImage}`} className={'imageProduct img-fluid'}  />
                                        </Carousel.Item>
                                        <Carousel.Item><Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.fourthImage}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                        <Carousel.Item><Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.fifthImage}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                        <Carousel.Item><Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.sixthImage}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                        <Carousel.Item><Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.thirdImage}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                        <Carousel.Item><Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.thirdImage}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                        <Carousel.Item><Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.thirdImage}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                        <Carousel.Item><Card.Img variant="top" src= {`https://www.back-office.jimtag.fr/images/transports/${transportbyid.thirdImage}`} className={'imageProduct img-fluid'} /></Carousel.Item>
                                    </Carousel>
                                </Col>
                        ))}
                        {currentproduct.map((transportbyid)=>(
                            <Col lg={6} md={6} sm={6} xs={12} key={transportbyid.id}>
                            <Card className={'mb-2 mt-2 ml-2 mr-2 cardProduct'}>
                                <Card.Body>
                                    <Card.Title>Détail complet</Card.Title>
                                    <h6>Marque : {transportbyid.brand} </h6>
                                    <h6>Model : {transportbyid.model}</h6>
                                    <h6>Fonction: {transportbyid.box}</h6>
                                    <h6>Année : {transportbyid.dateRegistration}</h6>
                                    <h6>Km : {transportbyid.kilometer}</h6>
                                    <h6>Etat et dimmensions des pneus : {transportbyid.pav}</h6>
                                    <h6>Charge autorisée et Volume du bac : {transportbyid.ptc}</h6>
                                    <h6>Consommation moyenne du carburant : {transportbyid.ptr}</h6>
                                    <h6 >Suspension : {transportbyid.suspension}</h6>
                                    <ModalContact />  
                                    <p></p>
                                </Card.Body>
                            </Card>
                         </Col>

                        ))}
                        
                    </Row>
                </Card>

            </Container>
        </>
    );
};

export default Detail;