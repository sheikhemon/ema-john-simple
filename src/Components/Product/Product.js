import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, price, stock, seller } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-content'>
                <h4>{name}</h4>
                <p><small>Sells By: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button
                    onClick={() => props.regularHandle(props.product)}
                    className="btn-regular"
                >{cartIcon} add to cart</button>
            </div>
        </div >
    );
};

export default Product;