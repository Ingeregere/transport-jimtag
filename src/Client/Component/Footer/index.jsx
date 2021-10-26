import React from 'react';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import {Link} from "react-router-dom";
import './style.css'

const Footer = () => {
    return (
        <>
            <div className="">
                <footer className="py-4 bgfooter ">
                    <div className="row mx-4">
                        <div className="sectionFooter offset-1 col-md-2 col-sm-12 mb-2">
                            <h5 className={'text-white'}>Besoin d'aide?</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 "><Link to={"/nous-contact"} className="nav-link p-0 text-dark all_link">Nous contacter</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link">Nos services</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/"} className="nav-link p-0 text-dark all_link">F.A.Q</Link></li>

                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-12 offset-1 mb-2 sectionFooter">
                            <h5 className={'text-white'}>Garantie de confiance</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={'/'} className="nav-link p-0 text-dark all_link">Service client 24/24H</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-dark all_link">99% de satisfaction</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-dark all_link">Paiement Sécurisé</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 offset-1 sectionFooter col-sm-12">
                            <form>

                                <div className="d-flex w-100 gap-2 mb-4">
                                    <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-dark ml-2" type="button">S'abonner</button>
                                </div>
                                <h5 className={'text-white'}>S'abonner pour recevoir dernier annonce</h5>
                            </form>
                        </div>
                    </div>

                    <div className="border-top text-center">
                        <p className={'designed text-dark mt-5'} > designed by Burundi-jobs &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
                    </div>

                </footer>
            </div>
            <WhatsAppWidget
                phoneNo="+25762243766"
                position="right"
                widgetWidth="300px"
                widgetWidthMobile="260px"
                autoOpen={true}
                autoOpenTimer={30000}
                messageBox={true}
                messageBoxTxt="Salut l'équipe JimTag"
                iconSize="40"
                iconColor="white"
                iconBgColor="#5ce1e6"
                headerIcon="/logo.png"
                headerIconColor="pink"
                headerTxtColor="black"
                headerBgColor="#5ce1e6"
                headerTitle="JimTag"
                headerCaption="en ligne"
                bodyBgColor="#bbb"
                chatPersonName="JimTag"
                chatMessage={<>Salut 👋 <br /><br /> Comment puis-je t'aider?</>}
                footerBgColor="#000"
                btnBgColor="#5ce1e6"
                btnTxtColor="black"
            />

        </>
    );
};

export default Footer;