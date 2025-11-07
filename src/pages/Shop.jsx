import React from 'react';
import ProductCard from '../components/ProductCard';

const productData = [
  {
    id: 1,
    name: 'Cinematic LUT Pack Vol. 1',
    price: '$19.99',
    imageUrl: 'https://via.placeholder.com/400x300.png/23d5ab/FFFFFF?text=LUT+Pack+1',
    checkoutUrl: '#' 
  },
  {
    id: 2,
    name: 'Vintage Film Filters',
    price: '$14.99',
    imageUrl: 'https://via.placeholder.com/400x300.png/e73c7e/FFFFFF?text=Vintage+Filters',
    checkoutUrl: '#'
  },
  {
    id: 3,
    name: 'Neon Nights LUTs',
    price: '$24.99',
    imageUrl: 'https://via.placeholder.com/400x300.png/ee7752/FFFFFF?text=Neon+Nights',
    checkoutUrl: '#'
  },
  {
    id: 4,
    name: 'Desert Mood Filters',
    price: '$19.99',
    imageUrl: 'https://via.placeholder.com/400x300.png/23a6d5/FFFFFF?text=Desert+Mood',
    checkoutUrl: '#'
  },
];

const Shop = () => {
  return (
    <div>
      <div className="glass-card p-8 text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-white">
          The <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">Shop</span>
        </h1>
        <p className="text-lg text-gray-200">Find the perfect assets for your next project.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
