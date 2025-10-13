'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { TrophyIcon, UserGroupIcon, GlobeAltIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaCode, FaChartLine, FaAward, FaClock, FaUsers, FaLaptopCode } from 'react-icons/fa';
import { FadeIn, FadeInLeft, FadeInRight, ScaleIn, SlideInBottom, StaggerContainer, StaggerItem, HoverScale } from '@/components/AnimatedSection';

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
      <section className="relative h-screen min-h-[700px] overflow-hidden">
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
                quality={95}
              />
            </div>
          ))}
          {/* Black Transparent Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center mt-16 mb-16">
              {/* ICPC Logo */}
              <FadeIn duration={0.8}>
                <div className="mb-12 flex justify-center">
                  <div className="bg-white rounded-3xl p-8 inline-block shadow-2xl">
                    <Image
                      src="/logo.png"
                      alt="ICPC Logo"
                      width={100}
                      height={100}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              </FadeIn>
              
              <ScaleIn delay={0.2} duration={0.8}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white tracking-tight">
                  ICPC Sri Lanka <span className="text-[#FDBA11]">2026</span>
                </h1>
              </ScaleIn>
              
              <FadeIn delay={0.4} duration={0.8}>
                <div className="h-2 w-40 bg-[#FDBA11] mx-auto mb-10 rounded-full" />
              </FadeIn>
              
              <SlideInBottom delay={0.6} duration={0.8}>
                <p className="text-3xl md:text-5xl mb-8 text-[#FDBA11] font-bold tracking-wide">
                  Code Beyond Borders
                </p>
              </SlideInBottom>
              
              <SlideInBottom delay={0.8} duration={0.8}>
                <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed text-white font-medium">
                  For the first time ever, Sri Lanka enters the world&apos;s biggest stage of competitive programming. 
                  Join us in making history.
                </p>
              </SlideInBottom>
              
              <SlideInBottom delay={1} duration={0.8}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl mx-auto">
                  <Link
                    href="/registration"
                    className="group inline-flex items-center justify-center gap-3 bg-[#FDBA11] text-[#4C82C3] px-12 py-5 rounded-2xl text-2xl font-bold hover:bg-white hover:text-[#4C82C3] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                  >
                    <span>Register Now</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-3 bg-white text-[#4C82C3] px-12 py-5 rounded-2xl text-2xl font-bold hover:bg-[#B22E1B] hover:text-white transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </SlideInBottom>

              {/* Quick Stats */}
              <FadeIn delay={1.2} duration={0.8}>
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                  <HoverScale>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-[#FDBA11] text-center">
                      <div className="text-3xl md:text-5xl font-bold text-[#4C82C3] mb-2">100+</div>
                      <div className="text-lg md:text-xl text-black font-semibold">Countries</div>
                    </div>
                  </HoverScale>
                  <HoverScale>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-[#FDBA11] text-center">
                      <div className="text-3xl md:text-5xl font-bold text-[#4C82C3] mb-2">3,000+</div>
                      <div className="text-lg md:text-xl text-black font-semibold">Universities</div>
                    </div>
                  </HoverScale>
                  <HoverScale>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-[#FDBA11] text-center">
                      <div className="text-3xl md:text-5xl font-bold text-[#4C82C3] mb-2">60,000+</div>
                      <div className="text-lg md:text-xl text-black font-semibold">Students</div>
                    </div>
                  </HoverScale>
                </div>
              </FadeIn>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">The Global Stage</h2>
              <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#4C82C3] font-semibold">The world&apos;s premier programming competition</p>
            </div>
          </FadeIn>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              <StaggerItem>
                <StatCard 
                  icon={<GlobeAltIcon className="w-16 h-16" />}
                  number="100+" 
                  label="Countries Participating"
                />
              </StaggerItem>
              <StaggerItem>
                <StatCard 
                  icon={<AcademicCapIcon className="w-16 h-16" />}
                  number="3,000+" 
                  label="Universities Worldwide"
                />
              </StaggerItem>
              <StaggerItem>
                <StatCard 
                  icon={<UserGroupIcon className="w-16 h-16" />}
                  number="60,000+" 
                  label="Student Competitors"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
          
          <ScaleIn delay={0.5}>
            <div className="text-center">
              <div className="bg-[#4C82C3] rounded-3xl p-12 inline-block shadow-2xl border-4 border-[#FDBA11]">
                <p className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
                  <TrophyIcon className="w-12 h-12 text-[#FDBA11]" />
                  One Goal: Push the limits of human creativity and teamwork
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* What is ICPC Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
                What is ICPC?
              </h2>
              <div className="h-2 w-32 bg-[#FDBA11] mb-8 rounded-full"></div>
              <p className="text-2xl text-[#4C82C3] mb-8 leading-relaxed font-semibold">
                The International Collegiate Programming Contest (ICPC) isn&apos;t just another coding challenge; 
                it&apos;s <strong className="text-black">the Olympics of programming</strong> — the oldest, largest, and most prestigious 
                competitive programming contest in the world.
              </p>
              <div className="space-y-6 mb-10">
                <FeaturePoint 
                  icon={<FaCode className="w-8 h-8 text-[#FDBA11]" />}
                  text="World's most prestigious programming competition"
                />
                <FeaturePoint 
                  icon={<FaChartLine className="w-8 h-8 text-[#FDBA11]" />}
                  text="Recognized by top tech companies globally"
                />
                <FeaturePoint 
                  icon={<FaAward className="w-8 h-8 text-[#FDBA11]" />}
                  text="Gateway to ICPC World Finals"
                />
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#4C82C3] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#B22E1B] transition-all duration-300 shadow-xl transform hover:scale-105"
              >
                Learn More About ICPC
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeInLeft>
            
            <FadeInRight>
              <div className="bg-[#4C82C3] rounded-3xl p-12 text-white shadow-2xl border-4 border-[#FDBA11]">
                <h3 className="text-3xl font-bold mb-8 text-[#FDBA11]">Sri Lanka Joins the Map</h3>
                <p className="text-xl mb-8 text-white leading-relaxed">
                  In 2026, <span className="text-[#FDBA11] font-bold">Sri Lanka makes history</span> as 
                  we host our first-ever ICPC contest. This is your chance to be a pioneer.
                </p>
                <div className="space-y-6">
                  <PathStep number="1" text="Compete in Sri Lanka National Contest" />
                  <PathStep number="2" text="Advance to ICPC Asia West Regional" />
                  <PathStep number="3" text="Qualify for ICPC World Finals" />
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-[#4C82C3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Why You Should Join?</h2>
              <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-white font-semibold">Transform your skills, career, and future</p>
            </div>
          </FadeIn>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <StaggerItem>
                <BenefitCard
                  icon={<TrophyIcon className="w-16 h-16" />}
                  title="Compete with the Best"
                  description="Challenge yourself against the sharpest minds in Sri Lanka and beyond"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaLaptopCode className="w-16 h-16" />}
                  title="Build Lasting Skills"
                  description="Master algorithms, problem-solving, and teamwork that last a lifetime"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<GlobeAltIcon className="w-16 h-16" />}
                  title="International Recognition"
                  description="Earn national recognition and qualify for ICPC Asia West Regional"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
          
          <FadeIn delay={0.6}>
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
          </FadeIn>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-gray-600 font-semibold">Understanding the contest format</p>
            </div>
          </FadeIn>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggerItem>
                <InfoCard 
                  icon={<FaUsers className="w-12 h-12 text-[#4C82C3]" />}
                  title="Team Size" 
                  value="3 Students" 
                  subtitle="from the same university" 
                />
              </StaggerItem>
              <StaggerItem>
                <InfoCard 
                  icon={<FaClock className="w-12 h-12 text-[#4C82C3]" />}
                  title="Duration" 
                  value="5 Hours" 
                  subtitle="of intense competition" 
                />
              </StaggerItem>
              <StaggerItem>
                <InfoCard 
                  icon={<FaCode className="w-12 h-12 text-[#4C82C3]" />}
                  title="Problems" 
                  value="5-10" 
                  subtitle="algorithmic challenges" 
                />
              </StaggerItem>
              <StaggerItem>
                <InfoCard 
                  icon={<FaLaptopCode className="w-12 h-12 text-[#4C82C3]" />}
                  title="Format" 
                  value="Offline" 
                  subtitle="pure skill, no internet" 
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
          
          <FadeIn delay={0.8}>
            <div className="text-center mt-16">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-3 bg-[#4C82C3] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#4C82C3]/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                View Complete Details
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Timeline</h2>
              <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-gray-600 font-semibold">Your journey to ICPC World Finals</p>
            </div>
          </FadeIn>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4C82C3]"></div>
            
            <div className="space-y-12">
              <FadeInLeft delay={0.1}>
                <TimelineCard
                  date="September 2025"
                  title="Registrations Open"
                  align="left"
                  color="bg-[#4C82C3]"
                />
              </FadeInLeft>
              <FadeInRight delay={0.2}>
                <TimelineCard
                  date="October–November 2025"
                  title="Online Round (Optional)"
                  align="right"
                  color="bg-[#4C82C3]"
                />
              </FadeInRight>
              <FadeInLeft delay={0.3}>
                <TimelineCard
                  date="December 2025 – January 2026"
                  title="Sri Lanka Onsite Regional"
                  align="left"
                  color="bg-[#FDBA11]"
                  highlight={true}
                />
              </FadeInLeft>
              <FadeInRight delay={0.4}>
                <TimelineCard
                  date="March 2026"
                  title="ICPC Asia West"
                  align="right"
                  color="bg-[#B22E1B]"
                />
              </FadeInRight>
              <FadeInLeft delay={0.5}>
                <TimelineCard
                  date="August 2026"
                  title="ICPC World Finals"
                  align="left"
                  color="bg-red-500"
                />
              </FadeInLeft>
            </div>
          </div>
          
          <FadeIn delay={0.8}>
            <div className="text-center mt-16">
              <Link
                href="/timeline"
                className="inline-flex items-center gap-3 bg-[#4C82C3] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#4C82C3]/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                View Complete Timeline
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#FDBA11]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScaleIn>
            <TrophyIcon className="w-24 h-24 text-[#4C82C3] mx-auto mb-10" />
          </ScaleIn>
          <FadeIn delay={0.2}>
            <h2 className="text-6xl md:text-7xl font-bold text-[#4C82C3] mb-8">Ready to Make History?</h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-2xl text-[#4C82C3] mb-12 max-w-3xl mx-auto font-semibold">
              Join ICPC Sri Lanka 2026 and represent your country on the world's biggest programming stage
            </p>
          </FadeIn>
          <ScaleIn delay={0.6}>
            <Link
              href="/registration"
              className="inline-flex items-center gap-4 bg-[#4C82C3] text-white px-16 py-8 rounded-3xl text-2xl font-bold hover:bg-[#4C82C3]/90 transition-all duration-300 shadow-2xl hover:-translate-y-2"
            >
              Register Your Team Now
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScaleIn>
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
    <div className="bg-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl text-center">
      <div className="text-[#FDBA11] mb-8 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-6 text-[#4C82C3]">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
    </div>
  );
}

function InfoCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
      <div className="mb-6 flex justify-center">{icon}</div>
      <div className="text-sm text-gray-600 mb-3 uppercase tracking-wide font-bold">{title}</div>
      <div className="text-4xl font-bold text-[#4C82C3] mb-2">{value}</div>
      <div className="text-gray-700 text-lg">{subtitle}</div>
    </div>
  );
}

function TimelineCard({ date, title, align, color, highlight }) {
  return (
    <div className={`relative flex items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Center dot */}
      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${color} rounded-full border-4 border-white shadow-xl z-10`}></div>
      
      {/* Content */}
      <div className={`w-full md:w-5/12 ${align === 'right' ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
        <div className={`${highlight ? 'bg-[#FDBA11] text-[#4C82C3]' : 'bg-white'} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
          <div className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">{date}</div>
          <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
        </div>
      </div>
    </div>
  );
}
