import React from 'react';
import Navigation from '../../Component/Header'
import RowCategory from "../../Component/RowCategory";
import Product from "../../Component/Divers";
import SearchFilter from "../../Component/SearchFilter";
import Footer from "../../Component/Footer";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <RowCategory />
            <SearchFilter />
            <Product />
            <Footer />

        </>
    );
};

export default HomePage;