import React, {useEffect, useState} from 'react';
import './style.css'
import AllServices from "./GererVehiculeServices";
import {Link, useParams} from "react-router-dom";



const Index= () => {
    const [current, setCurrent] = useState([])
    const {id} = useParams()

    useEffect(() => {
        let isMounted = true;
        AllServices.getVehiculeById(id).then(transport => {
            if (isMounted) setCurrent(transport.data);
        })
        return () => { isMounted = false };
    }, []);



    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les véhicules </h3>
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
                                            <tr className={'text-center'}>
                                                <td >{id}</td>
                                                <td>{current.bodywork}</td>
                                                <td>{current.box}</td>
                                                <td>{current.brand}</td>
                                                <td>{current.category}</td>
                                                <td>{current.country}</td>
                                                <td>{current.dateRegistration}</td>
                                                <td>{ current.firstImage==='Insérer une image'?
                                                    <Link to={`/vehicules/ajouter_image1/${current.id}`}>
                                                        <span className="icon-bg text-danger">
                                                            Insérer une image
                                                        </span>
                                                    </Link> :
                                                    <Link to={`/vehicules/ajouter_image1/${current.id}`}>
                                                        <span className="icon-bg "><i className="mdi mdi-image "></i>Editer1</span>
                                                    </Link>
                                                } <br/>
                                                    { current.secondImage==='Insérer une image'?
                                                        <Link to={`/vehicules/ajouter_image2/${current.id}`}>
                                                            <span className="icon-bg text-danger">
                                                                Insérer une image
                                                            </span>
                                                        </Link> :
                                                        <Link to={`/vehicules/ajouter_image2/${current.id}`}>
                                                            <span className="icon-bg "><i className="mdi mdi-image "></i>Editer2</span>
                                                        </Link>
                                                    }
                                                    <br/>
                                                    { current.thirdImage==='Insérer une image'?
                                                        <Link to={`/vehicules/ajouter_image3/${current.id}`}>
                                                            <span className="icon-bg text-danger">
                                                                Insérer une image
                                                             </span >
                                                        </Link> :
                                                        <Link to={`/vehicules/ajouter_image3/${current.id}`}>
                                                            <span className="icon-bg "><i className="mdi mdi-image "></i>Editer3</span>
                                                        </Link>
                                                    }
                                                    <br/>
                                                    { current.fourthImage==='Insérer une image'?
                                                        <Link to={`/vehicules/ajouter_image4/${current.id}`}>
                                                            <span className="icon-bg text-danger ">
                                                                Insérer une image
                                                            </span>
                                                        </Link> :
                                                        <Link to={`/vehicules/ajouter_image4/${current.id}`}>
                                                            <span className="icon-bg "><i className="mdi mdi-image "></i>Editer4</span>
                                                        </Link>
                                                    }
                                                </td>
                                                <td>{current.kilometer}</td>
                                                <td>{current.model}</td>
                                                <td>{current.pav}</td>
                                                <td>{current.power}</td>
                                                <td>{current.ptc}</td>
                                                <td>{current.ptr}</td>
                                                <td>{current.suspension}</td>
                                                {current.firstImage ==='Insérer une image'?
                                                    "Insérer une image ":
                                                    <td>
                                                        {current.status?
                                                            <Link to={`/vehicules/active-desactive/${current.id}`}>
                                                                <button type="button" className="btn btn-primary btn-fw">
                                                                    Activé
                                                                </button>
                                                            </Link>:
                                                            <Link to={`/vehicules/active-desactive/${current.id}`}>
                                                                <button type="button" className="btn btn-warning btn-fw">
                                                                    Désactivé
                                                                </button>
                                                            </Link>
                                                        }
                                                    </td>
                                                }

                                                <td>
                                                    <Link to={`/vehicules/edit-transport/${current.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg "><i className="mdi mdi-pen "></i></span>
                                                    </Link> {" "}
                                                    <Link to={`/vehicules/supprimer_transport/${current.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg text-danger"><i className="mdi mdi-delete"></i></span>
                                                    </Link>
                                                </td>

                                            </tr>
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
