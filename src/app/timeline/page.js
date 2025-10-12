import Link from 'next/link';

import { 
  FaEdit, 
  FaLaptopCode, 
  FaTrophy, 
  FaGlobeAsia 
} from 'react-icons/fa';

export const metadata = {
  title: 'Timeline | ICPC Sri Lanka 2026',
  description: 'Important dates and timeline for ICPC Sri Lanka 2026',
};

export default function Timeline() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#4C82C3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Timeline</h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
            Your journey to ICPC World Finals 2026
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#4C82C3]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <TimelineEvent
                date="September 2025"
                title="Registrations Open"
                description="Team registration opens for universities across Sri Lanka. Form your team of 3 students and find a faculty coach to register."
                icon={<FaEdit className="w-8 h-8" />}
                color="bg-[#4C82C3]"
                actions={[
                  'Form your team (3 students)',
                  'Find a faculty coach',
                  'Register online'
                ]}
              />

              <TimelineEvent
                date="October – November 2025"
                title="Online Round (Optional)"
                description="An optional online preliminary round to help teams prepare and get familiar with the contest format."
                icon={<FaLaptopCode className="w-8 h-8" />}
                color="bg-[#4C82C3]"
                actions={[
                  'Practice problems available',
                  'Get familiar with contest platform',
                  'Warm up with your team'
                ]}
              />

              <TimelineEvent
                date="December 2025 – January 2026"
                title="Sri Lanka Onsite Regional"
                description="The main national contest held onsite. This is where history will be made as Sri Lanka hosts its first-ever ICPC contest!"
                icon={<FaTrophy className="w-8 h-8" />}
                color="bg-[#FDBA11]"
                highlight={true}
                actions={[
                  '5-hour onsite competition',
                  'Solve 5-10 programming problems',
                  'Compete for national championship',
                  'Winners qualify for Asia West Regional'
                ]}
              />

              <TimelineEvent
                date="March 2026"
                title="ICPC Asia West Regional"
                description="The champion team from Sri Lanka will represent the country at the ICPC Asia West Regional Contest."
                icon={<FaGlobeAsia className="w-8 h-8" />}
                color="bg-[#B22E1B]"
                actions={[
                  'Represent Sri Lanka internationally',
                  'Compete with top teams from Asia West',
                  'Potential advancement to World Finals'
                ]}
              />

              <TimelineEvent
                date="August 2026"
                title="ICPC World Finals"
                description="The ultimate destination - compete with the world's best programming teams at the ICPC World Finals."
                icon={<FaGlobeAsia className="w-8 h-8" />}
                color="bg-[#B22E1B]"
                actions={[
                  'Global competition',
                  'Meet teams from 100+ countries',
                  'Compete for world championship'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Reference</h2>
          <div className="bg-[#4C82C3]/10 border-2 border-[#4C82C3] rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              <QuickDate date="September 2025" event="Registrations Open" />
              <QuickDate date="October–November 2025" event="Online Round (Optional)" />
              <QuickDate date="December 2025 – January 2026" event="Sri Lanka Onsite Regional" highlight={true} />
              <QuickDate date="March 2026" event="ICPC Asia West" />
              <QuickDate date="August 2026" event="ICPC World Finals" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4C82C3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Don&apos;t Miss Out!</h2>
          <p className="text-xl text-white mb-8">
            Registration opens in September 2025. Be ready to register your team!
          </p>
          <Link
            href="/registration"
            className="inline-block bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FDBA11]/90 transition-all duration-300 transform hover:scale-105"
          >
            Registration Details
          </Link>
        </div>
      </section>
    </main>
  );
}

function TimelineEvent({ date, title, description, icon, color, highlight, actions }) {
  return (
    <div className="relative pl-20">
      {/* Icon Circle */}
      <div className={`absolute left-0 w-16 h-16 ${color} rounded-full flex items-center justify-center text-white shadow-lg`}>
        {icon}
      </div>

      {/* Content */}
      <div className={`${highlight ? 'bg-[#FDBA11]/10 border-2 border-[#FDBA11]' : 'bg-white'} rounded-xl shadow-md p-6`}>
        <div className="text-sm font-semibold text-gray-600 mb-2">{date}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        {actions && actions.length > 0 && (
          <ul className="space-y-2">
            {actions.map((action, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{action}</span>
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
    <div className={`flex items-center justify-between p-4 ${highlight ? 'bg-[#FDBA11]/20 border-l-4 border-[#FDBA11]' : 'bg-white'} rounded-lg`}>
      <span className="font-semibold text-gray-900">{date}</span>
      <span className="text-gray-700">{event}</span>
    </div>
  );
}
