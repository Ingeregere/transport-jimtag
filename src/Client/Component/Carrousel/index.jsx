import React, {useEffect, useState} from 'react';
import './style.css'
import {Card, Carousel, Col, Container, Row} from "react-bootstrap";
import AllServices from "../../../app/image-slide/Service";
import ShowCarousel from "./ShowCarousel";

const CarrouselAds = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [carousels, setCarousels] = useState([])
    const [articles, setArticles] = useState([])


    useEffect(()=>{
        getAllCarousel()
        getAllArticle()
        

    },[])

    const getAllCarousel = () =>{
        AllServices.getAllCarousel().then((response) =>{
            setCarousels(response.data)
        })
    }
    const getAllArticle = () =>{
        AllServices.getAllArticles().then((response) =>{
            setArticles(response.data)
        })
    }

    return (
        <Container>
            <h3 className={'text-dark'}>Nos publicités</h3>
            <Card className={'mb-4'}>
                <Row>
                    <Col xs={12} md={6} sm={12}>
                        <Carousel activeIndex={index} onSelect={handleSelect} className={'imagecarrousel'} >

                            {
                                carousels.map((carrousel,index) => (
                                    <Carousel.Item key={index}>
                                        <ShowCarousel
                                            item={carrousel}
                                            className="d-block w-100 imagecarrousel"
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>

                            <Col xs={12} md={6} sm={12} >
                                {
                                    articles.map((art,index) =>(
                                <Card className="bg-dark text-white" key={index}>
                                   <ShowCarousel
                                            item={art}
                                            className="d-block w-100 imagecarrousel"
                                        />
                                </Card>
                                    ))
                                }
                            </Col>


                </Row>
            </Card>
        </Container>
    );
}
export default CarrouselAds;