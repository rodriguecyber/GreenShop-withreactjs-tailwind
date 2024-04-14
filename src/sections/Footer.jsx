// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Main Street</p>
            <p>Kigali, Gikondo</p>
            <p>Phone: (+250) 786-605-505</p>
            <p>Email: rodrirwigara@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>&copy; 2024 GreenShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );  
};

export default Footer;
