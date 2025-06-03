'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect to enhance glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/15 dark:bg-black/25' : 'bg-transparent'} backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/5`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-[#9fdfff] bg-clip-text text-transparent drop-shadow-sm">LocalAI Team</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/#services" className="text-white/90 hover:text-[#9fdfff] px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 relative group">
                Services
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#9fdfff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/#how-it-works" className="text-white/90 hover:text-[#9fdfff] px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 relative group">
                How It Works
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#9fdfff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/#case-studies" className="text-white/90 hover:text-[#9fdfff] px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 relative group">
                Case Studies
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#9fdfff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 shadow-lg shadow-black/5">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-white hover:text-[#9fdfff] hover:bg-white/10 transition-colors duration-300 backdrop-blur-md border border-white/10"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-black/40 backdrop-blur-xl border-t border-white/10 px-2 pt-4 pb-5 space-y-3 sm:px-3 animate-fadeIn">
            <Link href="/#services" className="block text-white/90 hover:text-[#9fdfff] px-4 py-3 text-base font-medium transition-colors duration-300">
              Services
            </Link>
            <Link href="/#how-it-works" className="block text-white/90 hover:text-[#9fdfff] px-4 py-3 text-base font-medium transition-colors duration-300">
              How It Works
            </Link>
            <Link href="/#case-studies" className="block text-white/90 hover:text-[#9fdfff] px-4 py-3 text-base font-medium transition-colors duration-300">
              Case Studies
            </Link>
            <Link href="/#contact" className="block bg-white/10 hover:bg-white/20 text-white border border-white/20 mx-4 mt-4 px-5 py-3 text-base font-medium rounded-full transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
