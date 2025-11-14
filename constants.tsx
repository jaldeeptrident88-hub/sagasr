import React from 'react';
import type { Property, Service, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#buy', label: 'Buy' },
  { href: '#rent', label: 'Rent' },
  { href: '#invest', label: 'Invest' },
  { href: '#about-us', label: 'About Us' },
];

export const PROPERTY_CATEGORIES: string[] = [
    '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK',
    'Plot', 'PG', 'Commercial'
];

export const LOCATIONS: string[] = [
    'South Bopal', 'Shela', 'Shilaj', 'Satellite', 'Jodhpur', 'Vasna',
    'Jivarajpark', 'Vejalpur', 'Gota', 'Zundal', 'Ambli', 'Sindhubhavan',
    'SG Highway', 'Prahladnagar'
];


const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#C09553]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1.258l-1-1L3 9.742A6 6 0 0115 7z" />
    </svg>
);

const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#C09553]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const HandshakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#C09553]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20l-5-5-5 5m5-5V3" />
        <path d="M12 3L2 12l10 9 10-9-10-9z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20l-5-5-5 5m5-5V3" transform="rotate(180 12 11.5)"/>
        <path d="M12 3L2 12l10 9 10-9-10-9z" transform="rotate(180 12 11.5)"/>
    </svg>
);

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#C09553]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);


export const SERVICES: Service[] = [
  {
    icon: <KeyIcon />,
    title: 'Buying a Home',
    description: 'Find your perfect home from our curated list of properties. We make the buying process seamless and stress-free.'
  },
  {
    icon: <BuildingIcon />,
    title: 'Renting a Property',
    description: 'Discover a wide range of rental properties that fit your lifestyle and budget. Our team is here to help you every step.'
  },
  {
    icon: <HandshakeIcon />,
    title: 'Selling Your Property',
    description: 'Get the best value for your property. Our marketing expertise and network ensure a quick and profitable sale.'
  },
  {
    icon: <ChartIcon />,
    title: 'Investment Opportunities',
    description: 'Explore lucrative real estate investment opportunities with high ROI. We provide expert analysis and guidance.'
  },
];

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Modern Villa in Downtown',
    address: '123 Luxury Ave, Financial District',
    price: '$2,500,000',
    type: 'sale',
    category: '5 BHK Villa',
    bedrooms: 5,
    bathrooms: 5,
    area: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Cozy Suburban Home',
    address: '456 Oak St, Shilaj',
    price: '$850,000',
    type: 'sale',
    category: '4 BHK House',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Luxury Penthouse with a View',
    address: '789 Skyview Dr, SG Highway',
    price: '$7,500/month',
    type: 'rent',
    category: '3 BHK Penthouse',
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1600585152225-358945c584cf?q=80&w=600&auto=format&fit=crop',
  },
   {
    id: 4,
    title: 'Commercial Office Space',
    address: '101 Business Blvd, Prahladnagar',
    price: '$1,200,000',
    type: 'sale',
    category: 'Commercial',
    bedrooms: 0,
    bathrooms: 2,
    area: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Stylish Urban Loft',
    address: '210 Industrial Way, Gota',
    price: '$4,200/month',
    type: 'rent',
    category: '2 BHK Loft',
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Residential Plot',
    address: '333 Greentree Ln, South Bopal',
    price: '$980,000',
    type: 'sale',
    category: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    area: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=600&auto=format&fit=crop',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with Arvind and Son Infra was a dream. They found us the perfect family home within our budget and handled everything with utmost professionalism.",
    name: 'Mehul & Rina Patel',
    role: 'Home Buyer',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    quote: "As an investor, I rely on expert advice. Their team's market insights are second to none, leading to a highly profitable investment for me.",
    name: 'Aarav Shah',
    role: 'Real Estate Investor',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    quote: "Selling our property was surprisingly easy thanks to their dedicated team. They marketed it beautifully and secured a great price for us. Highly recommended!",
    name: 'Nisha Trivedi',
    role: 'Home Seller',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];