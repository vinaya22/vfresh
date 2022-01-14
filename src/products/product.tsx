import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons'
import './products.css';

interface ProductsData {
    name: string;
    price: string;
    imageName: string;   
}

const Product = (props: ProductsData) => {
   return (
        <div className="box">
            <img src={`images/${props.imageName}.png`} alt="" />
            <h3>Fresh {props.name}</h3>
            <div className="price">{props.price}</div>
            <div className="stars">
                <FontAwesomeIcon icon={faStar} className="fa-icon"/>
                <FontAwesomeIcon icon={faStar} className="fa-icon"/>
                <FontAwesomeIcon icon={faStar} className="fa-icon"/>
                <FontAwesomeIcon icon={faStar} className="fa-icon"/>
                <FontAwesomeIcon icon={faStarHalf} className="fa-icon"/>
            </div>
            <a href="/" className="btn">Add To Cart</a>
        </div>
   )};

export default Product;