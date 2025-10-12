'use client';

import Link from 'next/link';
import { FaTrophy, FaLightbulb, FaStar } from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function WhyJoin() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#4C82C3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Why You Should Join?</h1>
            <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
              Transform your skills, career, and future
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <StaggerItem>
                <BenefitCard
                  icon={<FaTrophy className="w-16 h-16" />}
                  title="Compete with the Best"
                  description="Compete with the sharpest minds in Sri Lanka"
                  bgColor="bg-[#4C82C3]"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaLightbulb className="w-16 h-16" />}
                  title="Build Lasting Skills"
                  description="Build skills in algorithms, problem solving, and teamwork that last a lifetime"
                  bgColor="bg-[#B22E1B]"
                />
              </StaggerItem>
              <StaggerItem>
                <BenefitCard
                  icon={<FaStar className="w-16 h-16" />}
                  title="Earn Recognition"
                  description="Earn national recognition and a ticket to the ICPC Asia West Regional"
                  bgColor="bg-[#FDBA11]"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Detailed Benefits */}
          <StaggerContainer delay={0.3}>
            <div className="space-y-8">
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What ICPC Alumni Say</h2>
          </FadeIn>
          <ScaleIn delay={0.2}>
            <div className="bg-[#4C82C3]/10 border-2 border-[#4C82C3] rounded-2xl p-8 md:p-12">
              <blockquote className="text-xl text-gray-700 italic mb-6">
                &quot;ICPC was the most transformative experience of my university years. It taught me how to think algorithmically, work under pressure, and collaborate effectively. These skills have been invaluable throughout my career.&quot;
              </blockquote>
              <p className="text-gray-900 font-semibold">— ICPC Alumni & Software Engineer</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4C82C3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white mb-8">
              Don&apos;t miss this opportunity to compete, learn, and grow
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <Link
              href="/registration"
              className="inline-block bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FDBA11]/90 transition-all duration-300 transform hover:scale-105"
            >
              Register Your Team Now
            </Link>
          </ScaleIn>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ icon, title, description, bgColor }) {
  return (
    <div className={`${bgColor} text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white text-opacity-90">{description}</p>
    </div>
  );
}

function DetailedBenefit({ title, description, points }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
