import React, {useEffect, useState} from 'react';
import '../HomeProduct/style.css'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ShowImageTransport from "../../Component/HomeProduct/ShowImageTransport";
import AllServices from "./Services";

const Product = () => {
    const [values, setValues] = useState([])
    const [brand, setBrand] = useState('')
    const [country, setCountry] = useState('')
    const [box, setBox] = useState('')
    const currentURL = window.location.pathname
    console.log("voici url:"+ currentURL)

    useEffect(()=>{
        let isMounted = true;

        AllServices.search(1, 1, 'manual').then((response) =>{
            if (isMounted) setValues(response.data)
        })
        return () => { isMounted = false };
    },[])


    return (
        <>
            <Container>
                <Card className={'cardMain'}>
                    <Row>
                        {values.map((product) =>(
                            <Col lg={6} md={6} sm={6} xs={12} key={product.id}>


                                <Card className={'mb-2 mt-2 mr-2 ml-2 cardProduct'}>
                                    <Row>
                                        <Col xs={12} md={6} className={'w-100'}>
                                            <ShowImageTransport item={'transport'}  method={'viewImageTransportById'} getId={product} />
                                        </Col>
                                        <Col xs={12} md={6} >
                                            <Card.Body className={'cardbodymain'}>
                                                <p></p>
                                                <h6>Marque : {product.brand} </h6>
                                                <h6>Model : {product.model}</h6>
                                                <h6>Fonction: {product.box}</h6>
                                                <h6>Année : {product.dateRegistration}</h6>
                                                <h6>Km : {product.kilometer}</h6>
                                                <Link to={`/detail/${product.id}`}>
                                                    <Button variant="primary" >En savoir plus</Button>
                                                </Link>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>


                            </Col>
                        ))}
                    </Row>
                </Card>





            </Container>


        </>
    );
};

export default Product;