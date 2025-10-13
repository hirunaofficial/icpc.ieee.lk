'use client';

import Link from 'next/link';
import { 
  FaUsers, 
  FaGraduationCap, 
  FaClock, 
  FaPuzzlePiece,
  FaDesktop,
  FaWifi,
  FaCog,
  FaTrophy,
  FaIdCard,
  FaPen,
  FaLightbulb,
  FaHandPaper
} from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54760506656_c153ce78b8_3k.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center text-white">How It Works?</h1>
            <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
            <p className="text-3xl md:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBA11]">
              Everything you need to know about the contest format
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contest Format */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contest Format</h2>
              <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#4C82C3] font-semibold">Key details about the competition structure</p>
            </div>
          </FadeIn>
          
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
              <StaggerItem>
                <FormatCard
                  icon={<FaUsers className="w-16 h-16" />}
                  title="Team Size"
                  value="3 Students"
                  description="Each team must consist of 3 students from the same university"
                />
              </StaggerItem>
              <StaggerItem>
                <FormatCard
                  icon={<FaGraduationCap className="w-16 h-16" />}
                  title="Coach Required"
                  value="1 Coach"
                  description="A faculty member or staff to guide and officially register your team"
                />
              </StaggerItem>
              <StaggerItem>
                <FormatCard
                  icon={<FaClock className="w-16 h-16" />}
                  title="Duration"
                  value="5 Hours"
                  description="5 hours of intense competitive programming"
                />
              </StaggerItem>
              <StaggerItem>
                <FormatCard
                  icon={<FaPuzzlePiece className="w-16 h-16" />}
                  title="Problems"
                  value="5-10 Problems"
                  description="Problems of varying difficulty levels to test your skills"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Contest Environment */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 mb-20">
              <h3 className="text-4xl font-bold text-[#4C82C3] mb-10 text-center">Contest Environment</h3>
              <div className="h-1 w-20 bg-[#FDBA11] mx-auto mb-12 rounded-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EnvironmentDetail
                  icon={<FaDesktop className="w-12 h-12 text-[#4C82C3]" />}
                  title="One Computer Per Team"
                  description="Teams share a single computer, requiring strategic coordination and time management"
                />
                <EnvironmentDetail
                  icon={<FaWifi className="w-12 h-12 text-[#4C82C3]" />}
                  title="Offline Mode"
                  description="No internet access during the contest - just you, your teammates, and your skills"
                />
                <EnvironmentDetail
                  icon={<FaCog className="w-12 h-12 text-[#4C82C3]" />}
                  title="Programming Languages"
                  description="Standard ICPC-approved languages: C, C++, Java, Python, and others"
                />
                <EnvironmentDetail
                  icon={<FaTrophy className="w-12 h-12 text-[#4C82C3]" />}
                  title="Balloon Tradition"
                  description="Teams receive a colored balloon for each problem solved - a fun ICPC tradition!"
                />
              </div>
            </div>
          </FadeIn>

          {/* Problem Solving */}
          <FadeIn delay={0.5}>
            <div className="bg-[#FDBA11] rounded-3xl shadow-2xl p-12 md:p-16 mb-20">
              <h3 className="text-4xl font-bold text-[#4C82C3] mb-10 text-center">Problem Solving Process</h3>
              <div className="h-1 w-20 bg-[#4C82C3] mx-auto mb-12 rounded-full"></div>
              <div className="space-y-8">
                <ProcessStep
                  number="1"
                  title="Read & Understand"
                  description="Analyze the problem statement and identify the core challenge"
                />
                <ProcessStep
                  number="2"
                  title="Design Solution"
                  description="Discuss with teammates and design an efficient algorithm"
                />
                <ProcessStep
                  number="3"
                  title="Implement"
                  description="Code the solution in your chosen programming language"
                />
                <ProcessStep
                  number="4"
                  title="Test"
                  description="Test your solution with sample inputs and edge cases"
                />
                <ProcessStep
                  number="5"
                  title="Submit"
                  description="Submit to the judging system and get immediate feedback"
                />
              </div>
            </div>
          </FadeIn>

          {/* Judging System */}
          <FadeIn delay={0.7}>
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 mb-20">
              <h3 className="text-4xl font-bold text-[#4C82C3] mb-8 text-center">Judging & Scoring</h3>
              <div className="h-1 w-20 bg-[#FDBA11] mx-auto mb-12 rounded-full"></div>
              <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed max-w-4xl mx-auto">
                Solutions are submitted to a local offline judging system (PC² or equivalent). 
                Your submission will be tested against hidden test cases.
              </p>
              
              <div className="space-y-4 mb-8">
                <JudgeResult
                  verdict="Accepted (AC)"
                  color="bg-[#4C82C3]"
                  description="Your solution is correct! You'll receive a balloon"
                />
                <JudgeResult
                  verdict="Wrong Answer (WA)"
                  color="bg-[#B22E1B]"
                  description="Your solution produces incorrect output"
                />
                <JudgeResult
                  verdict="Time Limit Exceeded (TLE)"
                  color="bg-[#FDBA11]"
                  description="Your solution is too slow"
                />
                <JudgeResult
                  verdict="Runtime Error (RE)"
                  color="bg-[#B22E1B]"
                  description="Your program crashed during execution"
                />
                <JudgeResult
                  verdict="Compilation Error (CE)"
                  color="bg-gray-500"
                  description="Your code doesn't compile"
                />
              </div>

              <div className="bg-[#4C82C3]/10 border-2 border-[#4C82C3] rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Ranking System</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#4C82C3] font-bold">1.</span>
                    <span>Teams are ranked by the <strong>number of problems solved</strong></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#4C82C3] font-bold">2.</span>
                    <span><strong>Penalty time</strong> is used as a tiebreaker (calculated from submission time + wrong submissions)</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* What to Bring */}
          <ScaleIn delay={0.9}>
            <div className="bg-gray-50 rounded-3xl shadow-2xl p-12 md:p-16">
              <h3 className="text-4xl font-bold text-[#4C82C3] mb-8 text-center">What to Bring</h3>
              <div className="h-1 w-20 bg-[#FDBA11] mx-auto mb-12 rounded-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BringItem icon={<FaIdCard className="w-12 h-12 text-[#4C82C3]" />} item="University ID Card" />
                <BringItem icon={<FaPen className="w-12 h-12 text-[#4C82C3]" />} item="Stationery (pen, paper)" />
                <BringItem icon={<FaLightbulb className="w-12 h-12 text-[#4C82C3]" />} item="Your problem-solving mindset" />
                <BringItem icon={<FaHandPaper className="w-12 h-12 text-[#4C82C3]" />} item="Team spirit and collaboration" />
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#4C82C3] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-6xl font-bold mb-8">Ready to Compete?</h2>
            <p className="text-2xl mb-12 font-semibold">
              Form your team of 3 and get ready for an unforgettable experience
            </p>
          </FadeIn>
          <ScaleIn delay={0.3}>
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 bg-[#FDBA11] text-[#4C82C3] px-12 py-6 rounded-3xl text-2xl font-bold hover:bg-[#FDBA11]/90 transition-all duration-300 shadow-2xl hover:-translate-y-2"
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

function FormatCard({ icon, title, value, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-10 text-center">
      <div className="text-[#4C82C3] mb-8 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="text-4xl font-bold text-[#4C82C3] mb-6">{value}</div>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
}

function EnvironmentDetail({ icon, title, description }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h4 className="text-2xl font-bold text-[#4C82C3] mb-3">{title}</h4>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-14 h-14 bg-[#4C82C3] text-white rounded-full flex items-center justify-center font-bold text-2xl">
          {number}
        </div>
        <div>
          <h4 className="text-2xl font-bold text-[#4C82C3] mb-3">{title}</h4>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function JudgeResult({ verdict, color, description }) {
  return (
    <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all duration-300">
      <div className={`${color} w-6 h-6 rounded-full flex-shrink-0`}></div>
      <div className="flex-1">
        <span className="font-bold text-gray-900 text-lg">{verdict}</span>
        <span className="text-gray-600 text-lg"> - {description}</span>
      </div>
    </div>
  );
}

function BringItem({ icon, item }) {
  return (
    <div className="flex items-center space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-xl font-semibold text-gray-900">{item}</span>
    </div>
  );
}
