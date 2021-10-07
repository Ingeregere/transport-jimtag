import React, { useState, useEffect } from 'react'
import AllServices from './Services'
import {Link} from "react-router-dom";

const Annonce = () => {
    const [annonces, setAnnonces] = useState([])
    useEffect(()=>{
        getAllAnnonces()

    },[])

    const getAllAnnonces = () =>{
        AllServices.getAllAnnonces().then((response) =>{
            setAnnonces(response.data)
        })
    }

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Tableau des annonces </h3>
                <nav aria-label="breadcrumb">
                    <Link to={'/admin'}>
                        <button type="button" className="btn btn-primary btn-fw">
                            <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>Tableau de bord</span>
                        </button>
                    </Link>
                </nav>
            </div>
            <div className="row">

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les annonces</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className={'text-align-center'}>
                                    <tr>
                                        <th> N<sup>o</sup> </th>
                                        <th> Chargement </th>
                                        <th> Déchargement </th>
                                        <th> Nombre(s) de transport </th>
                                        <th> Tonnage </th>
                                        <th> Sortes de produits </th>
                                        <th> Message </th>
                                        <th> Date de livraison </th>
                                        <th> Pays de Chargement </th>
                                        <th> Pays de livraison </th>
                                        <th> Marque </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        annonces.map((annonce,index) =>(
                                                <tr key={annonce.id}>
                                                    <td className="py-1"> {index+1}</td>
                                                    <td className="py-1"> {annonce.placeLoading}</td>
                                                    <td className="py-1"> {annonce.placeDelivery}</td>
                                                    <td className="py-1"> {annonce.numberTransport}</td>
                                                    <td className="py-1"> {annonce.tonnage}</td>
                                                    <td className="py-1"> {annonce.kindProduct}</td>
                                                    <td className="py-1"> {annonce.message}</td>
                                                    <td className="py-1"> {annonce.dateDelivery}</td>
                                                    <td className="py-1"> {annonce.countryLoading}</td>
                                                    <td className="py-1"> {annonce.countryDelivery}</td>
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
