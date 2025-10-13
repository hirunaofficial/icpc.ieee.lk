'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-[#FDBA11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-16 h-16 bg-[#4C82C3] rounded-2xl p-3 group-hover:bg-[#FDBA11] transition-all duration-300 shadow-lg">
              <Image
                src="/logo.png"
                alt="ICPC Sri Lanka Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain filter brightness-0 invert group-hover:filter-none group-hover:brightness-100"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-black group-hover:text-[#4C82C3] transition-colors">ICPC Sri Lanka</span>
              <span className="text-lg font-bold text-[#FDBA11]">2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
              className="inline-flex items-center gap-3 bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-2xl font-bold hover:bg-[#4C82C3] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Register Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-2xl bg-[#4C82C3] text-white hover:bg-[#FDBA11] hover:text-[#4C82C3] transition-all duration-300 shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t-4 border-[#FDBA11] py-6 shadow-lg">
            <div className="space-y-3">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/why-join" onClick={() => setIsMenuOpen(false)}>Why Join</MobileNavLink>
              <MobileNavLink href="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</MobileNavLink>
              <MobileNavLink href="/timeline" onClick={() => setIsMenuOpen(false)}>Timeline</MobileNavLink>
              <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
              <MobileNavLink href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
              <div className="px-4 pt-6">
                <Link
                  href="/registration"
                  className="block bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-2xl font-bold text-center hover:bg-[#4C82C3] hover:text-white transition-all duration-300 shadow-lg text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </div>
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
      className="px-5 py-3 rounded-xl text-black font-semibold hover:bg-[#4C82C3] hover:text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
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
      className="block px-6 py-4 mx-4 rounded-xl text-black font-semibold hover:bg-[#4C82C3] hover:text-white transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#FDBA11]"
    >
      {children}
    </Link>
  );
}
