import React from "react";
import Product from "./product";
import './products.css';

const Products = () => {
    return (
        <section className="section" id="products">           
            <h1 className="heading">
                Our <span>Products</span>
            </h1>
            <div className="box-container">
                <Product name="Tomotos" price="$5.99/ -- $10.99/" imageName="tomoto"/>
                <Product name="Carrots" price="$3.99/ -- $6.99/" imageName="carrot"/>
                <Product name="Radish" price="$1.99/ -- $3.99/" imageName="raddish"/>                
            </div>            
        </section>
    )
};

export default Products;