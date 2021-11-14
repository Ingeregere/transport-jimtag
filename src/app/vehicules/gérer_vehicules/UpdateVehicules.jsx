import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import ServiceMarque from "../marques/ServiceMarque";
import CarrosseriesService from "../carrosseries/CarrosseriesService";
import ModèleService from "../modèles/ModèleService";
import PaysService from "../pays/PaysService";
import TransportServices from "../attribuer_vehicule/Services";
import AllServicesTransport from "./GererVehiculeServices";
import {Link,useParams} from "react-router-dom";
import AllServices from "../marques/ServiceMarque";



const Transport = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [brands, setBrands] = useState([])
    const [countries, setCountries] = useState([])
    const [categories, setCategories] = useState([])
    const [models, setModels] = useState([])
    const [bodyworks, setBodyWorks] = useState([])
    const [bodywork, setBodyWork] = useState('')
    const [box, setBox] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [country, setCountry] = useState('')
    const [dateRegistration, setDateRegistration] = useState('')
    const [kilometer, setKilometer] = useState('')
    const [model, setModel] = useState('')
    const [pav, setPav] = useState('')
    const [power, setPower] = useState('')
    const [ptc, setPtc] = useState('')
    const [ptr, setPtr] = useState('')
    const [suspension, setSuspension] = useState('')
    const {id} = useParams()

    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Tous les champs sont recommandés!</center></strong>
        </Alert>
    )
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success}</center> </strong>
        </Alert>
    )


    useEffect(()=>{
        getAllBrands()
        getAllCountries()
        getAllBodyWork()
        getAllCategory()
        getAllModel()
        UpdateBrandById()

    },[])

    const UpdateBrandById = () =>{
        if(id){
            AllServicesTransport.getVehiculeById(id)
                .then(current =>{
                    setBodyWork(current.data.bodywork)
                    setBox(current.data.box)
                    setBrand(current.data.brand)
                    setPav(current.data.pav)
                    setCategory(current.data.category)
                    setCountry(current.data.country)
                    setPtc(current.data.ptc)
                    setPtr(current.data.ptr)
                    setDateRegistration(current.data.dateRegistration)
                    setKilometer(current.data.kilometer)
                    setModel(current.data.model)
                    setPower(current.data.power)
                    setSuspension(current.data.suspension)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    const getAllBrands = () =>{
        ServiceMarque.getAllBrand().then((response) =>{
            setBrands(response.data)
            // console.log(response.data)
        })
    }
    const getAllModel = () =>{
        ModèleService.getAllModel().then((response) =>{
            setModels(response.data)
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
    const getAllCategory = () =>{
        TransportServices.getAllCategoryTransport().then((response) =>{
            setCategories(response.data)
        })
    }

    const saveAttribuer = (event) =>{
        event.preventDefault();
        const newTransport = {
            bodywork,
            box,
            brand,
            category,
            country,
            dateRegistration,
            kilometer,
            model,
            pav,
            power,
            ptc,
            ptr,
            suspension,
            id
        }
        AllServicesTransport.updateTransport(newTransport)
            .then(response=>{
                setBodyWork('')
                setBox('')
                setCategory('')
                setCountry('')
                setDateRegistration('')
                setKilometer('')
                setModel('')
                setPav('')
                setPower('')
                setPtc('')
                setPtr('')
                setSuspension('')
                setSuccess(response.data.message)
                setError('')
            })

            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
            })

    }

    return (
        <div>


            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} une marque </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/gérer_vehicules'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <span>{showError()}</span>
                    <span>{showSuccess()}</span>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <form className="forms-sample">
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="brand" >Marque</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner marque</option>
                                        {brands && brands.map((brand, index) => (
                                            <option key={brand.id} value={brand.id}>{brand.brand}</option>
                                        ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="brand" >Carrosserie</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={bodywork}
                                        onChange={(e) => setBodyWork(e.target.value)}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner carrosserie</option>
                                        {bodyworks && bodyworks.map((bodywork, index) => (
                                            <option key={bodywork.id} value={bodywork.id} >{bodywork.bodywork}</option>
                                        ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="brand" >Boite de vitesse</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={box}
                                        onChange={(e) => setBox(e.target.value)}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner boite de vitesse</option>
                                        <option value={'automatic'}>Automatique</option>
                                        <option value={'manual'}>Manuel</option>
                                        <option value={'sequential'}>Sequentiel</option>

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="numberTransport">Nombre de Kilomètres</label>
                                    <Form.Control
                                        type="number"
                                        className="form-control"
                                        id="exampleInputEmail3"
                                        placeholder="Nombre de kilomètre"
                                        value={kilometer}
                                        onChange={(e) => setKilometer(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="tonnage">Puissance</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Puissance"
                                        value={power}
                                        onChange={(e) => setPower(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="countryLoading" >Pays </label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner pays</option>
                                        {countries && countries.map((country, index) => (
                                            <option key={country.id} value={country.id}>{country.country}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="countryLoading" >Model </label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner model</option>
                                        {models && models.map((model, index) => (
                                            <option key={model.id} value={model.id}>{model.model}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">

                            <form className="forms-sample">

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="countryDelivery" >Category</label>
                                    <select
                                        className="form-control"
                                        id="exampleSelectGender"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option defaultValue={'Selectionner la marque'}>Selectionner categorie</option>
                                        {categories && categories.map((categorie, index) => (
                                            <option key={categorie.id} value={categorie.id}>{categorie.category}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeLoading">Etat et dimmensions des pneus</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Etat et dimmensions des pneus"
                                        value={pav}
                                        onChange={(e) => setPav(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeDelivery">Charge autorisée et Volume du bac</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Charge autorisée et Volume du bac"
                                        value={ptc}
                                        onChange={(e) => setPtc(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeDelivery">Consommation moyenne du carburant</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Consommation moyenne du carburant"
                                        value={ptr}
                                        onChange={(e) => setPtr(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="placeDelivery">Suspension</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Suspension"
                                        value={suspension}
                                        onChange={(e) => setSuspension(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="dateDelivery">Date de Registration</label>
                                    <Form.Control
                                        type="date"
                                        className="form-control"
                                        id="exampleInputCity1"
                                        placeholder="date de livraison"
                                        value={dateRegistration}
                                        onChange={(e) => setDateRegistration(e.target.value)}
                                    />
                                </Form.Group>

                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => saveAttribuer(event)}
                                >
                                    Envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transport
