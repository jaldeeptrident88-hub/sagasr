import React from 'react';
import { LOCATIONS, PROPERTY_CATEGORIES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Find Your Dream Property With Us
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Arvind and Son Infra - Your trusted partner in navigating the world of real estate. Excellence, integrity, and client satisfaction are at our core.
        </p>
        <div className="bg-[#FFFBEB]/90 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-2xl max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="md:col-span-1">
              <select className="w-full p-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md text-[#1A202C] focus:ring-2 focus:ring-[#C09553] focus:outline-none">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
                <option>Invest</option>
              </select>
            </div>
             <div className="md:col-span-1">
              <select defaultValue="" className="w-full p-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md text-[#1A202C] focus:ring-2 focus:ring-[#C09553] focus:outline-none">
                <option value="" disabled>Location</option>
                {LOCATIONS.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
             <div className="md:col-span-1">
              <select defaultValue="" className="w-full p-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md text-[#1A202C] focus:ring-2 focus:ring-[#C09553] focus:outline-none">
                <option value="" disabled>Property Type</option>
                {PROPERTY_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full p-3 bg-[#C09553] text-white font-bold rounded-md hover:bg-[#A87E41] transition-all duration-300 shadow-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;