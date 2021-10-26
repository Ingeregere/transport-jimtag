import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./GererVehiculeServices";
import {Link, useParams} from "react-router-dom";


const Marque= () => {
    const {id} = useParams()
    const [imageTransport, setimageTransport] = useState('')
    const [formaData, setFormaData] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')

    const clickSubmit = event =>{
        event.preventDefault()
        const data = {imageTransport, id}
        AllServices.postImageTransport(data)
            .then(response=>{
                console.log('New annonce is added', response.data)
                setSuccess(response.data.message)
                setError('')
                setimageTransport('')

            })
            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
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
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title">{id? "Editer" : "Ajouter"} une image du transport </h3>
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
                                    value={imageTransport}
                                    onChange={(event) => setimageTransport(event.target.files[0])}
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
