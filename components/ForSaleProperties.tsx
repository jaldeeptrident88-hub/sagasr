import React from 'react';
import { FEATURED_PROPERTIES } from '../constants';
import PropertyCard from './PropertyCard';

const ActionButtons = () => (
    <div className="text-center mt-12 space-y-4 sm:space-y-0 sm:space-x-2 md:space-x-4">
      <a href="#buy" className="inline-block px-8 py-3 bg-[#C09553] text-white font-bold rounded-full hover:bg-[#A87E41] transition-all duration-300 shadow-md">Buy Property</a>
      <a href="#rent" className="inline-block px-8 py-3 bg-transparent text-[#C09553] border-2 border-[#C09553] font-bold rounded-full hover:bg-[#C09553] hover:text-white transition-all duration-300 shadow-md">Rent Property</a>
      <a href="https://wa.me/917878090904" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C09553] text-white font-bold rounded-full hover:bg-[#A87E41] transition-all duration-300 shadow-md">Sell Property</a>
      <a href="#invest" className="inline-block px-8 py-3 bg-transparent text-[#C09553] border-2 border-[#C09553] font-bold rounded-full hover:bg-[#C09553] hover:text-white transition-all duration-300 shadow-md">Invest With Us</a>
    </div>
);

const ForSaleProperties: React.FC = () => {
  const saleProperties = FEATURED_PROPERTIES.filter(p => p.type === 'sale');
  
  return (
    <section id="buy" className="py-20 bg-[#FFFBEB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C]">Properties for Sale</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            Explore a selection of our finest properties, handpicked for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <ActionButtons />
      </div>
    </section>
  );
};

export default ForSaleProperties;