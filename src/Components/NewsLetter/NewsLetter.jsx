import React from "react";
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="body-newsLetter">
            <div className="content">
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our newLetter and stay updated</p>
                <form action="#">
                    <input type="text" className="form-control" placeholder="Your Email id ..."/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter;