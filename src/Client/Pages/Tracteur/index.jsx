import React from 'react';
import Navigation from '../../Component/Header'
import RowCategory from "../../Component/RowCategory";
import Tracteur from "../../Component/Tracteur";
import SearchFilter from "../../Component/SearchFilter";
import Footer from "../../Component/Footer";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <RowCategory />
            <SearchFilter />
            <Tracteur />
            <Footer />

        </>
    );
};

export default HomePage;