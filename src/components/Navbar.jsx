import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Set toggle Menu
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

    // Nav items array
    const navItems = [
        { link: "Home", path: "/" },
        { link: "Services", path: "/services" },
        { link: "About", path: "/about" },
        // { link: "Samarth", path: "/samarth" },
        { link: "Contact", path: "/contact" },
        // { link: "FAQ", path: "/faq" },
    ];

    return (
        <header className={`w-full bg-white ${isSticky ? 'shadow-lg' : 'md:bg-transparent'} fixed top-0 left-0 right-0 z-50`}>
            <nav>
                <div className='flex justify-between items-center px-6 py-4'>
                    <Link to="/" className='text-2xl font-medium flex items-center space-x-1'>
                        <img src={logo} alt="Mioneer Logo" className='w-9' />
                        <span className='text-[#263238]'>Mioneer</span>
                    </Link>

                    {/* Nav items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => (
                                <Link to={path} key={path} className='block text-base text-gray-900 hover:text-brandSecondary first:font-medium'>
                                    {link}
                                </Link>
                            ))
                        }
                    </ul>

                    {/* Hamburger menu for small devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-gray-900 hover:text-brandSecondary focus:outline-none'>
                            {/* Hamburger Icon */}
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dropdown Menu for small devices */}
                {isMenuOpen && (
                    <ul className='md:hidden flex flex-col items-center space-y-4 px-6 py-4 bg-brandSecondary shadow-md'>
                        {
                            navItems.map(({ link, path }) => (
                                <Link to={path} key={path} className='block text-base text-white hover:text-gray-200'>
                                    {link}
                                </Link>
                            ))
                        }
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
