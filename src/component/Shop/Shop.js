import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setDisplay(data);
            });
    }, []);
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storedCart = [];
            for (const key in saveCart) {
                const addCart = products.find(product => product.key === key);
                console.log(addCart);
                if (addCart) {
                    const quantity = saveCart[key];
                    addCart.quantity = quantity;

                }
                storedCart.push(addCart);
            }
            setItem(storedCart);
        }
    }, [products])
    const [items, setItem] = useState([]);
    const handleCart = data => {
        const newCart = [...items, data];//aka tar new array hocse and extra 2 tar element bosche aktar ager array ki shilo and akhon ki ase data bortoman last bosche 
        setItem(newCart);
        addToDb(data.key);
    }
    let totalQuantity = 0
    let totalPrice = 0;
    for (const item of items) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        totalPrice = item.price * item.quantity + totalPrice;
        totalQuantity = totalQuantity + item.quantity;
    }
    let shiping = totalPrice > 0 ? 20 : 0;
    const handleSearch = event => {
        const text = (event.target.value);
        const matchedItem = products.filter(product => product.name.toLowerCase().includes(text.toLowerCase()));
        console.log(matchedItem.length);
        setDisplay(matchedItem);


    }
    return (
        <>
            <section className='search-section text-center py-3'>
                <input onChange={handleSearch} placeholder='type here to search ' className='w-75 ' type="text" />
            </section>
            <div className='container'>

                <div className="row">
                    <div className="col-md-9 border-end border-dark border-1">
                        <div className="product-container">
                            {
                                display.map(product => <Product key={product.key} products={product} click={handleCart}></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cart-container ">
                            {console.log(items)}
                            <h2>Order summary</h2>
                            <h4>Itmes order {totalQuantity}</h4>
                            <h4>Total price {totalPrice.toFixed(2)}</h4>
                            <h4>shiping : {shiping}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Shop;