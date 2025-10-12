import Link from 'next/link';
import { GlobeAltIcon, BriefcaseIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { FaChartLine } from 'react-icons/fa';

export const metadata = {
  title: 'About ICPC | ICPC Sri Lanka 2026',
  description: 'Learn about the International Collegiate Programming Contest - the world\'s premier programming competition',
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#4C82C3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">What is ICPC?</h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
            The Olympics of Programming
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The International Collegiate Programming Contest (ICPC) isn&apos;t just another coding challenge; 
              it&apos;s <strong>the Olympics of programming</strong>, which is the oldest, largest, and most 
              prestigious competitive programming contest in the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <StatBox number="100+" label="Countries" />
              <StatBox number="3,000+" label="Universities" />
              <StatBox number="60,000+" label="Students" />
            </div>

            <div className="bg-[#4C82C3]/10 rounded-xl p-8 my-12 border-2 border-[#4C82C3]">
              <h2 className="text-3xl font-bold text-[#4C82C3] mb-4 text-center">One Goal</h2>
              <p className="text-xl text-center text-gray-700">
                Solving problems that push the limits of human creativity and teamwork
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Historic Moment for Sri Lanka</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              And in 2025, <strong className="text-[#4C82C3]">Sri Lanka joins the map</strong>. 
              This is your chance to be part of history.
            </p>

            <div className="bg-[#FDBA11]/10 rounded-xl p-8 my-8 border-2 border-[#FDBA11]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Path to Glory</h3>
              <ul className="space-y-3">
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

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why ICPC Matters</h2>
            <div className="space-y-6">
              <FeatureBlock
                title="Global Recognition"
                description="ICPC is recognized by top universities and tech companies worldwide. Participating demonstrates exceptional problem-solving abilities and technical skills."
                icon={<GlobeAltIcon className="w-10 h-10 text-[#4C82C3]" />}
              />
              <FeatureBlock
                title="Career Opportunities"
                description="Many ICPC alumni have gone on to work at leading tech companies like Google, Facebook, Microsoft, and more."
                icon={<BriefcaseIcon className="w-10 h-10 text-[#4C82C3]" />}
              />
              <FeatureBlock
                title="Skill Development"
                description="ICPC challenges push you to master algorithms, data structures, and efficient problem-solving under pressure."
                icon={<FaChartLine className="w-10 h-10 text-[#4C82C3]" />}
              />
              <FeatureBlock
                title="Networking"
                description="Connect with brilliant minds from across the country and region, building relationships that last a lifetime."
                icon={<UserGroupIcon className="w-10 h-10 text-[#4C82C3]" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4C82C3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Competition?</h2>
          <p className="text-xl mb-8">
            Be part of the first ICPC contest in Sri Lanka&apos;s history
          </p>
          <Link
            href="/registration"
            className="inline-block bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FDBA11]/90 transition-all duration-300 transform hover:scale-105"
          >
            Register Your Team
          </Link>
        </div>
      </section>
    </main>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center border-2 border-[#4C82C3] hover:border-[#FDBA11] transition-colors">
      <div className="text-4xl font-bold text-[#4C82C3] mb-2">{number}</div>
      <div className="text-gray-700">{label}</div>
    </div>
  );
}

function PathItem({ step, title, description }) {
  return (
    <li className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-8 h-8 bg-[#4C82C3] text-white rounded-full flex items-center justify-center font-bold">
        {step}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
}

function FeatureBlock({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#4C82C3] transition-colors">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
