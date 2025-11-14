import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#FFF7ED]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C]">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            We are proud to have helped so many people find their perfect place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-[#FFFBEB] p-8 rounded-lg shadow-md border border-[#E2E8F0]">
              <p className="text-[#4A5568] italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  className="w-14 h-14 rounded-full object-cover mr-4"
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-bold text-[#1A202C]">{testimonial.name}</p>
                  <p className="text-sm text-[#4A5568]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;