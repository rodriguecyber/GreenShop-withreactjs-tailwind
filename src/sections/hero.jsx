// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to YourShop</h1>
      <p className="text-lg mb-8">The best place to find what you need</p>
      <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
