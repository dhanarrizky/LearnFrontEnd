import React from "react";
import Imgs from "../Assets/exclusive_image.png";
import './Offers.css';

const Offers = () => {
    return (
        <div className="body-Offers">
            <div className="Offers-left">
                <span>Exclusive</span>
                <div className="top">
                    <h1>Offers For You</h1>
                </div>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <div className="button-group">
                    <div className="button">
                        <button>Check Now</button>
                    </div>
                </div>
            </div>
            <div className="Offers-right">
                <img src={Imgs} alt="parfume" />
            </div>
        </div>
    )
}

export default Offers;