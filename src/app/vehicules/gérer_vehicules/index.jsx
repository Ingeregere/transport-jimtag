import React, {useEffect, useState} from 'react';
import './style.css'
import AllServices from "./GererVehiculeServices";
import {Link, useParams} from "react-router-dom";



const Index= () => {
    const [transports, setTransports] = useState([])
    const [status, setStatus] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        getAllTransports()
        postImageTransport()
    },[])

    const getAllTransports = () =>{
        AllServices.getAllTransports().then((response) =>{
            setTransports(response.data)
        })
    }

    const postImageTransport = () =>{
        AllServices.postImageTransport().then((response) =>{
            setStatus(response.data)
        })
    }
    const saveStus = (event) =>{
        event.preventDefault();
        const data = { status, id}
        if(id){
            AllServices.enableDisableStatusTransport(data)
                .then(response=>{
                    console.log('status :', response.data)
                    setStatus(true)

                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les véhicules </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/attribuer_vehicules'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajoutez un véhicule</button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Véhicules</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Carrosserie</th>
                                        <th >Boite de vitesse</th>
                                        <th >Marque</th>
                                        <th >Categorie</th>
                                        <th >Pays</th>
                                        <th >date d'enregistrement</th>
                                        <th >image transp</th>
                                        <th >km</th>
                                        <th >Modèle</th>
                                        <th >Pav</th>
                                        <th >Power</th>
                                        <th >Ptc</th>
                                        <th >Ptr</th>
                                        <th >Suspension</th>
                                        <th >Status</th>
                                        <th >Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        transports.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.bodywork}</td>
                                                <td>{b.box}</td>
                                                <td>{b.brand}</td>
                                                <td>{b.category}</td>
                                                <td>{b.country}</td>
                                                <td>{b.dateRegistration}</td>
                                                <td>
                                                    <Link to={`/vehicules/ajouter_les_images/${b.id}`}>
                                                        <button type="button" className="btn btn-primary btn-fw">
                                                            Images
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td>{b.kilometer}</td>
                                                <td>{b.model}</td>
                                                <td>{b.pav}</td>
                                                <td>{b.power}</td>
                                                <td>{b.ptc}</td>
                                                <td>{b.ptr}</td>
                                                <td>{b.suspension}</td>
                                                {b.firstImage ==='Insérer une image'?
                                                    "Insérer une image ":
                                                    <td>
                                                        {b.status?
                                                            <Link to={`/vehicules/active-desactive/${b.id}`}>
                                                                <button type="button" className="btn btn-primary btn-fw">
                                                                    Activé
                                                                </button>
                                                            </Link>:
                                                            <Link to={`/vehicules/active-desactive/${b.id}`}>
                                                                <button type="button" className="btn btn-warning btn-fw">
                                                                    Désactivé
                                                                </button>
                                                            </Link>
                                                        }
                                                    </td>
                                                }

                                                <td>
                                                    <Link to={`/vehicules/edit-transport/${b.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg "><i className="mdi mdi-pen "></i></span>
                                                    </Link> {" "}
                                                    <Link to={`/vehicules/supprimer_transport/${b.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg text-danger"><i className="mdi mdi-delete"></i></span>
                                                    </Link>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Index
