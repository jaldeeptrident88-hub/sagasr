import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-[#FFFBEB] p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center border border-[#E2E8F0] hover:border-[#C09553]/50">
    <div className="flex justify-center mb-4">
        {service.icon}
    </div>
    <h3 className="text-xl font-bold text-[#1A202C] mb-2">{service.title}</h3>
    <p className="text-[#4A5568]">{service.description}</p>
  </div>
);

const ActionButtons = () => (
    <div className="text-center mt-16 space-y-4 sm:space-y-0 sm:space-x-2 md:space-x-4">
      <a href="#buy" className="inline-block px-8 py-3 bg-transparent text-[#C09553] border-2 border-[#C09553] font-bold rounded-full hover:bg-[#C09553] hover:text-white transition-all duration-300 shadow-md">Buy Property</a>
      <a href="#rent" className="inline-block px-8 py-3 bg-transparent text-[#C09553] border-2 border-[#C09553] font-bold rounded-full hover:bg-[#C09553] hover:text-white transition-all duration-300 shadow-md">Rent Property</a>
      <a href="https://wa.me/917878090904" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C09553] text-white font-bold rounded-full hover:bg-[#A87E41] transition-all duration-300 shadow-md">Sell Property</a>
      <a href="#invest" className="inline-block px-8 py-3 bg-[#C09553] text-white font-bold rounded-full hover:bg-[#A87E41] transition-all duration-300 shadow-md">Invest With Us</a>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="invest" className="py-20 bg-[#FFF7ED]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C]">Our Services</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            We offer a complete suite of real estate services to meet all your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <ActionButtons />
      </div>
    </section>
  );
};

export default Services;