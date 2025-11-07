import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-20 backdrop-blur-lg border-t border-white border-opacity-10 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} FilterShop. All rights reserved.</p>
        <p className="text-sm text-gray-400">Powered by Your Brand</p>
      </div>
    </footer>
  );
};

export default Footer;
