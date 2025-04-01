import React, { useState } from "react";
import data from " .. /assets/products.json";

export const Home = () => {
    const [products] = useState(data);
    return (
        <div className="product-container">
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>

    );
}