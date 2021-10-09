import React from 'react';
import Navigation from '../../Component/Header'
import Footer from "../../Component/Footer";
import Registrer from "../../../app/user-pages/Register";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <Registrer />
            <Footer />

        </>
    );
};

export default HomePage;