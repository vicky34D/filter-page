import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, checkoutUrl } = product;

  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/50 transform hover:-translate-y-1">
      
      <div className="w-full h-48 bg-gray-900 bg-opacity-50 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-lg font-semibold text-cyan-300 mb-4">{price}</p>
        
        <a 
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
