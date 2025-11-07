import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="text-center py-20 md:py-32">
      <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
            Perfect Look
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
          Browse our next-generation collection of video LUTs and photo filters.
          Elevate your creative projects instantly.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/shop"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Go to Shop
          </Link>
          <Link
            to="/about"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
