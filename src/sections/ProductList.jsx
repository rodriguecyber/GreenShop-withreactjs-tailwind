
import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-5 gap-6 p-5">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
