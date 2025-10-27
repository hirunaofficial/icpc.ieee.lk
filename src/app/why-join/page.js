'use client';

import Link from 'next/link';
import { FaTrophy, FaLightbulb, FaStar } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function WhyJoin() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54756036640_e17fd09ba2_k.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white px-4">Why You Should Join?</h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              Transform your skills, career, and future
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Key Benefits</h2>
              <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-[#143C68] font-semibold px-4">Discover what makes ICPC transformative</p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
              <StaggerItem>
                <BenefitCard
                  icon={<FaTrophy className="w-20 h-20" />}
                  title="Compete with the Best"
                  description="Compete with the sharpest minds in Sri Lanka"
                  bgColor="bg-[#143C68]"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaLightbulb className="w-20 h-20" />}
                  title="Build Lasting Skills"
                  description="Build skills in algorithms, problem solving, and teamwork that last a lifetime"
                  bgColor="bg-[#FDBC1D]"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaStar className="w-20 h-20" />}
                  title="Earn Recognition"
                  description="Earn national recognition and a ticket to the ICPC Asia West Regional"
                  bgColor="bg-[#143C68]"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Detailed Benefits */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">In-Depth Benefits</h3>
            <div className="h-1 w-20 bg-[#143C68] mx-auto rounded-full"></div>
          </div>
          <StaggerContainer delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <StaggerItem>
                <DetailedBenefit
                  title="Technical Excellence"
                  description="ICPC challenges you to master advanced algorithms, complex data structures, and optimize solutions under time pressure. These skills are highly valued in the tech industry and academic research."
                  points={[
                    'Advanced algorithm design and analysis',
                    'Efficient problem-solving techniques',
                    'Code optimization and debugging',
                    'Working under time constraints'
                  ]}
                />
              </StaggerItem>

              <StaggerItem>
                <DetailedBenefit
                  title="Career Opportunities"
                  description="ICPC participation is a prestigious credential that opens doors to top tech companies and graduate programs worldwide."
                  points={[
                    'Resume boost recognized by global tech giants',
                    'Direct recruitment opportunities from sponsor companies',
                    'Scholarship opportunities for graduate studies',
                    'Network with industry professionals'
                  ]}
                />
              </StaggerItem>

              <StaggerItem>
                <DetailedBenefit
                  title="Teamwork & Leadership"
                  description="Success in ICPC requires exceptional teamwork, communication, and strategic thinking - skills that transcend programming."
                  points={[
                    'Collaborative problem-solving experience',
                    'Strategic task division and time management',
                    'Communication under pressure',
                    'Leadership and decision-making skills'
                  ]}
                />
              </StaggerItem>

              <StaggerItem>
                <DetailedBenefit
                  title="International Exposure"
                  description="Represent Sri Lanka on the global stage and connect with brilliant minds from around the world."
                  points={[
                    'Compete in the ICPC Asia West Regional',
                    'Potential advancement to World Finals',
                    'Meet top programmers from other countries',
                    'Experience international competition standards'
                  ]}
                />
              </StaggerItem>

              <StaggerItem>
                <DetailedBenefit
                  title="Personal Growth"
                  description="The journey through ICPC builds confidence, resilience, and a growth mindset that serves you throughout life."
                  points={[
                    'Build confidence through competitive success',
                    'Develop resilience and perseverance',
                    'Learn to handle pressure and setbacks',
                    'Join a community of passionate programmers'
                  ]}
                />
              </StaggerItem>

              <StaggerItem>
                <DetailedBenefit
                  title="Make History"
                  description="Be part of Sri Lanka's first-ever participation in ICPC - a moment that will be remembered for generations."
                  points={[
                    'Pioneer Sri Lanka\'s entry into ICPC',
                    'Inspire future generations of programmers',
                    'Put Sri Lanka on the global programming map',
                    'Create a legacy for your university'
                  ]}
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">What ICPC Alumni Say</h2>
            <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-16 rounded-full"></div>
          </FadeIn>
          <ScaleIn delay={0.2}>
            <div className="bg-[#FDBC1D] rounded-3xl p-12 md:p-16 shadow-2xl">
              <blockquote className="text-2xl text-[#143C68] font-semibold italic mb-8 text-center">
                &quot;ICPC was the most transformative experience of my university years. It taught me how to think algorithmically, work under pressure, and collaborate effectively. These skills have been invaluable throughout my career.&quot;
              </blockquote>
              <p className="text-[#143C68] font-bold text-xl text-center">— ICPC Alumni & Software Engineer</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#143C68]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-6xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
            <p className="text-2xl text-white mb-12 font-semibold">
              Don&apos;t miss this opportunity to compete, learn, and grow
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 bg-[#FDBC1D] text-[#143C68] px-12 py-6 rounded-3xl text-2xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl hover:-translate-y-2"
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

function BenefitCard({ icon, title, description, bgColor }) {
  return (
    <div className={`${bgColor} text-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2`}>
      <div className="mb-8 flex justify-center">{icon}</div>
      <h3 className="text-3xl font-bold mb-6 text-center">{title}</h3>
      <p className="text-white text-opacity-95 text-lg text-center leading-relaxed">{description}</p>
    </div>
  );
}

function DetailedBenefit({ title, description, points }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-10">
      <h3 className="text-3xl font-bold text-[#143C68] mb-6">{title}</h3>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed">{description}</p>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={`${title}-${index}`} className="flex items-start space-x-4">
            <svg className="w-8 h-8 text-[#FDBC1D] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 text-lg">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
