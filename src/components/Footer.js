import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#143C68] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative w-20 h-20 bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="ICPC Sri Lanka Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white">
                  ICPC <span className="text-[#FDBC1D]">Sri Lanka</span>
                </h3>
                <div className="text-xl font-bold text-[#FDBC1D]">2026</div>
                <div className="text-sm text-white/90 font-medium mt-1">Code Beyond Borders</div>
              </div>
            </div>
            <p className="text-white/95 mb-10 leading-relaxed text-lg">
              The International Collegiate Programming Contest is coming to Sri Lanka for the first time in 2026. 
              Join us in making history as we compete on the world&apos;s biggest programming stage.
            </p>
            <div className="flex space-x-4">
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
            <h4 className="text-2xl font-bold mb-8 text-[#FDBC1D]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About ICPC</FooterLink>
              <FooterLink href="/why-join">Why Join</FooterLink>
              <FooterLink href="/how-it-works">How It Works</FooterLink>
              <FooterLink href="/timeline">Timeline</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-[#FDBC1D]">
              Resources
            </h4>
            <ul className="space-y-4">
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
        <div className="border-t-4 border-[#FDBC1D] pt-16 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="bg-[#FDBC1D] p-4 rounded-2xl">
                  <UserIcon className="w-10 h-10 text-[#143C68]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#143C68] uppercase tracking-wider mb-3">ICPC Sri Lanka Director</div>
                  <div className="text-2xl font-bold text-black">Dr. Upul Jayasinghe</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="bg-[#FDBC1D] p-4 rounded-2xl">
                  <BuildingOfficeIcon className="w-10 h-10 text-[#143C68]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#143C68] uppercase tracking-wider mb-3">Organized by</div>
                  <div className="text-xl font-bold text-black leading-tight">
                    IEEE Young Professionals Sri Lanka
                    <br />
                    IEEE CodeX Sri Lanka
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-[#FDBC1D] pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-white font-bold text-xl">&copy; {new Date().getFullYear()} ICPC Sri Lanka. All rights reserved.</p>
              <p className="text-[#FDBC1D] font-bold text-2xl mt-3">Code Beyond Borders</p>
            </div>
            <div className="flex items-center space-x-3 text-white bg-white/10 px-6 py-3 rounded-2xl">
              <FaMapMarkerAlt className="w-6 h-6 text-[#FDBC1D]" />
              <span className="font-bold text-lg">Sri Lanka</span>
            </div>
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
      className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center hover:bg-[#FDBC1D] text-[#143C68] hover:text-[#143C68] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
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
        className="text-white hover:text-[#FDBC1D] transition-colors font-semibold text-lg flex items-center gap-3 group"
      >
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {children}
      </Link>
    </li>
  );
}
