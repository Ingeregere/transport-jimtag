import React, {useEffect, useState} from 'react';
import './style.css'
import Tracteur from '../../../assets/Icones/1 Tracteur.jpg'
import Benne from '../../../assets/Icones/2 Benne.jpg'
import Semi from '../../../assets/Icones/3 Semi.jpg'
import Pelle from '../../../assets/Icones/4 Pelle.jpg'
import Pieces from '../../../assets/Icones/5 Pièces et divers.jpg'
import {Col, Container, Row, Card} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import NavLink from "react-bootstrap/NavLink";
import ShowImage from "../../../app/vehicules/categories/showImage";
import AllServices from "../../../app/vehicules/categories/CategorieServices";

const RowCategory = () => {
    const [Allccategories, setCategories] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        let isMounted = true;
        AllServices.getAllCategory().then((response) =>{
            if (isMounted) setCategories(response.data)
        })
        return () => { isMounted = false };
    },[])

    return (
        <Container>
            <Row className={'mainRowCategory'}>
                <Col className={'RowCard'}>
                    <NavLink as={Link} to={'/tracteurs'} >
                        <Card className="text-white border-white shadow ">
                            <Card.Img src={Tracteur} className={'imagecarrousel'}/>
                            <Card.Footer className=" footerCard " >
                                <p className={'NameCategorie'}>Tracteurs</p>
                            </Card.Footer>
                        </Card>
                    </NavLink>
                </Col>


                <Col className={'RowCard'} >
                    <NavLink as={Link} to={'/bennes'} >
                        <Card className="text-white border-white shadow ">
                            <Card.Img src={Benne} className={'imagecarrousel'}/>
                            <Card.Footer className=" footerCard">
                                <p className={'NameCategorie'}>Bennes</p>
                            </Card.Footer>
                        </Card>
                    </NavLink>
                </Col>
                <Col className={'RowCard'}  >
                    <NavLink as={Link} to={'/semis'} >
                        <Card className="text-white border-white shadow ">
                            <Card.Img src={Semi} className={'imagecarrousel'}/>
                            <Card.Footer className=" footerCard " >
                                <p className={'NameCategorie'}>Semis</p>
                            </Card.Footer>
                        </Card>
                    </NavLink>
                </Col>
                <Col className={'RowCard'}  >
                    <NavLink as={Link} to={'/pelles'} >
                        <Card className="text-white border-white shadow ">
                            <Card.Img src={Pelle} className={'imagecarrousel'}/>
                            <Card.Footer className=" footerCard " >
                                <p className={'NameCategorie'}>Pelles</p>
                            </Card.Footer>
                        </Card>
                    </NavLink>
                </Col>
                <Col className={'RowCard'}  >
                    <NavLink as={Link} to={'/pièces et divers'} >
                        <Card className="text-white border-white shadow ">
                            <Card.Img src={Pieces} className={'imagecarrousel'}/>
                            <Card.Footer className=" footerCard " >
                                <p className={'NameCategorie'}>Pièces et divers</p>
                            </Card.Footer>
                        </Card>
                    </NavLink>
                </Col>

            </Row>
        </Container>
    );
};

export default RowCategory;