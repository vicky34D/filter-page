import React from 'react';

const About = () => {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">FilterShop</span>
      </h1>
      <div className="space-y-6 text-gray-200 text-lg">
        <p>
          Welcome to FilterShop, your new home for high-quality, professional video LUTs and photo filters. We were founded on the belief that premium creative tools shouldn't be complicated or inaccessible.
        </p>
        <p>
          Our mission is to empower creators of all levels—from hobbyists to professional cinematographers—to achieve their perfect creative vision with just a few clicks.
        </p>
      </div>
    </div>
  );
};

export default About;
