// Subscribe.js
import React from 'react';

const Subscribe = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-4">Stay updated with the latest news and offers by subscribing to our newsletter.</p>
        <div className="flex">
          <input type="email" placeholder="Enter your email" className="rounded-l-lg p-4 outline-none w-full" />
          <button className="bg-gray-600 text-white font-semibold py-4 px-6 rounded-r-lg hover:bg-gray-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
