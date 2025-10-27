'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { TrophyIcon, UserGroupIcon, GlobeAltIcon, AcademicCapIcon, SparklesIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { FaCode, FaChartLine, FaAward, FaClock, FaUsers, FaLaptopCode, FaRocket, FaStar, FaTrophy, FaMedal } from 'react-icons/fa';
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
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Slider */}
      <section className="relative h-screen min-h-[700px] sm:min-h-[800px] md:min-h-[900px] overflow-hidden bg-white">
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
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-[#143C68]/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#FDBC1D]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-[#143C68]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#FDBC1D]/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">

              {/* ICPC Logo */}
              <FadeIn duration={0.8} delay={0.2}>
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#143C68] rounded-2xl sm:rounded-3xl blur-lg opacity-30 scale-110"></div>
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#FDBC1D]/20">
                      <Image
                        src="/logo.png"
                        alt="ICPC Logo"
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <ScaleIn delay={0.4} duration={0.8}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
                  <span className="text-white">
                    ICPC Sri Lanka
                  </span>
                  <br />
                  <span className="text-[#FDBC1D] drop-shadow-2xl">2026</span>
                </h1>
              </ScaleIn>

              <FadeIn delay={0.6} duration={0.8}>
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                  <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] rounded-full"></div>
                  <div className="h-1 w-12 sm:w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                </div>
              </FadeIn>

              <SlideInBottom delay={0.8} duration={0.8}>
                <p className="text-xl sm:text-2xl md:text-4xl mb-4 sm:mb-6 text-[#FDBC1D] font-bold tracking-wide drop-shadow-lg">
                  Code Beyond Borders
                </p>
              </SlideInBottom>

              <SlideInBottom delay={1} duration={0.8}>
                <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-white/95 font-medium px-4">
                  For the first time ever, Sri Lanka enters the world&apos;s biggest stage of competitive programming.
                  <span className="text-[#FDBC1D] font-bold"> Join us in making history.</span>
                </p>
              </SlideInBottom>
              
              <SlideInBottom delay={1.2} duration={0.8}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                  <Link
                    href="/registration"
                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#FDBC1D] text-[#143C68] px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                  >
                    <FaRocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                    <span>Register Now</span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about"
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold hover:bg-white hover:text-[#143C68] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto"
                  >
                    <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Learn More</span>
                  </Link>
                </div>
              </SlideInBottom>

              {/* Quick Stats */}
              <FadeIn delay={1.4} duration={0.8}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4">
                  <HoverScale>
                    <div className="group bg-white/95 backdrop-blur-md border border-[#FDBC1D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl text-center hover:bg-white transition-all duration-300">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-1 sm:mb-2 group-hover:text-[#FDBC1D] transition-colors">100+</div>
                      <div className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Countries</div>
                      <div className="text-xs text-gray-600 mt-1">Participating</div>
                    </div>
                  </HoverScale>
                  <HoverScale>
                    <div className="group bg-white/95 backdrop-blur-md border border-[#FDBC1D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl text-center hover:bg-white transition-all duration-300">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-1 sm:mb-2 group-hover:text-[#FDBC1D] transition-colors">3,000+</div>
                      <div className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Universities</div>
                      <div className="text-xs text-gray-600 mt-1">Worldwide</div>
                    </div>
                  </HoverScale>
                  <HoverScale>
                    <div className="group bg-white/95 backdrop-blur-md border border-[#FDBC1D]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl text-center hover:bg-white transition-all duration-300">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-1 sm:mb-2 group-hover:text-[#FDBC1D] transition-colors">60,000+</div>
                      <div className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Students</div>
                      <div className="text-xs text-gray-600 mt-1">Competing</div>
                    </div>
                  </HoverScale>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="animate-bounce">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#143C68]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FDBC1D]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-3 bg-[#143C68]/10 rounded-full px-6 py-3 mb-8">
                <TrophyIcon className="w-6 h-6 text-[#143C68]" />
                <span className="text-[#143C68] font-semibold">Global Recognition</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-[#143C68] mb-8">
                The Global Stage
              </h2>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-1 w-20 bg-[#FDBC1D]/50 rounded-full"></div>
                <div className="h-2 w-40 bg-[#FDBC1D] rounded-full"></div>
                <div className="h-1 w-20 bg-[#FDBC1D]/50 rounded-full"></div>
              </div>
              <p className="text-2xl text-gray-600 font-semibold max-w-3xl mx-auto">
                The world&apos;s premier programming competition that brings together the brightest minds
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <StaggerItem>
                <ModernStatCard 
                  icon={<GlobeAltIcon className="w-20 h-20" />}
                  number="100+" 
                  label="Countries Participating"
                  description="From every continent"
                  color="bg-[#143C68]"
                />
              </StaggerItem>
              <StaggerItem>
                <ModernStatCard 
                  icon={<AcademicCapIcon className="w-20 h-20" />}
                  number="3,000+" 
                  label="Universities Worldwide"
                  description="Top institutions"
                  color="bg-[#FDBC1D]"
                />
              </StaggerItem>
              <StaggerItem>
                <ModernStatCard 
                  icon={<UserGroupIcon className="w-20 h-20" />}
                  number="60,000+" 
                  label="Student Competitors"
                  description="Future innovators"
                  color="bg-[#143C68]"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
          
          <ScaleIn delay={0.5}>
            <div className="text-center">
              <div className="bg-[#143C68] rounded-3xl p-12 md:p-16 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6 text-white">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#FDBC1D] rounded-2xl flex items-center justify-center shadow-xl">
                      <TrophyIcon className="w-12 h-12 text-[#143C68]" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">One Goal</h3>
                    <p className="text-xl md:text-2xl font-semibold">
                      Push the limits of human creativity and teamwork
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* What is ICPC Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FDBC1D]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#143C68]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeInLeft>
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-3 bg-[#FDBC1D]/10 rounded-full px-6 py-3 mb-6">
                    <FaCode className="w-6 h-6 text-[#FDBC1D]" />
                    <span className="text-[#143C68] font-semibold">The Olympics of Programming</span>
                  </div>
                  <h2 className="text-6xl md:text-7xl font-bold text-[#143C68] mb-8">
                What is ICPC?
              </h2>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                    <div className="h-2 w-24 bg-[#FDBC1D] rounded-full"></div>
                    <div className="h-1 w-16 bg-[#FDBC1D]/50 rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                The International Collegiate Programming Contest (ICPC) isn&apos;t just another coding challenge; 
                  it&apos;s <span className="text-[#143C68] font-bold">the Olympics of programming</span> — the oldest, largest, and most prestigious 
                competitive programming contest in the world.
              </p>
                
                <div className="space-y-6">
                  <ModernFeaturePoint 
                    icon={<FaCode className="w-10 h-10" />}
                  text="World's most prestigious programming competition"
                    color="bg-[#143C68]"
                />
                  <ModernFeaturePoint 
                    icon={<FaChartLine className="w-10 h-10" />}
                  text="Recognized by top tech companies globally"
                    color="bg-[#FDBC1D]"
                />
                  <ModernFeaturePoint 
                    icon={<FaAward className="w-10 h-10" />}
                  text="Gateway to ICPC World Finals"
                    color="bg-[#143C68]"
                />
              </div>
                
              <Link
                href="/about"
                  className="group inline-flex items-center gap-4 bg-[#143C68] text-white px-10 py-6 rounded-2xl text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 shadow-2xl transform hover:scale-105"
                >
                  <span>Learn More About ICPC</span>
                  <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              </div>
            </FadeInLeft>
            
            <FadeInRight>
              <div className="bg-[#143C68] rounded-3xl p-12 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#FDBC1D] rounded-2xl flex items-center justify-center">
                    <FaRocket className="w-8 h-8 text-[#143C68]" />
                  </div>
                  <h3 className="text-4xl font-bold text-white">Sri Lanka Joins the Map</h3>
                </div>
                
                <p className="text-xl mb-10 text-white/95 leading-relaxed">
                  In 2026, <span className="text-[#FDBC1D] font-bold text-2xl">Sri Lanka makes history</span> as 
                  we host our first-ever ICPC contest. This is your chance to be a pioneer.
                </p>
                
                <div className="space-y-6">
                  <ModernPathStep 
                    number="1" 
                    text="Compete in Sri Lanka National Contest"
                    icon={<FaTrophy className="w-6 h-6" />}
                  />
                  <ModernPathStep 
                    number="2" 
                    text="Advance to ICPC Asia West Regional"
                    icon={<FaMedal className="w-6 h-6" />}
                  />
                  <ModernPathStep 
                    number="3" 
                    text="Qualify for ICPC World Finals"
                    icon={<FaStar className="w-6 h-6" />}
                  />
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-32 bg-[#143C68] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDBC1D]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn>
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                <SparklesIcon className="w-6 h-6 text-[#FDBC1D]" />
                <span className="text-white font-semibold">Transform Your Future</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
                Why You Should Join?
              </h2>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-1 w-20 bg-[#FDBC1D]/50 rounded-full"></div>
                <div className="h-2 w-32 bg-[#FDBC1D] rounded-full"></div>
                <div className="h-1 w-20 bg-[#FDBC1D]/50 rounded-full"></div>
              </div>
              <p className="text-2xl text-white/90 font-semibold max-w-3xl mx-auto">
                Transform your skills, career, and future with the world&apos;s most prestigious programming competition
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <ModernBenefitCard
                  icon={<TrophyIcon className="w-20 h-20" />}
                  title="Compete with the Best"
                  description="Challenge yourself against the sharpest minds in Sri Lanka and beyond"
                  color="bg-[#FDBC1D]"
                />
              </StaggerItem>
              <StaggerItem>
                <ModernBenefitCard
                  icon={<FaLaptopCode className="w-20 h-20" />}
                  title="Build Lasting Skills"
                  description="Master algorithms, problem-solving, and teamwork that last a lifetime"
                  color="bg-[#143C68]"
                />
              </StaggerItem>
              <StaggerItem>
                <ModernBenefitCard
                  icon={<GlobeAltIcon className="w-20 h-20" />}
                  title="International Recognition"
                  description="Earn national recognition and qualify for ICPC Asia West Regional"
                  color="bg-[#FDBC1D]"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
          
          <FadeIn delay={0.6}>
            <div className="text-center mt-16">
              <Link
                href="/why-join"
                className="group inline-flex items-center gap-4 bg-[#FDBC1D] text-[#143C68] px-10 py-6 rounded-2xl text-xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                <span>Discover All Benefits</span>
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
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
              <div className="h-2 w-32 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-gray-600 font-semibold">Understanding the contest format</p>
            </div>
          </FadeIn>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggerItem>
                <InfoCard 
                  icon={<FaUsers className="w-12 h-12 text-[#143C68]" />}
                  title="Team Size" 
                  value="3 Students" 
                  subtitle="from the same university" 
                />
              </StaggerItem>
              <StaggerItem>
                <InfoCard 
                  icon={<FaClock className="w-12 h-12 text-[#143C68]" />}
                  title="Duration" 
                  value="5 Hours" 
                  subtitle="of intense competition" 
                />
              </StaggerItem>
              <StaggerItem>
                <InfoCard 
                  icon={<FaCode className="w-12 h-12 text-[#143C68]" />}
                  title="Problems" 
                  value="5-10" 
                  subtitle="algorithmic challenges" 
                />
              </StaggerItem>
              <StaggerItem>
                <InfoCard 
                  icon={<FaLaptopCode className="w-12 h-12 text-[#143C68]" />}
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
                className="inline-flex items-center gap-3 bg-[#143C68] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
              <div className="h-2 w-32 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-gray-600 font-semibold">Your journey to ICPC World Finals</p>
            </div>
          </FadeIn>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#143C68]"></div>
            
            <div className="space-y-12">
              <FadeInLeft delay={0.1}>
                <TimelineCard
                  date="September 2025"
                  title="Registrations Open"
                  align="left"
                  color="bg-[#143C68]"
                />
              </FadeInLeft>
              <FadeInRight delay={0.2}>
                <TimelineCard
                  date="October–November 2025"
                  title="Online Round (Optional)"
                  align="right"
                  color="bg-[#143C68]"
                />
              </FadeInRight>
              <FadeInLeft delay={0.3}>
                <TimelineCard
                  date="December 2025 – January 2026"
                  title="Sri Lanka Onsite Regional"
                  align="left"
                  color="bg-[#FDBC1D]"
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
                className="inline-flex items-center gap-3 bg-[#143C68] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
      <section className="relative py-32 overflow-hidden bg-[#FDBC1D]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#143C68]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#143C68]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScaleIn>
            <div className="relative inline-block mb-12">
              <div className="w-32 h-32 bg-[#143C68] rounded-3xl flex items-center justify-center shadow-2xl">
                <TrophyIcon className="w-20 h-20 text-[#FDBC1D]" />
              </div>
            </div>
          </ScaleIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-6xl md:text-8xl font-bold text-[#143C68] mb-8 drop-shadow-lg">
              Ready to Make History?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl text-[#143C68] mb-16 max-w-4xl mx-auto font-semibold leading-relaxed">
              Join ICPC Sri Lanka 2026 and represent your country on the world&apos;s biggest programming stage
            </p>
          </FadeIn>
          
          <ScaleIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/registration"
                className="group relative inline-flex items-center gap-4 bg-[#143C68] text-white px-16 py-8 rounded-3xl text-2xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 shadow-2xl hover:-translate-y-2"
              >
                <FaRocket className="w-8 h-8 group-hover:animate-bounce" />
                <span>Register Your Team Now</span>
                <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 bg-white/20 backdrop-blur-md border border-white/30 text-[#143C68] px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#143C68] transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <PlayIcon className="w-6 h-6" />
                <span>Learn More</span>
            </Link>
            </div>
          </ScaleIn>
          
          <FadeIn delay={0.8}>
            <div className="mt-16 text-center">
              <p className="text-lg text-[#143C68]/80 font-medium">
                Registration opens in <span className="font-bold text-[#143C68]">September 2025</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

// Component Definitions
function StatCard({ icon, number, label, color }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-gray-100 hover:border-[#143C68]">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${color} text-white mb-4`}>
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
}

function ModernStatCard({ icon, number, label, description, color }) {
  return (
    <div className="group relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="relative">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${color} text-white mb-6 shadow-xl`}>
          {icon}
        </div>
        <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-[#143C68] transition-colors">{number}</div>
        <div className="text-xl font-bold text-gray-800 mb-2">{label}</div>
        <div className="text-sm text-gray-600 font-medium">{description}</div>
      </div>
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

function ModernFeaturePoint({ icon, text, color }) {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <p className="text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{text}</p>
    </div>
  );
}

function PathStep({ number, text }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FDBC1D] text-[#143C68] font-bold flex items-center justify-center">
        {number}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
}

function ModernPathStep({ number, text, icon }) {
  return (
    <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FDBC1D] text-[#143C68] font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="flex items-center gap-3 flex-1">
        <div className="text-[#FDBC1D] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <p className="text-lg font-medium text-white/95 group-hover:text-white transition-colors">{text}</p>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl text-center">
      <div className="text-[#FDBC1D] mb-8 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-6 text-[#143C68]">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
    </div>
  );
}

function ModernBenefitCard({ icon, title, description, color }) {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
      <div className="relative text-center">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${color} text-white mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-[#FDBC1D] transition-colors">{title}</h3>
        <p className="text-white/90 leading-relaxed text-lg group-hover:text-white transition-colors">{description}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
      <div className="mb-6 flex justify-center">{icon}</div>
      <div className="text-sm text-gray-600 mb-3 uppercase tracking-wide font-bold">{title}</div>
      <div className="text-4xl font-bold text-[#143C68] mb-2">{value}</div>
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
        <div className={`${highlight ? 'bg-[#FDBC1D] text-[#143C68]' : 'bg-white'} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
          <div className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">{date}</div>
          <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
        </div>
      </div>
    </div>
  );
}
