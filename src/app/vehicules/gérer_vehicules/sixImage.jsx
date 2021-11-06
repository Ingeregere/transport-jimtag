import React, {useEffect, useState} from 'react';
import {Alert, Button, Form, Spinner} from 'react-bootstrap';
import AllServices from "./GererVehiculeServices";
import './style.css'
import {Link, useParams} from "react-router-dom";


const Marque= () => {

    const [values,setValues] = useState({
        sixthImage: '',
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
        const value = name === 'sixthImage' ? event.target.files[0]: event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const clickSubmit = event =>{
        event.preventDefault()
        setValues({...values, error: '', loading: true})
        AllServices.postImageTransport(formData)
            .then(data =>{
                if(data.error){
                    setValues({...values,error: false})
                }
                else{
                    setValues({
                        ...values,
                        sixthImage: '',
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
                chargement...
            </Alert>
        )

    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">Voulez-vous Editer vehicule numero <span className={'numbervehicule'}>{useParams().id}</span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/gérer_vehicules'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span>  <i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>
            {
                showError()
            }
            {
                showLoading()
            }
            {
                showSuccess()
            }
            <div className="row maintable">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-inline">
                                <h4 className="card-title px-2">Image du transport</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Image</label>
                                <Form.Control
                                    type="file"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    accept={'image/*'}
                                    name={'sixthImage'}
                                    onChange={handleChange('sixthImage')}
                                />
                                <label className="sr-only" htmlFor="inlineFormInputName2">id</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="vehicule numero combien?"
                                    value={id}
                                    name={'id'}
                                    onChange={handleChange('id')}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2  btn-fw"
                                    onClick={(event) => clickSubmit(event)}
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

export default Marque
