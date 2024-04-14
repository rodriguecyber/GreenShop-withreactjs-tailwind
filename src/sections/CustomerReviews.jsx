// CustomerReviews.js
import React from 'react';

const CustomerReviews = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."</p>
          <p className="text-gray-500">Rated: 4/5</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600 mb-4">"Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."</p>
          <p className="text-gray-500">Rated: 5/5</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Michael Johnson</h3>
          <p className="text-gray-600 mb-4">"Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."</p>
          <p className="text-gray-500">Rated: 3/5</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
