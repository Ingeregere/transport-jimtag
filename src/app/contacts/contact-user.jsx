import React, {useEffect, useState} from 'react';
import '../vehicules/marques/style.css'
import AllServices from "./ServicesContact";
import {Link, useParams} from "react-router-dom";
import {isAuthenticated} from "../user-pages/session";



const Index= () => {
    const [contacts, setContacts] = useState([])
    const [contactsToken, setContactsToken] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getAllContactTransportByToken()

    },[])

    const getAllContactTransportByToken = () =>{
        AllServices.getAllContactTransportByToken(isAuthenticated()).then((response) =>{
            setContactsToken(response.data)
        })
    }



    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} un Contact </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={ isAuthenticated() && isAuthenticated()[0]==='admin' ?'/admin':'/user/contacts'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                {isAuthenticated() && isAuthenticated()[0]==='admin' ? "Tableau de bord" : "Tous les contacts"}
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Contacts</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Marque</th>
                                        <th >Catégorie</th>
                                        <th >Date de création</th>
                                        <th >Email</th>
                                        <th >Nom</th>
                                        <th >Prénom</th>
                                        <th >Message</th>
                                        <th >Mobile</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { 
                                        contactsToken.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.brand}</td>
                                                <td>{b.category}</td>
                                                <td>{b.createdAt}</td>
                                                <td>{b.email}</td>
                                                <td>{b.firstname}</td>
                                                <td>{b.lastname}</td>
                                                <td>{b.message}</td>
                                                <td>{b.mobile}</td>
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
