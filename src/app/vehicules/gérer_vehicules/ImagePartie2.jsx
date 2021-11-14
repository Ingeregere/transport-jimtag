import React, {useEffect, useState} from 'react';
import {Alert, Button, Form, Spinner} from 'react-bootstrap';
import AllServices from "./GererVehiculeServices";
import './style.css'
import {Link, useParams} from "react-router-dom";


const Marque= () => {

    const [values,setValues] = useState({
        firstImage: '',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        fifthImage: '',
        sixthImage: '',
        seventhImage: '',
        eighthImage: '',
        ninthImage: '',
        tenthImage: '',
        id: '',
        error: '',
        loading: false,
        success: '',
        formData: ''
    })
    const {
        id,
        loading,
        formData,
        error,
        success
    } = values

    useEffect(()=>{
        setValues({...values, formData: new FormData()})
    }, [])

    const handleChange = name => event =>{
        const value = name ===  'id'? event.target.value: event.target.files[0]
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const clickSubmit = event =>{
        event.preventDefault()
        setValues({...values, error: '', loading:true})
        AllServices.postImageTransportPart2(formData)
            .then(data =>{
                if(data.error){
                    setValues({...values,error: false})
                }
                else{
                    setValues({
                        ...values,
                        firstImage: '',
                        secondImage: '',
                        thirdImage: '',
                        fourthImage: '',
                        fifthImage: '',
                        sixthImage: '',
                        seventhImage: '',
                        eighthImage: '',
                        ninthImage: '',
                        tenthImage: '',
                        id: '',
                        loading:false,
                        success: data.data.message,
                    })
                }
            })
    }

    const showError = () => (
        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const showSuccess = () => (
        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} </center> </strong>
        </Alert>
    )
    const showLoading=()=>(
        loading && (
            <Alert variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <center>chargement...</center>

            </Alert>
        )

    )
    return (
        <div>
            <span>{showError()}</span>
            <span>{showLoading()}</span>
            <span>{showSuccess()}</span>

            <div className="page-header mainheader">
                <h3 className="page-title"> les images du véhicule numéro <span className={'text-success'}>{useParams().id}</span> </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/gérer_vehicules'}>
                            <button type="button" className="btn btn-primary btn-fw">Voir tout</button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row">

                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="forms-sample">
                                <Form.Group>
                                    <h4 className="card-title px-2">Image 6</h4>
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                    <Form.Control
                                        type="file"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        accept={'image/*'}
                                        name={'sixthImage'}
                                        onChange={handleChange('sixthImage')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <h4 className="card-title px-2">Image 8</h4>
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                    <Form.Control
                                        type="file"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        accept={'image/*'}
                                        name={'eighthImage'}
                                        onChange={handleChange('eighthImage')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <h4 className="card-title px-2">Image 10</h4>
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                    <Form.Control
                                        type="file"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        accept={'image/*'}
                                        name={'tenthImage'}
                                        onChange={handleChange('tenthImage')}
                                    />
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
                                    <h4 className="card-title px-2">Image 7</h4>
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                    <Form.Control
                                        type="file"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        accept={'image/*'}
                                        name={'seventhImage'}
                                        onChange={handleChange('seventhImage')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <h4 className="card-title px-2">Image 9</h4>
                                    <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                    <Form.Control
                                        type="file"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        accept={'image/*'}
                                        name={'ninthImage'}
                                        onChange={handleChange('ninthImage')}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <h4 className="card-title px-2">Id</h4>
                                    <Form.Control
                                        type="text"
                                        className="form-control mb-2 mr-sm-2"
                                        id="inlineFormInputName2"
                                        placeholder="vehicule numero combien?"
                                        value={id}
                                        name={'id'}
                                        onChange={handleChange('id')}
                                    />
                                </Form.Group>
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => clickSubmit(event)}
                                >
                                    Enregistrer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Marque