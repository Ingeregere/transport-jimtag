import React from 'react';
import Navigation from '../../Component/Header'
import RowCategory from "../../Component/RowCategory";
import SearchProduct from "../../Component/SearchFilter/productSearch";
import SearchFilter from "../../Component/SearchFilter";
import Footer from "../../Component/Footer";


const HomePage = () => {
    return (
        <>
            <Navigation />
            <RowCategory />
            <SearchFilter />
            <SearchProduct />
            <Footer />

        </>
    );
};

export default HomePage;