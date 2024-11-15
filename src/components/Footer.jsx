import React from 'react';
import { Footer as FlowbiteFooter } from 'flowbite-react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <FlowbiteFooter container={true} className="bg-gray-900 text-white py-8">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Mioneer Logo" className="h-10 mb-4" />
            <p className="text-sm">
              7th Floor, Palm Court, Mehrauli Rd, Industrial Development Area, Sector 16, Gurugram, Haryana 122007
            </p>
            <p className="mt-4 text-sm">
              Phone: +91 7620691360 <br />
              Email: contact@mioneer.in
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              {/* <li><a href="/faq" className="hover:underline">FAQ</a></li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Services</h5>
            <ul className="text-sm space-y-2">
              <li><a href="/services#ai" className="hover:underline">AI Solutions</a></li>
              <li><a href="/services#blockchain" className="hover:underline">Blockchain Development</a></li>
              <li><a href="/services#consulting" className="hover:underline">Consulting</a></li>
              <li><a href="/services#custom-software" className="hover:underline">Custom Software</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
                <a href="https://www.instagram.com/mioneerpvtltd/" className="text-[#FF914D] hover:text-gray-400">
                    <FaInstagram size={32} />
                </a>
                <a href="https://www.linkedin.com/company/mioneer/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWIZ3vEO%2FTTWMAlvi7Ce%2BaA%3D%3D" className="hover:text-gray-400">
                    <FaLinkedinIn size={32} />
                </a>
                <a href="https://x.com/mioneerpvtltd" className="text-[#FF914D] hover:text-gray-400">
                    <FaTwitter size={32} />
                </a>
                <a href="https://www.threads.net/@mioneerpvtltd?hl=en" className="hover:text-gray-400">
                    <FaThreads size={32} />
                </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2024 Mioneer Private Limited. All rights reserved.</p>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
