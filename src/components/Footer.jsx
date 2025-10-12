
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img src={logo} alt="Mioneer Logo" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary to-brandSecondary rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <span className='gradient-text text-4xl bg-clip-text text-transparent'>
                            Mioneer
                        </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Pioneering innovation in AI, blockchain, and software development. Transforming ideas into cutting-edge digital solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-brandPrimary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>7th Floor, Palm Court, Mehrauli Rd, Industrial Development Area, Sector 16, Gurugram, Haryana 122007</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91 7620691360
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                contact@mioneer.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-bold mb-6 bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-brandPrimary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-brandPrimary transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xl font-bold mb-6 bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent">
              Our Services
            </h5>
            <ul className="space-y-3">
              {[
                { name: "AI Solutions", hash: "#ai" },
                { name: "Blockchain Development", hash: "#blockchain" },
                { name: "Tech Consulting", hash: "#consulting" },
                { name: "Custom Software", hash: "#custom-software" }
              ].map((item) => (
                <li key={item.hash}>
                  <a 
                    href={`/services${item.hash}`} 
                    className="text-gray-400 hover:text-brandSecondary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-brandSecondary transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-xl font-bold mb-6 bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent">
              Connect With Us
            </h5>
            <p className="text-gray-400 text-sm mb-6">
              Follow us on social media for the latest updates and innovations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mioneerpvtltd/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-brandPrimary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/mioneer/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWIZ3vEO%2FTTWMAlvi7Ce%2BaA%3D%3D" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-brandPrimary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a 
                href="https://x.com/mioneerpvtltd" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-brandPrimary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://www.threads.net/@mioneerpvtltd?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-brandPrimary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaThreads size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Mioneer Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-brandPrimary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-brandPrimary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;