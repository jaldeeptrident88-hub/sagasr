
import React from 'react';
import Logo from './Logo';
import DownloadProject from './DownloadProject';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#192A51] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo isFooter={true} />
            </div>
            <p className="text-slate-400 text-sm">
              Your premier destination for all things real estate. We are committed to providing exceptional service and building lasting relationships.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1">&#x1F4CD;</span>
                <span>3064 T.R.P.MALL RAJYESH CITY BRTS MAIN ROAD CENTER BOPAL AHMEDABAD 380058</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#x2709;</span>
                <span>contact@arvindsoninfra.com</span>
              </li>
              <li className="flex items-center">
                 <span className="mr-2">&#x1F4DE;</span>
                 <span>+91 78780 90904</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <DownloadProject />
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Arvind and Son Infra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;