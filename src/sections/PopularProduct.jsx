// PopularProducts.js
import React from 'react';

const PopularProducts = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add your popular products here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Product 1</h3>
          <p className="text-gray-600 mb-4">Description of Product 1</p>
          <p className="text-gray-700">Price: $20</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Product 2</h3>
          <p className="text-gray-600 mb-4">Description of Product 2</p>
          <p className="text-gray-700">Price: $30</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Product 3</h3>
          <p className="text-gray-600 mb-4">Description of Product 3</p>
          <p className="text-gray-700">Price: $25</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Product 4</h3>
          <p className="text-gray-600 mb-4">Description of Product 4</p>
          <p className="text-gray-700">Price: $35</p>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
