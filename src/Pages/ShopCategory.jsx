import React, { useContext, useState } from "react";
import './style.css';
import Footer from '../Components/Footer/Footer';
import { ShopContext } from "../Context/ShopContext/ShopContext";
import Item from "../Components/Item/Item";
import { IoIosArrowDropdown } from "react-icons/io";
import { redirect } from "react-router-dom";
// import { Link } from "react-router-dom";

const ShopCategory = (props) => {
    const [selectionOption, setSelectionOption] = useState('');

    console.log('selected option : ', selectionOption);

    const handleSelectionOption = (event) => {
        setSelectionOption(event.target.value);
        redirect('/',selectionOption);
    }

    const {all_product} = useContext(ShopContext);
    return (
        <div className="shop">
            <img src={props.banner} alt="banner" />
            <div className="body-of-category">
                <div className="shop-category">
                    <p>
                        <span>Show 1-12</span> out of 36 product
                    </p>
                    <div className="shop-category-sort">
                        <select value={selectionOption} onChange={handleSelectionOption}>
                            <option value="">
                                <div>
                                    drop down
                                    <IoIosArrowDropdown />
                                </div>
                            </option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="Kid">Kids</option>
                        </select>
                    </div>
                </div>
                <div className="shopcategory-product">
                    {all_product.map((item, i)=> {
                        if(props.category===item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ShopCategory;