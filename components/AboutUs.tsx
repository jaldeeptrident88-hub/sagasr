import React from 'react';

const ActionButtons = () => (
    <div className="text-center mt-12 space-y-4 sm:space-y-0 sm:space-x-2 md:space-x-4">
      <a href="#buy" className="inline-block px-8 py-3 bg-[#C09553] text-white font-bold rounded-full hover:bg-[#A87E41] transition-all duration-300 shadow-md">Buy Property</a>
      <a href="#rent" className="inline-block px-8 py-3 bg-transparent text-[#C09553] border-2 border-[#C09553] font-bold rounded-full hover:bg-[#C09553] hover:text-white transition-all duration-300 shadow-md">Rent Property</a>
      <a href="https://wa.me/917878090904" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C09553] text-white font-bold rounded-full hover:bg-[#A87E41] transition-all duration-300 shadow-md">Sell Property</a>
      <a href="#invest" className="inline-block px-8 py-3 bg-transparent text-[#C09553] border-2 border-[#C09553] font-bold rounded-full hover:bg-[#C09553] hover:text-white transition-all duration-300 shadow-md">Invest With Us</a>
    </div>
);

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-[#FFFBEB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-bold uppercase text-[#C09553]">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] mt-2 mb-6">
              25+ Years of Trust in Real Estate
            </h2>
            <p className="text-[#4A5568] mb-4">
              For over a quarter of a century, Arvind and Son Infra has been a cornerstone of the real estate landscape, built on a foundation of unwavering trust and integrity. We pride ourselves on our deep-rooted commitment to client success, ensuring every transaction is handled with unparalleled professionalism and care.
            </p>
            <p className="text-[#4A5568] mb-4">
              Our legacy is defined by the lasting relationships we build. We exclusively partner with the most reputable developers and verified property owners to guarantee quality, transparency, and security in every listing you see.
            </p>
             <p className="text-[#4A5568]">
              Our expert team navigates the complexities of the market to offer you curated opportunities and personalized guidance. We are not just agents; we are your dedicated partners in building a prosperous future through real estate.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1579953923363-22283a3a411a?q=80&w=600&auto=format&fit=crop" 
              alt="Modern architecture representing trust and experience"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
        <ActionButtons />
      </div>
    </section>
  );
};

export default AboutUs;