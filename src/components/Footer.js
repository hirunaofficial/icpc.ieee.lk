import Link from 'next/link';
import { FaCode, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#4C82C3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#FDBA11] p-3 rounded-lg">
                <FaCode className="w-8 h-8 text-[#4C82C3]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  ICPC <span className="text-[#FDBA11]">Sri Lanka</span>
                </h3>
                <div className="text-sm text-gray-200">2026</div>
              </div>
            </div>
            <p className="text-gray-100 mb-6 leading-relaxed">
              The International Collegiate Programming Contest is coming to Sri Lanka for the first time in 2026. 
              Join us in making history as we compete on the world&apos;s biggest programming stage.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.facebook.com/icpclk"
                icon={<FaFacebook className="w-6 h-6" />}
                label="Facebook"
                color="hover:bg-[#FDBA11]"
              />
              <SocialLink
                href="#"
                icon={<FaInstagram className="w-6 h-6" />}
                label="Instagram"
                color="hover:bg-[#FDBA11]"
              />
              <SocialLink
                href="#"
                icon={<FaLinkedin className="w-6 h-6" />}
                label="LinkedIn"
                color="hover:bg-[#B22E1B]"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#FDBA11]"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About ICPC</FooterLink>
              <FooterLink href="/why-join">Why Join</FooterLink>
              <FooterLink href="/how-it-works">How It Works</FooterLink>
              <FooterLink href="/timeline">Timeline</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#FDBA11]"></div>
              Resources
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/registration">Registration</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <li>
                <a
                  href="https://icpc.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FDBA11] transition-colors flex items-center gap-2"
                >
                  ICPC Global
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Organizers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
              <UserIcon className="w-6 h-6 text-[#FDBA11] flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-gray-400 mb-1">ICPC Sri Lanka Director</div>
                <div className="font-semibold text-white">Dr. Upul Jayasinghe</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
              <MapPinIcon className="w-6 h-6 text-[#FDBA11] flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-gray-400 mb-1">Organized by</div>
                <div className="font-semibold text-white">
                  IEEE Young Professionals Sri Lanka
                  <br />
                  IEEE CodeX Sri Lanka
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-center text-gray-100 text-sm">
            <p>&copy; {new Date().getFullYear()} ICPC Sri Lanka. All rights reserved.</p>
            <p className="mt-2">Code Beyond Borders</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center ${color} transition-all duration-300 hover:scale-110`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-100 hover:text-[#FDBA11] transition-colors flex items-center gap-2 group">
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {children}
      </Link>
    </li>
  );
}
