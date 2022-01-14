import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBasket, faSearch, faCartPlus, faUser, faBars} from '@fortawesome/free-solid-svg-icons'
import './header.css';
import NavBar from './navbar/navbar'

export interface HeaderData {

}

export default function Header(props: HeaderData) {
    return (
        <header className="header">
             <a href="/" className="logo">
                <FontAwesomeIcon icon={faShoppingBasket} className="basketIcon"/>           
                vFresh
            </a>
            <NavBar/>
            <div className="icons">
                <button type="button" id="menu-btn">
                    <FontAwesomeIcon icon={faBars} className="fa-icon"/>
                </button>  
                <button type="button" id="search-btn">
                    <FontAwesomeIcon icon={faSearch} className="fa-icon"/>
                </button>        
                <button type="button">            
                    <FontAwesomeIcon icon={faCartPlus} className="fa-icon"/>
               </button>       
               <button type="button">
                   <FontAwesomeIcon icon={faUser} className="fa-icon"/>
               </button>               
            </div>
        </header>
    );
}