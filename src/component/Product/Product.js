import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, price, stock, img, seller, star } = props.products;
    return (
        <div className='row p-5'>
            <div className='col-md-3'>
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className='col-md-9'>
                <h4 className='fw-light text-primary'>{name}</h4>
                <p><small>By {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <p>
                    <Rating
                        initialRating={star}
                        emptySymbol="text-warning far fa-star"
                        fullSymbol="text-warning fas fa-star"
                        readonly
                    ></Rating>
                </p>
                <button onClick={() => props.click(props.products)} className='bg-warning rounded border-0 py-2 px-5'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;