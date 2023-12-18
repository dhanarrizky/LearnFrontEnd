import React from "react";
import Hand  from "../Assets/hand_icon.png";
import { FaArrowRight } from "react-icons/fa6";
import Imgs from "../Assets/hero_image.png";
import './Hero.css';

const Hero = () => {
    return (
        <div className="body-hero">
            <div className="hero-left">
                <span>NEW ARRIVALS ONLY</span>
                <div className="top">
                    <h1>NEW</h1>
                    <div className="hand">
                        <img src={Hand} alt="" />
                    </div>
                </div>
                <h1>COLLECTIONS FOR EVERYONE</h1>
                <div className="button-group">
                    <div className="button">
                        <button>Latest Collection</button>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={Imgs} alt="parfume" />
            </div>
        </div>
    )
}

export default Hero;