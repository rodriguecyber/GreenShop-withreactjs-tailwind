// SpecialOffers.js
import React from 'react';

const SpecialOffers = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add your special offers here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Offer 1</h3>
          <p className="text-gray-600 mb-4">Description of Offer 1</p>
          <p className="text-gray-700">Discount: 20%</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Offer 2</h3>
          <p className="text-gray-600 mb-4">Description of Offer 2</p>
          <p className="text-gray-700">Discount: 30%</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Offer 3</h3>
          <p className="text-gray-600 mb-4">Description of Offer 3</p>
          <p className="text-gray-700">Discount: 25%</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Offer 4</h3>
          <p className="text-gray-600 mb-4">Description of Offer 4</p>
          <p className="text-gray-700">Discount: 35%</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
