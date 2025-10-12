'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
      {/* Logo and Title */}
      <Link href="/" className="flex items-center space-x-3 group">
        <div className="bg-[#4C82C3] p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
          <FaCode className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-[#4C82C3]">ICPC Sri Lanka</span>
          <span className="text-xs text-gray-600">2026</span>
        </div>
      </Link>          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/why-join">Why Join</NavLink>
            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/timeline">Timeline</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/registration"
              className="hidden md:inline-flex items-center gap-2 bg-[#FDBA11] text-[#4C82C3] px-6 py-2.5 rounded-lg font-bold hover:bg-[#FDBA11]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Register Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-gray-200 mt-2 pt-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/why-join" onClick={() => setIsMenuOpen(false)}>Why Join</MobileNavLink>
            <MobileNavLink href="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</MobileNavLink>
            <MobileNavLink href="/timeline" onClick={() => setIsMenuOpen(false)}>Timeline</MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
            <Link
              href="/registration"
              className="block bg-[#FDBA11] text-[#4C82C3] px-6 py-3 rounded-lg font-bold text-center mt-4 hover:bg-[#FDBA11]/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#4C82C3] hover:bg-[#4C82C3]/10 transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#4C82C3] hover:bg-[#4C82C3]/10 transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
}
