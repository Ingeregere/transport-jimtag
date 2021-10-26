import React from 'react';
import Navigation from '../../Component/Header'
import RowCategory from "../../Component/RowCategory";
import HomeProduct from "../../Component/HomeProduct";
import SearchFilter from "../../Component/SearchFilter";
import CarrouselAds from "../../Component/Carrousel";
import Footer from "../../Component/Footer";
import ReactAppWhatsapp from "../Map";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <RowCategory />
            <SearchFilter />
            <HomeProduct />
            <CarrouselAds />
            <Footer />


        </>
    );
};

export default HomePage;