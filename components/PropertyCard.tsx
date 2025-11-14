import React from 'react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const BedIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
);

const BathIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11h14v10H5zM2 7h20v4H2zm11 11V7" />
    </svg>
);

const AreaIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4" />
    </svg>
);

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { title, address, price, type, category, bedrooms, bathrooms, area, imageUrl } = property;

  return (
    <div className="bg-[#FFFBEB] rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border border-[#E2E8F0]">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
        <span className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold text-white rounded-full ${type === 'sale' ? 'bg-[#C09553]' : 'bg-teal-600'}`}>
          For {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-[#C09553] mb-1">{category}</p>
        <h3 className="text-xl font-bold text-[#1A202C] mb-1 truncate">{title}</h3>
        <p className="text-[#4A5568] text-sm mb-4 truncate">{address}</p>
        <p className="text-2xl font-extrabold text-[#C09553] mb-4">{price}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-600 border-t border-[#E2E8F0] pt-4">
          {bedrooms > 0 && (
            <div className="flex items-center">
              <BedIcon />
              <span>{bedrooms} Beds</span>
            </div>
          )}
          {bathrooms > 0 && (
            <div className="flex items-center">
              <BathIcon />
              <span>{bathrooms} Baths</span>
            </div>
          )}
          {area > 0 && (
            <div className="flex items-center">
              <AreaIcon />
              <span>{area} sqft</span>
            </div>
          )}
        </div>
        <button className="mt-6 w-full py-2 bg-transparent text-[#C09553] font-semibold rounded-md border border-[#C09553] hover:bg-[#C09553] hover:text-white transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;