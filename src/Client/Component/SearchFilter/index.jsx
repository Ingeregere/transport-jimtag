import React, {useEffect, useState} from 'react';
import './style.css'
import {Col, Container, Form, Row} from "react-bootstrap";
import ServiceMarque from "../../../app/vehicules/marques/ServiceMarque";
import PaysService from "../../../app/vehicules/pays/PaysService";
import CarrosseriesService from "../../../app/vehicules/carrosseries/CarrosseriesService";
import CategoryService from '../../../app/vehicules/categories/CategorieServices'
import AllServices from "./Services"

const SearchFilter = () => {
    const [brands, setBrands] = useState([])
    const [brand, setBrand] = useState('')
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('')
    const [bodyworks, setBodyWorks] = useState([])
    const [bodywork, setBodyWork] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [box, setBox] = useState('')

    useEffect(()=>{
        let isMounted = true;
        if(isMounted){
            getAllBrands()
            getAllCountries()
            getAllBodyWork()
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
    const getAllBodyWork = () =>{
        CarrosseriesService.getAllBodywork().then((response) =>{
            setBodyWorks(response.data)
        })
    }
    const clickSearch = (event) =>{
        event.preventDefault();
        AllServices.search(category,brand,country,box)
            .then(response=>{
                console.log('New search')

            })
            .catch(error =>{
                console.log('something went wrong')
            })
    }

    return (
        <>
            <Container >

                <Form className={'mt-3 mainForm'}>
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
                                    <option value={'automatic'}>Automatique</option>
                                    <option value={'manual'}>Manuel</option>
                                    <option value={'sequential'}>Sequentiel</option>
                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2} sm={6} xs={6}>
                            <Form.Group >
                                <label htmlFor="exampleSelectGender" className={'Namelabel'}>Pays</label>
                                <select className="form-control" id="exampleSelectGender">
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
                                type="button" className="btn btn-primary btn-fw btnSub">Envoyer votre recherche</button>
                        </Col>

                    </Row>

                </Form>

            </Container>


        </>
    );
};

export default SearchFilter;