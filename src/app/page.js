'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { TrophyIcon, UserGroupIcon, GlobeAltIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaCode, FaChartLine, FaAward, FaClock, FaUsers, FaLaptopCode } from 'react-icons/fa';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '54766698584_76f21665d5_k.jpg',
    '54765742742_4627f90b74_o.jpg',
    '54766489486_8a75aab91f_o.jpg',
    '54766880654_d0cf0b7e86_o.jpg',
    '54782043998_27cb7988d2_k.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Slider */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={`/gallery/${image}`}
                alt="ICPC Event"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Solid Color Overlay */}
          <div className="absolute inset-0 bg-[#4C82C3]/90"></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 100px)',
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              {/* ICPC Logo Placeholder */}
              <div className="mb-8 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                  <FaCode className="w-20 h-20 text-[#FDBA11]" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight">
                ICPC Sri Lanka <span className="text-[#FDBA11]">2026</span>
              </h1>
              <div className="h-1 w-32 bg-[#FDBA11] mx-auto mb-8"></div>
              <p className="text-2xl md:text-4xl mb-6 text-[#FDBA11] font-semibold tracking-wide">
                Code Beyond Borders
              </p>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
                For the first time ever, Sri Lanka enters the world&apos;s biggest stage of competitive programming. 
                Join us in making history.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/registration"
                  className="group relative inline-flex items-center gap-2 bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#FDBA11]/90 transition-all duration-300 shadow-2xl hover:shadow-[#FDBA11]/50 transform hover:scale-105"
                >
                  <span>Register Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                >
                  Learn More
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-4xl font-bold text-[#FDBA11]">100+</div>
                  <div className="text-sm md:text-base text-gray-300">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-4xl font-bold text-[#FDBA11]">3,000+</div>
                  <div className="text-sm md:text-base text-gray-300">Universities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-4xl font-bold text-[#FDBA11]">60,000+</div>
                  <div className="text-sm md:text-base text-gray-300">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Global Stage</h2>
            <div className="h-1 w-24 bg-[#FDBA11] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">The world&apos;s premier programming competition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <StatCard 
              icon={<GlobeAltIcon className="w-12 h-12" />}
              number="100+" 
              label="Countries Participating"
              color="bg-[#4C82C3]"
            />
            <StatCard 
              icon={<AcademicCapIcon className="w-12 h-12" />}
              number="3,000+" 
              label="Universities Worldwide"
              color="bg-[#4C82C3]"
            />
            <StatCard 
              icon={<UserGroupIcon className="w-12 h-12" />}
              number="60,000+" 
              label="Student Competitors"
              color="bg-[#4C82C3]"
            />
          </div>
          
          <div className="text-center">
            <div className="bg-[#4C82C3]/10 rounded-2xl p-8 inline-block border-2 border-[#4C82C3]">
              <p className="text-2xl font-semibold text-[#4C82C3] flex items-center gap-3">
                <TrophyIcon className="w-8 h-8 text-[#FDBA11]" />
                One Goal: Push the limits of human creativity and teamwork
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is ICPC Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What is ICPC?
              </h2>
              <div className="h-1 w-24 bg-[#FDBA11] mb-6"></div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                The International Collegiate Programming Contest (ICPC) isn&apos;t just another coding challenge; 
                it&apos;s <strong>the Olympics of programming</strong> — the oldest, largest, and most prestigious 
                competitive programming contest in the world.
              </p>
              <div className="space-y-4 mb-8">
                <FeaturePoint 
                  icon={<FaCode className="w-6 h-6 text-[#4C82C3]" />}
                  text="World's most prestigious programming competition"
                />
                <FeaturePoint 
                  icon={<FaChartLine className="w-6 h-6 text-[#4C82C3]" />}
                  text="Recognized by top tech companies globally"
                />
                <FeaturePoint 
                  icon={<FaAward className="w-6 h-6 text-[#4C82C3]" />}
                  text="Gateway to ICPC World Finals"
                />
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#4C82C3] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4C82C3]/90 transition-colors"
              >
                Learn More About ICPC
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-[#4C82C3] rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Sri Lanka Joins the Map</h3>
                <p className="text-lg mb-6 text-gray-100">
                  In 2025, <span className="text-[#FDBA11] font-bold">Sri Lanka makes history</span> as 
                  we host our first-ever ICPC contest. This is your chance to be a pioneer.
                </p>
                <div className="space-y-4">
                  <PathStep number="1" text="Compete in Sri Lanka National Contest" />
                  <PathStep number="2" text="Advance to ICPC Asia West Regional" />
                  <PathStep number="3" text="Qualify for ICPC World Finals" />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FDBA11] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#B22E1B] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-[#4C82C3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why You Should Join?</h2>
            <div className="h-1 w-24 bg-[#FDBA11] mx-auto mb-6"></div>
            <p className="text-xl text-gray-200">Transform your skills, career, and future</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<TrophyIcon className="w-12 h-12" />}
              title="Compete with the Best"
              description="Challenge yourself against the sharpest minds in Sri Lanka and beyond"
            />
            <BenefitCard
              icon={<FaLaptopCode className="w-12 h-12" />}
              title="Build Lasting Skills"
              description="Master algorithms, problem-solving, and teamwork that last a lifetime"
            />
            <BenefitCard
              icon={<GlobeAltIcon className="w-12 h-12" />}
              title="International Recognition"
              description="Earn national recognition and qualify for ICPC Asia West Regional"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/why-join"
              className="inline-flex items-center gap-2 bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#FDBA11]/90 transition-colors shadow-lg"
            >
              Discover All Benefits
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="h-1 w-24 bg-[#FDBA11] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Understanding the contest format</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard 
              icon={<FaUsers className="w-8 h-8 text-[#4C82C3]" />}
              title="Team Size" 
              value="3 Students" 
              subtitle="from the same university" 
            />
            <InfoCard 
              icon={<FaClock className="w-8 h-8 text-[#4C82C3]" />}
              title="Duration" 
              value="5 Hours" 
              subtitle="of intense competition" 
            />
            <InfoCard 
              icon={<FaCode className="w-8 h-8 text-[#4C82C3]" />}
              title="Problems" 
              value="5-10" 
              subtitle="algorithmic challenges" 
            />
            <InfoCard 
              icon={<FaLaptopCode className="w-8 h-8 text-[#4C82C3]" />}
              title="Format" 
              value="Offline" 
              subtitle="pure skill, no internet" 
            />
          </div>
          
          <div className="text-center mb-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 bg-[#4C82C3] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4C82C3]/90 transition-colors"
            >
              View Complete Details
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Timeline</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Your journey to ICPC World Finals</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4C82C3]"></div>
            
            <div className="space-y-12">
              <TimelineCard
                date="September 2025"
                title="Registrations Open"
                align="left"
                color="bg-[#4C82C3]"
              />
              <TimelineCard
                date="October–November 2025"
                title="Online Round (Optional)"
                align="right"
                color="bg-[#4C82C3]"
              />
              <TimelineCard
                date="December 2025 – January 2026"
                title="Sri Lanka Onsite Regional"
                align="left"
                color="bg-[#FDBA11]"
                highlight={true}
              />
              <TimelineCard
                date="March 2026"
                title="ICPC Asia West"
                align="right"
                color="bg-[#B22E1B]"
              />
              <TimelineCard
                date="August 2026"
                title="ICPC World Finals"
                align="left"
                color="bg-red-500"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 bg-[#4C82C3] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4C82C3]/90 transition-colors"
            >
              View Complete Timeline
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with solid color */}
        <div className="absolute inset-0 bg-[#FDBA11]"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(0,0,0,.05) 50px, rgba(0,0,0,.05) 100px)',
        }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrophyIcon className="w-16 h-16 text-[#4C82C3] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#4C82C3] mb-6">Ready to Make History?</h2>
          <p className="text-xl text-[#4C82C3] mb-8 max-w-2xl mx-auto">
            Join ICPC Sri Lanka 2026 and represent your country on the world&apos;s biggest programming stage
          </p>
          <Link
            href="/registration"
            className="inline-flex items-center gap-2 bg-[#4C82C3] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#4C82C3]/90 transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            Register Your Team Now
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

// Component Definitions
function StatCard({ icon, number, label, color }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-gray-100 hover:border-[#4C82C3]">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${color} text-white mb-4`}>
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
}

function FeaturePoint({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
}

function PathStep({ number, text }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FDBA11] text-[#4C82C3] font-bold flex items-center justify-center">
        {number}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
      <div className="text-[#FDBA11] mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-100 leading-relaxed">{description}</p>
    </div>
  );
}

function InfoCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-[#4C82C3]">
      <div className="mb-4">{icon}</div>
      <div className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-semibold">{title}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-gray-600">{subtitle}</div>
    </div>
  );
}

function TimelineCard({ date, title, align, color, highlight }) {
  return (
    <div className={`relative flex items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Center dot */}
      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${color} rounded-full border-4 border-white shadow-lg z-10`}></div>
      
      {/* Content */}
      <div className={`w-full md:w-5/12 ${align === 'right' ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
        <div className={`${highlight ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400' : 'bg-white border border-gray-200'} rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow`}>
          <div className="text-sm font-semibold text-gray-600 mb-2">{date}</div>
          <h4 className="text-xl font-bold text-gray-900">{title}</h4>
        </div>
      </div>
    </div>
  );
}
