// Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add your services here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Service 1</h3>
          <p className="text-gray-600 mb-4">Description of Service 1</p>
          <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Service 2</h3>
          <p className="text-gray-600 mb-4">Description of Service 2</p>
          <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Service 3</h3>
          <p className="text-gray-600 mb-4">Description of Service 3</p>
          <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Service 4</h3>
          <p className="text-gray-600 mb-4">Description of Service 4</p>
          <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
