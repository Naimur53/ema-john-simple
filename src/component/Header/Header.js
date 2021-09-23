import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header '>
            <img src={logo} alt="" />
            <nav>
                <div className="container">
                    <a href="/shop">Shop</a>
                    <a href="/order">Orders Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </div>
            </nav>
            <section className='search-section py-3'>
                <input placeholder='type here to search ' className='w-75 ' type="text" />
            </section>
        </div>
    );
};

export default Header;