// File: components/Header.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 text-[1rem] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cont mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="flex items-center">
            <span className={`font-bold text-xl ${scrolled ? 'text-black' : 'text-white'}`}>
              Bridge<span className="text-primaryOrange">link</span>
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}>
              <span className={`font-medium hover:text-teal-400 transition duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>
                {item}
              </span>
            </Link>
          ))}
          <motion.a 
            href="#contact"
            className="bg-primaryOrange text-white px-5 py-2 rounded  transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className={`md:hidden bg-white shadow-lg ${
        scrolled ? 'bg-white shadow-md py-3' : 'container-pattern py-6'
      }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="cont mx-auto px-4 py-4">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}>
                <span 
                  className={`block py-3 ${scrolled ? 'text-gray-800':'text-white'} hover:text-teal-500`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </span>
              </Link>
            ))}
            <a 
              href="#contact"
              className="block py-3 mt-2 bg-teal-400 text-white text-center rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
