import React, {useEffect, useState} from 'react';
import { UncontrolledAlert } from "reactstrap";
import whatsappimage from "../../../assets/images/whatsappimage.png";
import AllServices from './Service'
import "react-whatsapp-chat-widget/index.css";
import {Link} from "react-router-dom";
import './style.css'
import { Alert } from 'react-bootstrap';

const Footer = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')



    const SendNewsLetter = (event) =>{
        event.preventDefault();
        const newsletter = { email }

            AllServices.postNewsletter(newsletter)
                .then(response=>{
                    console.log('New newsletter is posted', response.data)
                    setSuccess(response.data.message)
                    setError('')
                    setEmail('')

                })
                .catch(error =>{
                    console.log('something went wrong', error)
                    setError('true')
                    setSuccess('')
                })



    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>vérifier correctement votre email</center></strong>
        </Alert>
    )
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '} </center> </strong>
        </Alert>
    )

  
    return (
        <>
            <div className="">
                <footer className="py-4 bgfooter ">
                    <div className="row mx-4">
                        <div className="sectionFooter offset-1 col-md-2 col-sm-12 mb-2">
                            <h5 className={'text-white'}>Besoin d'aide?</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 "><Link to={"/nous-contact"} className="nav-link p-0 text-dark all_link">Nous contacter</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/nos-services"} className="nav-link p-0 text-dark all_link">Nos services</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/F.A.Q"} className="nav-link p-0 text-dark all_link">F.A.Q</Link></li>

                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-12 offset-1 mb-2 sectionFooter">
                            <h5 className={'text-white'}>Garantie de confiance</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={'/service-client'} className="nav-link p-0 text-dark all_link">Service client 24/24H</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/satisfaction"} className="nav-link p-0 text-dark all_link">99% de satisfaction</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/paiement-sécurisé"} className="nav-link p-0 text-dark all_link">Paiement Sécurisé</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 offset-1 sectionFooter col-sm-12">
                                {showSuccess() }
                                {showError()}
                            <form>
                               
                                <div className="d-flex w-100 gap-2 mb-4">
                                    <input 
                                    id="newsletter1" 
                                    type="calendar"
                                    className="form-control" 
                                    placeholder="Email address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className="btn btn-dark ml-2" type="submit" onClick={(event) => SendNewsLetter(event)}>S'abonner</button>
                                </div>
                                <h5 className={'text-white'}>S'abonner pour recevoir dernier annonce</h5>
                            </form>
                        </div>
                    </div>

                    <div className="border-top text-center">
                        <p className={'designed text-dark mt-5'} >
                            &copy; {new Date().getFullYear()} JimTag All rights reserved.
                        </p>

                    </div>

                </footer>
                <div className={'whatsapp_float'}>
                    <a href={'https://wa.me/25762243766'} target={'_blank'}>
                        <img src={whatsappimage}/>
                    </a>
                </div>
            </div>


        </>
    );
};

export default Footer;