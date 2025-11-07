import React from 'react';

const Contact = () => {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Get In Touch</h1>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-lg bg-black bg-opacity-30 border border-white border-opacity-20 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg bg-black bg-opacity-30 border border-white border-opacity-20 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            className="w-full px-4 py-2 rounded-lg bg-black bg-opacity-30 border border-white border-opacity-20 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
