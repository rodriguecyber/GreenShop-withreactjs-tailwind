// Product.js
import React from 'react';

const Product = ({ name, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default Product;
