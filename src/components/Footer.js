import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { UserIcon, BuildingOfficeIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#143C68] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="ICPC Sri Lanka Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  ICPC <span className="text-[#FDBC1D]">Sri Lanka</span>
                </h3>
                <div className="text-lg sm:text-xl font-bold text-[#FDBC1D]">2026</div>
                <div className="text-xs sm:text-sm text-white/90 font-medium mt-1">Code Beyond Borders</div>
              </div>
            </div>
            <p className="text-white/95 mb-6 sm:mb-10 leading-relaxed text-sm sm:text-base md:text-lg">
              The International Collegiate Programming Contest is coming to Sri Lanka for the first time in 2026. 
              Join us in making history as we compete on the world&apos;s biggest programming stage.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <SocialLink
                href="https://www.facebook.com/icpclk"
                icon={<FaFacebook className="w-6 h-6" />}
                label="Facebook"
              />
              <SocialLink
                href="#"
                icon={<FaInstagram className="w-6 h-6" />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<FaLinkedin className="w-6 h-6" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:contact@icpc.lk"
                icon={<FaEnvelope className="w-6 h-6" />}
                label="Email"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-[#FDBC1D]">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About ICPC</FooterLink>
              <FooterLink href="/why-join">Why Join</FooterLink>
              <FooterLink href="/timeline">Timeline</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-[#FDBC1D]">
              Resources
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <FooterLink href="/registration">Registration</FooterLink>
              <li>
                <a
                  href="https://icpc.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FDBC1D] transition-colors flex items-center gap-3 font-semibold text-lg group"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  ICPC Global
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@icpc.lk"
                  className="text-white hover:text-[#FDBC1D] transition-colors flex items-center gap-3 font-semibold text-lg group"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <FaEnvelope className="w-5 h-5" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Organizers Section */}
        <div className="border-t-4 border-[#FDBC1D] pt-8 sm:pt-12 md:pt-16 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-[#FDBC1D] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <UserIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#143C68]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#143C68] uppercase tracking-wider mb-2 sm:mb-3">ICPC Sri Lanka Director</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">Dr. Upul Jayasinghe</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-[#FDBC1D] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <BuildingOfficeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#143C68]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#143C68] uppercase tracking-wider mb-2 sm:mb-3">Organized by</div>
                  <div className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight">
                    IEEE CodeX Sri Lanka
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supported By Section */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-[#FDBC1D] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <HandRaisedIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#143C68]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#143C68] uppercase tracking-wider mb-2 sm:mb-3">Supported by</div>
                  <div className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight">
                    Electrical & Electronic Engineering Society (EEES), University of Peradeniya
                    <br />
                    Association of Computer Engineering Students (ACES), University of Peradeniya
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-[#FDBC1D] pt-8 sm:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-center md:text-left mb-4 sm:mb-6 md:mb-0">
              <p className="text-white font-bold text-base sm:text-lg md:text-xl">&copy; {new Date().getFullYear()} ICPC Sri Lanka. All rights reserved.</p>
              <p className="text-[#FDBC1D] font-bold text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3">Code Beyond Borders</p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-white bg-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl">
              <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDBC1D]" />
              <span className="font-bold text-base sm:text-lg">Sri Lanka</span>
            </div>
          </div>
          <div className="text-center border-t border-white/20 pt-6">
            <p className="text-white/90 text-sm sm:text-base">
              Developed by{' '}
              <a
                href="https://www.hiruna.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDBC1D] hover:text-[#FDBC1D] font-bold transition-colors inline-flex items-center gap-1 group"
              >
                Hiruna Gallage
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center hover:bg-[#FDBC1D] text-[#143C68] hover:text-[#143C68] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-white hover:text-[#FDBC1D] transition-colors font-semibold text-base sm:text-lg flex items-center gap-2 sm:gap-3 group"
      >
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {children}
      </Link>
    </li>
  );
}
