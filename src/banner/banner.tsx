import React from "react";
import './banner.css'

const Banner = () => {
    return (
        <section className="banner" id="banner" style={{background: "url(../images/banner.png) center center / cover no-repeat"}}>
            <div className="content">
                <h2>Fresh and <span>Organic</span> Products</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button>Shop Now</button>
            </div>
        </section>
    );
};

export default Banner;
