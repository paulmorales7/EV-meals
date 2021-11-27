import React from "react";
import ReactDOM from 'react-dom'
import './navbar.css';
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className='header'>
            {/* <img src="images/EV logo.JPG" class="evlogo"> */}
            <a href="#" class="logo">  logo</a>

            <nav class="navbar">
                <a href="home">Home</a>
                <a href="menu">Menu</a>
                <a href="order">Order</a>
                <a href="about">About</a>
                <a href="info">Info</a>

            </nav>

            <div class="icons">
                <div id="menu-btn" class="fas fa-bars"></div>
                <div id="search-btn" class="fas fa-search"></div>
                <div id="cart-btn" >{FaShoppingCart}</div>
            </div>

        </div>
    )
}

export default Navbar;