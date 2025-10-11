import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Services", path: "/services" },
        { link: "About", path: "/about" },
        { link: "Contact", path: "/contact" },
    ];

    return (
        <header className={`w-full ${isSticky ? 'bg-gray-900/95 shadow-2xl' : 'bg-gray-900/80'} backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50 transition-all duration-300`}>
            <nav>
                <div className='flex justify-between items-center px-6 lg:px-14 py-5'>
                    <Link to="/" className='text-2xl font-display font-bold flex items-center space-x-3 group'>
                        <div className='relative'>
                            <img src={logo} alt="Mioneer Logo" className='w-11 h-11 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6' />
                            <div className='absolute inset-0 bg-gradient-to-br from-brandPrimary to-brandSecondary rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300'></div>
                        </div>
                        <span className='gradient-text text-4xl bg-clip-text text-transparent'>
                            Mioneer
                        </span>
                    </Link>

                    {/* Nav items for large devices */}
                    <ul className='md:flex space-x-10 hidden items-center'>
                        {navItems.map(({ link, path }) => (
                            <Link 
                                to={path} 
                                key={path} 
                                className='relative text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 group'
                            >
                                {link}
                                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brandPrimary to-brandSecondary transition-all duration-300 group-hover:w-full'></span>
                            </Link>
                        ))}
                        {/* <Link to="/contact">
                            <button className='ml-4 px-6 py-2.5 bg-gradient-to-r from-brandPrimary to-brandSecondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brandPrimary/50 transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-300'>
                                Get Started
                            </button>
                        </Link> */}
                    </ul>

                    {/* Hamburger menu for small devices */}
                    <div className='md:hidden'>
                        <button 
                            onClick={toggleMenu} 
                            className='text-brandPrimary hover:text-brandSecondary focus:outline-none transition-colors duration-300 p-2'
                        >
                            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dropdown Menu for small devices */}
                {isMenuOpen && (
                    <ul className='md:hidden flex flex-col items-center space-y-6 px-6 py-8 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-t border-gray-700/50'>
                        {navItems.map(({ link, path }) => (
                            <Link 
                                to={path} 
                                key={path} 
                                className='block text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                        {/* <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            <button className='px-8 py-3 bg-gradient-to-r from-brandPrimary to-brandSecondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brandPrimary/50 transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-300'>
                                Get Started
                            </button>
                        </Link> */}
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Navbar;