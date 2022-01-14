import React from "react";
import Feature from './feature';
import './features.css';

const Features = () => {
    return (
        <section className="section" id="features">
            <h1 className="heading">Our <span>Features</span></h1>
            <div className="box-container">
                <Feature name="Fresh and Organic" imageName="fresh"/>
                <Feature name="Fast And Free Delivery" imageName="delivery"/>
                <Feature name="Easy Payment" imageName="payment"/>                
            </div>
        </section>
    );
};

export default Features;