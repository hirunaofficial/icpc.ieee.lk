'use client';

import Link from 'next/link';

import { 
  FaEdit, 
  FaLaptopCode, 
  FaTrophy, 
  FaGlobeAsia 
} from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function Timeline() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54761196795_4f95803daf_o.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center text-white">Timeline</h1>
            <div className="h-2 w-32 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
            <p className="text-3xl md:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D]">
              Your journey to ICPC World Finals 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-2 bg-[#143C68] rounded-full"></div>

            {/* Timeline Items */}
            <StaggerContainer>
              <div className="space-y-12">
                <StaggerItem>
                  <TimelineEvent
                    date="September 2025"
                    title="Registrations Open"
                    description="Team registration opens for universities across Sri Lanka. Form your team of 3 students and find a faculty coach to register."
                    icon={<FaEdit className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Form your team (3 students)',
                      'Find a faculty coach',
                      'Register online'
                    ]}
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="October – November 2025"
                    title="Online Round (Optional)"
                    description="An optional online preliminary round to help teams prepare and get familiar with the contest format."
                    icon={<FaLaptopCode className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Practice problems available',
                      'Get familiar with contest platform',
                      'Warm up with your team'
                    ]}
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="December 2025 – January 2026"
                    title="Sri Lanka Onsite Regional"
                    description="The main national contest held onsite. This is where history will be made as Sri Lanka hosts its first-ever ICPC contest!"
                    icon={<FaTrophy className="w-8 h-8" />}
                    color="bg-[#FDBC1D]"
                    highlight={true}
                    actions={[
                      '5-hour onsite competition',
                      'Solve 5-10 programming problems',
                      'Compete for national championship',
                      'Winners qualify for Asia West Regional'
                    ]}
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="March 2026"
                    title="ICPC Asia West Regional"
                    description="The champion team from Sri Lanka will represent the country at the ICPC Asia West Regional Contest."
                    icon={<FaGlobeAsia className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Represent Sri Lanka internationally',
                      'Compete with top teams from Asia West',
                      'Potential advancement to World Finals'
                    ]}
                  />
                </StaggerItem>

                <StaggerItem>
                  <TimelineEvent
                    date="August 2026"
                    title="ICPC World Finals"
                    description="The ultimate destination - compete with the world's best programming teams at the ICPC World Finals."
                    icon={<FaGlobeAsia className="w-8 h-8" />}
                    color="bg-[#143C68]"
                    actions={[
                      'Global competition',
                      'Meet teams from 100+ countries',
                      'Compete for world championship'
                    ]}
                  />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Key Dates Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-8">Quick Reference</h2>
            <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-16 rounded-full"></div>
          </FadeIn>
          <ScaleIn delay={0.2}>
            <div className="bg-[#FDBC1D] rounded-3xl p-12 shadow-2xl">
              <div className="space-y-6">
                <QuickDate date="September 2025" event="Registrations Open" />
                <QuickDate date="October–November 2025" event="Online Round (Optional)" />
                <QuickDate date="December 2025 – January 2026" event="Sri Lanka Onsite Regional" highlight={true} />
                <QuickDate date="March 2026" event="ICPC Asia West" />
                <QuickDate date="August 2026" event="ICPC World Finals" />
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#143C68]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-6xl font-bold text-white mb-8">Don&apos;t Miss Out!</h2>
            <p className="text-2xl text-white mb-12 font-semibold">
              Registration opens in September 2025. Be ready to register your team!
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 bg-[#FDBC1D] text-[#143C68] px-12 py-6 rounded-3xl text-2xl font-bold hover:bg-[#e6a91a] transition-all duration-300 shadow-2xl hover:-translate-y-2"
            >
              Registration Details
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

function TimelineEvent({ date, title, description, icon, color, highlight, actions }) {
  return (
    <div className="relative pl-24">
      {/* Icon Circle */}
      <div className={`absolute left-0 w-20 h-20 ${color} rounded-full flex items-center justify-center text-white shadow-2xl`}>
        {icon}
      </div>

      {/* Content */}
      <div className={`${highlight ? 'bg-[#FDBC1D]' : 'bg-white'} rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 p-10`}>
        <div className={`text-lg font-bold ${highlight ? 'text-[#143C68]' : 'text-gray-600'} mb-4 uppercase tracking-wide`}>{date}</div>
        <h3 className={`text-3xl font-bold ${highlight ? 'text-[#143C68]' : 'text-gray-900'} mb-6`}>{title}</h3>
        <p className={`${highlight ? 'text-[#143C68]' : 'text-gray-700'} mb-8 text-lg leading-relaxed`}>{description}</p>
        
        {actions && actions.length > 0 && (
          <ul className="space-y-4">
            {actions.map((action, actionIndex) => (
              <li key={`${title}-${actionIndex}`} className={`flex items-start space-x-4 ${highlight ? 'text-[#143C68]' : 'text-gray-700'}`}>
                <svg className="w-6 h-6 text-[#FDBC1D] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">{action}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function QuickDate({ date, event, highlight }) {
  return (
    <div className={`flex items-center justify-between p-6 ${highlight ? 'bg-white border-l-8 border-[#143C68]' : 'bg-[#143C68]/10'} rounded-2xl hover:shadow-lg transition-all duration-300`}>
      <span className={`font-bold text-xl ${highlight ? 'text-[#143C68]' : 'text-[#143C68]'}`}>{date}</span>
      <span className={`text-xl ${highlight ? 'text-gray-900' : 'text-[#143C68]'} font-semibold`}>{event}</span>
    </div>
  );
}
