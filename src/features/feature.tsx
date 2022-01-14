import React from "react";
import './features.css';

interface FeatureData {
    name: string;
    imageName: string;
}

const Feature = (props: FeatureData) => {
    return (
        <div className="box">
            <img src={`images/${props.imageName}.png`} alt="" />
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/" className="btn">Read More</a>
        </div>
    )
}

export default Feature;