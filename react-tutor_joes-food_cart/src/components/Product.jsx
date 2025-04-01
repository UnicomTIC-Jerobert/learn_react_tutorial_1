/* eslint-disable react/prop-types */
import React from "react";

export const Product = ({ product }) => {
    const name = product.name.length > 21 ? product.name.substring(0, 20) + " .. " : product.name;

    const addCart = () => {
        setCart([...cart, product]);
    };
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== product.id));
    }

    return (
        <div className="product">
            <div className="img">
                <img src="" alt="" />
            </div>
            <div className="details">
                <h3>{product.name}</h3>
                <p>Price Rs:{product.amt} </p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}