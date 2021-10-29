import React, { useState, useEffect } from 'react'
import AllServices from './Services'
import ServicesCustomer from '../../app/share/ServicesCustomer/Services'
import {isAuthenticated} from "../user-pages/session";
import {Link} from "react-router-dom";

const Annonce = () => {
    const [annonces, setAnnonces] = useState([])
    const [annoncesToken, setAnnoncesToken] = useState([])
    useEffect(()=>{
        getAllAnnonces()
        getAllCommandeTransport()

    },[])

    const getAllCommandeTransport = () =>{
        ServicesCustomer.getAllCommandeTransport(isAuthenticated()[1]).then((response) =>{
            setAnnoncesToken(response.data)
        })
    }
    const getAllAnnonces = () =>{
        AllServices.getAllAnnonces().then((response) =>{
            setAnnonces(response.data)
        })
    }

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Tous les commandes </h3>
                <nav aria-label="breadcrumb">
                    <Link to={isAuthenticated() && isAuthenticated()[0]==='admin'?'/admin': '/commande-camion'}>
                        <button type="button" className="btn btn-primary btn-fw">
                            <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>
                                {isAuthenticated() && isAuthenticated()[0]==='admin'?"Tableau de bord" : "Commander un camion"}
                            </span>
                        </button>
                    </Link>
                </nav>
            </div>
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les commandes</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className={'text-align-center'}>
                                    <tr>
                                        <th> N<sup>o</sup> </th>
                                        <th> Pays de chargement </th>
                                        <th> Lieu de chargement </th>
                                        <th> Pays de livraison </th>
                                        <th> Lieu de déchargement </th>
                                        <th> Type de produits </th>
                                        <th> Tonnage </th>
                                        <th> Nombre(s) de camions </th>
                                        <th> Budget prévu </th>
                                        <th> Message </th>
                                        <th> Email </th>
                                        <th> Date de livraison </th>
                                        <th> Type de camion </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { isAuthenticated() && isAuthenticated()[0]==='admin'?(
                                        annonces.map((annonce,index) =>(
                                                <tr key={annonce.id}>
                                                    <td className="py-1"> {index+1}</td>
                                                    <td className="py-1"> {annonce.countryLoading}</td>
                                                    <td className="py-1"> {annonce.placeLoading}</td>
                                                    <td className="py-1"> {annonce.countryDelivery}</td>
                                                    <td className="py-1"> {annonce.placeDelivery}</td>
                                                    <td className="py-1"> {annonce.kindProduct}</td>
                                                    <td className="py-1"> {annonce.tonnage}</td>
                                                    <td className="py-1"> {annonce.numberTransport}</td>
                                                    <td className="py-1"> {annonce.budgetPlanned}{annonce.currency}</td>
                                                    <td className="py-1"> {annonce.message}</td>
                                                    <td className="py-1"> {annonce.email}</td>
                                                    <td className="py-1"> {annonce.dateDelivery}</td>
                                                    <td className="py-1"> {annonce.category}</td>
                                                </tr>
                                            )
                                        )
                                    ) :
                                        annoncesToken.map((annonce,index) =>(
                                        <tr key={annonce.id}>
                                        <td className="py-1"> {index+1}</td>
                                        <td className="py-1"> {annonce.countryLoading}</td>
                                        <td className="py-1"> {annonce.placeLoading}</td>
                                        <td className="py-1"> {annonce.countryDelivery}</td>
                                        <td className="py-1"> {annonce.placeDelivery}</td>
                                        <td className="py-1"> {annonce.kindProduct}</td>
                                        <td className="py-1"> {annonce.tonnage}</td>
                                        <td className="py-1"> {annonce.numberTransport}</td>
                                        <td className="py-1"> {annonce.budgetPlanned}</td>
                                        <td className="py-1"> {annonce.message}</td>
                                        <td className="py-1"> {annonce.email}</td>
                                        <td className="py-1"> {annonce.dateDelivery}</td>
                                        <td className="py-1"> {annonce.brand}</td>
                                        </tr>
                                        )
                                        )

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

export default Annonce
