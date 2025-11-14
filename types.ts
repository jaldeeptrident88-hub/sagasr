// Fix: Import ReactNode to resolve the "Cannot find namespace 'React'" error.
import type { ReactNode } from 'react';

export interface Property {
  id: number;
  title: string;
  address: string;
  price: string;
  type: 'sale' | 'rent';
  category: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface NavLink {
    href: string;
    label: string;
}