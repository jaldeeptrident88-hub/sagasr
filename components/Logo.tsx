import React from 'react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  const textColor = isFooter ? 'text-white' : 'text-[#1A202C]';
  const focusRingColor = isFooter ? 'focus:ring-offset-[#192A51]' : 'focus:ring-offset-white';

  return (
    <a href="#" className={`flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-[#C09553] focus:ring-offset-4 ${focusRingColor} rounded-lg`}>
      <div className="bg-[#C09553] p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
      <span className={`text-2xl font-bold ${textColor}`}>
        Arvind & Son <span className="text-[#C09553]">Infra</span>
      </span>
    </a>
  );
};

export default Logo;