import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 flex items-center justify-center">
        <div className="glass-card text-center p-12">
          <h1 className="text-9xl font-bold text-cyan-400">404</h1>
          <p className="text-3xl font-semibold text-white mt-4">Page Not Found</p>
          <p className="text-gray-200 mt-2 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
