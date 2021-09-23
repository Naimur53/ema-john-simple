import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-9">
                    <div className="product-container">
                        Prouduct area

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cart-container border-start border-dark border-1">
                        <h2>Order summary</h2>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;