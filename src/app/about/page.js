'use client';

import Link from 'next/link';
import { GlobeAltIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { FaChartLine } from 'react-icons/fa';
import { FadeIn, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54755925319_a8c95c4d63_3k.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center text-white">What is ICPC?</h1>
            <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
            <p className="text-3xl md:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBA11]">
              The Olympics of Programming
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16">
            <FadeIn>
              <p className="text-2xl text-gray-700 leading-relaxed mb-12 text-center font-semibold">
                The International Collegiate Programming Contest (ICPC) isn&apos;t just another coding challenge; 
                it&apos;s <strong className="text-[#4C82C3]">the Olympics of programming</strong>, which is the oldest, largest, and most 
                prestigious competitive programming contest in the world.
              </p>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                <StaggerItem>
                  <StatBox number="100+" label="Countries" />
                </StaggerItem>
                <StaggerItem>
                  <StatBox number="3,000+" label="Universities" />
                </StaggerItem>
                <StaggerItem>
                  <StatBox number="60,000+" label="Students" />
                </StaggerItem>
              </div>
            </StaggerContainer>

            <ScaleIn delay={0.4}>
              <div className="bg-[#FDBA11] rounded-2xl p-12 my-16 shadow-2xl">
                <h2 className="text-4xl font-bold text-[#4C82C3] mb-6 text-center">One Goal</h2>
                <p className="text-2xl text-center text-[#4C82C3] font-semibold">
                  Solving problems that push the limits of human creativity and teamwork
                </p>
              </div>
            </ScaleIn>

            <FadeInLeft delay={0.5}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">A Historic Moment for Sri Lanka</h2>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 text-center font-semibold">
                And in 2026, <strong className="text-[#4C82C3]">Sri Lanka joins the map</strong>. 
                This is your chance to be part of history.
              </p>
            </FadeInLeft>

            <FadeInRight delay={0.6}>
              <div className="bg-gray-50 rounded-2xl p-12 my-12 shadow-xl">
                <h3 className="text-3xl font-bold text-[#4C82C3] mb-8 text-center">The Path to Glory</h3>
                <ul className="space-y-6">
                  <PathItem 
                    step="1" 
                    title="Sri Lanka National Contest" 
                    description="Compete against the best teams in Sri Lanka"
                  />
                  <PathItem 
                    step="2" 
                    title="ICPC Asia West Regional" 
                    description="Represent Sri Lanka on the regional stage"
                  />
                  <PathItem 
                    step="3" 
                    title="ICPC World Finals" 
                    description="Compete with the world's best programmers"
                  />
                </ul>
              </div>
            </FadeInRight>

            <FadeIn delay={0.7}>
              <h2 className="text-4xl font-bold text-gray-900 mb-10 mt-16 text-center">Why ICPC Matters</h2>
              <div className="h-2 w-24 bg-[#FDBA11] mx-auto mb-12 rounded-full"></div>
            </FadeIn>
            <StaggerContainer delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <StaggerItem>
                  <FeatureBlock
                    title="Global Recognition"
                    description="ICPC is recognized by top universities and tech companies worldwide. Participating demonstrates exceptional problem-solving abilities and technical skills."
                    icon={<GlobeAltIcon className="w-12 h-12 text-[#4C82C3]" />}
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureBlock
                    title="Career Opportunities"
                    description="Many ICPC alumni have gone on to work at leading tech companies like Google, Facebook, Microsoft, and more."
                    icon={<BriefcaseIcon className="w-12 h-12 text-[#4C82C3]" />}
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureBlock
                    title="Skill Development"
                    description="ICPC challenges push you to master algorithms, data structures, and efficient problem-solving under pressure."
                    icon={<FaChartLine className="w-12 h-12 text-[#4C82C3]" />}
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureBlock
                    title="Networking"
                    description="Connect with brilliant minds from across the country and region, building relationships that last a lifetime."
                    icon={<UserGroupIcon className="w-12 h-12 text-[#4C82C3]" />}
                  />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#FDBA11] text-[#4C82C3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-6xl font-bold mb-8">Ready to Join the Competition?</h2>
            <p className="text-2xl mb-12 font-semibold">
              Be part of the first ICPC contest in Sri Lanka&apos;s history
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 bg-[#4C82C3] text-white px-12 py-6 rounded-3xl text-2xl font-bold hover:bg-[#4C82C3]/90 transition-all duration-300 shadow-2xl hover:-translate-y-2"
            >
              Register Your Team
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

function StatBox({ number, label }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="text-5xl font-bold text-[#4C82C3] mb-4">{number}</div>
      <div className="text-gray-700 text-lg font-semibold">{label}</div>
    </div>
  );
}

function PathItem({ step, title, description }) {
  return (
    <li className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex-shrink-0 w-12 h-12 bg-[#4C82C3] text-white rounded-full flex items-center justify-center font-bold text-xl">
        {step}
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </li>
  );
}

function FeatureBlock({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-center mb-6">{icon}</div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#4C82C3] mb-4">{title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
