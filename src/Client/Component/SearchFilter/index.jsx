import React, {useEffect, useState} from 'react';
import './style.css'
import {Col, Container, Form, Row,Button,Card} from "react-bootstrap";
import ServiceMarque from "../../../app/vehicules/marques/ServiceMarque";
import PaysService from "../../../app/vehicules/pays/PaysService";
import CategoryService from '../../../app/vehicules/categories/CategorieServices'
import AllServices from "./Services"
import '../HomeProduct/style.css'
import {Link} from "react-router-dom";
import ShowImageTransport from "../../Component/HomeProduct/ShowImageTransport";

const SearchFilter = () => {
    const [result, setResult] = useState([])
    const [brands, setBrands] = useState([])
    const [brand, setBrand] = useState('')
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('')
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [box, setBox] = useState('')

    useEffect(()=>{
        let isMounted = true;
        if(isMounted){
            getAllBrands()
            getAllCountries()
            getAllCategories()
        }
        return () => { isMounted = false };
    },[])
    const getAllBrands = () =>{
        ServiceMarque.getAllBrand().then((response) =>{
            setBrands(response.data)
            // console.log(response.data)
        })
    }
    const getAllCategories = () =>{
        CategoryService.getAllCategory().then((response) =>{
            setCategories(response.data)
            // console.log(response.data)
        })
    }

    const getAllCountries = () =>{
        PaysService.getAllCountry().then((response) =>{
            setCountries(response.data)
        })
    }
    const SearchData = () =>{
    //    console.log(category,brand,box,country)
    if(category && brand && box && country){
        AllServices.search({category: category || undefined, brand: brand || undefined,country: country || undefined,box: box || undefined}).then(response =>{
            setResult(response.data)
            console.log(result)
        })
    }
    }
 
    const ClickSearch = (event) =>{
        event.preventDefault();
        SearchData()
    }
 
    const searchedProducts = (results = [])=> {
        return(
            <>
            {/* <h3 className={'text-dark'}>Voici votre recherche</h3> */}
            <Card className={'cardMain'}>
                    <Row>
                        {results.map((product) =>(
                            <Col lg={6} md={6} sm={6} xs={12} key={product.id}>

                                <Card className={'mb-2 mt-2 mr-2 ml-2 cardProduct'}>
                                    <Row>
                                        <Col xs={12} md={6} className={'w-100'}>
                                            <ShowImageTransport item={product} />
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
            </>
        )
    }

    return (
        <>
            <Container >

                <Form className={'mt-3 mainForm'} onSubmit={ClickSearch}>
                    <Row >

                        <Col md={2} lg={2} sm={6} xs={6} className={'btnSubmitView'}>
                            <p className={'mb-4'}></p>
                            <button type="button" className="btn btn-primary btn-fw btnView ">Sélectionner</button>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Categorie</label>
                                <select className="form-control" id="exampleSelectGender"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option defaultValue={'Selectionner la marque'}>Categorie</option>
                                    {categories && categories.map((category, index) => (
                                        <option key={category.id} value={category.id} >{category.name}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>

                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Marque</label>
                                <select className="form-control" id="exampleSelectGender"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                >
                                    <option defaultValue={'Selectionner la marque'}>marque</option>
                                    {brands && brands.map((brand, index) => (
                                        <option key={brand.id} value={brand.id} >{brand.name}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>

                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Boite de vitesse</label>
                                <select className="form-control" id="exampleSelectGender"
                                        value={box}
                                        onChange={(e) => setBox(e.target.value)}
                                >
                                    <option defaultValue={'Boite de vitesse'}>Boite de vitesse</option>
                                    <option value={'automatique'}>automatique</option>
                                    <option value={'semi-automatique'}>semi-automatique</option>
                                    <option value={'manuelle'}>manuelle</option>
                                    <option value={'sequentielle'}>sequentielle</option>

                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Pays</label>
                                <select 
                                className="form-control" 
                                id="exampleSelectGender"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option defaultValue={'Selectionner le pays'}> pays</option>
                                    {countries && countries.map((country, index) => (
                                        <option key={country.id} value={country.id}>{country.name}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6} className={'btnSubmit'}>
                            <p className={'mb-4'}></p>
                            <button
                                type="submit" 
                                className="btn btn-primary btn-fw btnSub"
                                >
                                    Envoyer votre recherche
                            </button>
                        </Col>

                    </Row>

                </Form>
                {searchedProducts(result)}


            </Container>


        </>
    );
};

export default SearchFilter;