import React from "react";
import './Footer.css';
import { FaInstagram , FaPinterest, FaWhatsapp} from "react-icons/fa";
import Logo from "../Assets/logo_big.png"



const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src={Logo} alt="logo-footer" />
                <h1>SHOPPER</h1>
            </div>
            <div className="link-item">
                <ul>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="link-social">
                <ul>
                    <li><FaInstagram /></li>
                    <li><FaPinterest /></li>
                    <li><FaWhatsapp /></li>
                </ul>
            </div>
            <hr />
            <div className="copy-right">
                CopyRight @ 2023 - All Right Reserved.
            </div>
        </div>
    )
}

export default Footer;