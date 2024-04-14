import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">YourShop</h1>
          <ul className="ml-8 flex space-x-4 md:space-x-8">
            <li className="ml-4"><a href="/">Home</a></li>
            <li className="ml-4"><a href="/shop">Shop</a></li>
            <li className="ml-4"><a href="#">About</a></li>
            <li className="ml-4"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
