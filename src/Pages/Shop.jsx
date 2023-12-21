import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import './style.css';
import Collections from "../Components/Collections/Collections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
    return (
        <div className="shop">
            <Hero/>
            <Popular/>
            <Offers/>
            <Collections/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Shop;