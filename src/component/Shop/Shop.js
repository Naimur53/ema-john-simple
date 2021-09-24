import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    const [items, setItem] = useState([]);
    const handleCart = data => {
        const newCart = [...items, data];//aka tar new array hocse and extra 2 tar element bosche aktar ager array ki shilo and akhon ki ase data bortoman last bosche 
        setItem(newCart);
    }
    let totalPrice = 0;
    for (const item of items) {
        totalPrice = item.price + totalPrice;
    }
    console.log(totalPrice);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-9 border-end border-dark border-1">
                    <div className="product-container">
                        {
                            products.map(product => <Product key={product.key} products={product} click={handleCart}></Product>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cart-container ">
                        <h2>Order summary</h2>
                        <h4>Itmes order {items.length}</h4>
                        <h4>Total price {totalPrice.toFixed(2)}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;