import React, { useState } from "react";
import './Navbar.css';
import Shoplogo  from "../Assets/logo_big.png";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <div className="logo">
                    <img src={Shoplogo} alt="" />
                </div>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("Shop")}}><Link className="link" to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("Men")}}><Link className="link" to='men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("Women")}}><Link className="link" to='women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("Kids")}}><Link className="link" to='kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link className="link" to='login'><button>Login</button></Link>
                <i><Link className="link" to='cart'><IoCartOutline /></Link></i>
            </div>
        </div>
    )
}

export default Navbar;