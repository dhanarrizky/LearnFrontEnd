import React from "react";
import './style.css';
import Footer from "../Components/Footer/Footer";

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-content">
                <div className="row top-m5">
                    <table>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Products</td>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Total</td>
                                <td>Remove</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>Cart Totals</h1>
                        <div className="detail-price">
                            <div className="price-det">
                                <p>Subtotal </p><span>$82</span>
                            </div>
                            <div className="price-det">
                                <p>Shipping Fee </p><span>$82</span>
                            </div>
                            <div className="price-det">
                                <p>Total </p><span>$82</span>
                            </div>
                        </div>
                        <div className="button-process">
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="right-content">
                            <p>If you have a promo code, Enter it here</p>
                            <form action="#" className="form-code">
                                <input type="text" placeholder="promo code"/>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            < Footer/>
        </div>
    )
}

export default Cart;