'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaMoneyBill, 
  FaGraduationCap, 
  FaCalendar, 
  FaBuilding, 
  FaLaptop, 
  FaMapMarkerAlt, 
  FaEnvelope,
  FaClock,
  FaWifi,
  FaTrophy,
  FaUniversity,
  FaFileAlt,
  FaWhatsapp,
  FaGlobe,
  FaLightbulb,
  FaCheckCircle
} from 'react-icons/fa';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function Registration() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gallery/54765652272_3b41b9d298_o.jpg')"
            }}
          ></div>
          <div className="absolute inset-0 bg-[#143C68]/90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white px-4">Registration</h1>
            <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-8 sm:mb-10 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FDBC1D] font-semibold max-w-4xl mx-auto px-4">
              Ready to compete? Here&apos;s how to register your team
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Registration Process Tabs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Registration Process</h2>
              <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#143C68] font-semibold">Choose your registration path</p>
            </div>
          </FadeIn>
          
          <RegistrationTabs />
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Requirements</h2>
              <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#143C68] font-semibold">Everything you need to know before registering</p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <RequirementCard
                icon={<FaUsers className="w-8 h-8" />}
                title="Team Composition"
                items={[
                  '3 students from the same university',
                  'All members must be currently enrolled',
                  'Undergraduate or graduate students eligible',
                  'Each student can only be on one team'
                ]}
              />
            </StaggerItem>
            
            <StaggerItem>
              <RequirementCard
                icon={<FaChalkboardTeacher className="w-8 h-8" />}
                title="Coach"
                items={[
                  '1 faculty member or staff as coach',
                  'Coach must be affiliated with the university',
                  'Coach handles team registration',
                  'Coach guides team preparation (optional)'
                ]}
              />
            </StaggerItem>

            <StaggerItem>
              <RequirementCard
                icon={<FaGraduationCap className="w-8 h-8" />}
                title="Eligibility"
                items={[
                  'Must be a university student',
                  'Valid university ID required',
                  'Follow ICPC eligibility rules',
                  'Check ICPC website for detailed rules'
                ]}
              />
            </StaggerItem>

            <StaggerItem>
              <RequirementCard
                icon={<FaMoneyBill className="w-8 h-8" />}
                title="Registration Fee"
                items={[
                  'LKR 3,000 – 5,000 per team',
                  'Covers meals on contest day',
                  'Covers event logistics',
                  'Early bird discounts may apply'
                ]}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Important Information</h2>
              <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#143C68] font-semibold">Key details about the registration process</p>
            </div>
          </FadeIn>
          
          <ScaleIn delay={0.2}>
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 space-y-8">
              <InfoItem
                icon={<FaCalendar className="w-6 h-6" />}
                title="Registration Opens"
                content="September 2025"
              />
              <InfoItem
                icon={<FaBuilding className="w-6 h-6" />}
                title="Teams Per University"
                content="Multiple teams from the same university can register (subject to contest capacity)"
              />
              <InfoItem
                icon={<FaLaptop className="w-6 h-6" />}
                title="Programming Languages"
                content="C, C++, Java, Python, and other ICPC-approved languages"
              />
              <InfoItem
                icon={<FaMapMarkerAlt className="w-6 h-6" />}
                title="Contest Location"
                content="To be announced (Major city in Sri Lanka)"
              />
              <InfoItem
                icon={<FaEnvelope className="w-6 h-6" />}
                title="Contact"
                content="For questions, contact ICPC Sri Lanka organizing committee"
              />
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <div className="h-2 w-32 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
            </div>
          </FadeIn>
          
          <PartnershipContent />
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Have Questions?</h2>
            <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-10 rounded-full"></div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-[#143C68] font-semibold mb-12">
              Check out our FAQ page for answers to common questions
            </p>
          </FadeIn>
          <ScaleIn delay={0.4}>
            <Link
              href="/faq"
              className="inline-block bg-[#143C68] text-white px-12 py-4 rounded-2xl text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              View FAQ
            </Link>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-24 bg-[#FDBC1D]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-[#143C68] mb-8">Ready to Register?</h2>
            <p className="text-2xl text-[#143C68] font-semibold mb-12">
              Registration opens in September 2025. Be prepared!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ScaleIn delay={0.3}>
                <a
                  href="https://icpc.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#143C68] text-white px-12 py-4 rounded-2xl text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                >
                  ICPC Official Site
                </a>
              </ScaleIn>
              <ScaleIn delay={0.5}>
                <Link
                  href="/"
                  className="inline-block bg-white text-[#143C68] px-12 py-4 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                >
                  Back to Home
                </Link>
              </ScaleIn>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}

function RegistrationTabs() {
  const [activeTab, setActiveTab] = useState('preliminary');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 border-b-4 border-gray-200">
        <button
          onClick={() => setActiveTab('preliminary')}
          className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-t-xl sm:rounded-t-2xl transition-all duration-300 ${
            activeTab === 'preliminary'
              ? 'bg-[#143C68] text-white border-b-4 border-[#FDBC1D]'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Preliminary Online Round
        </button>
        <button
          onClick={() => setActiveTab('regional')}
          className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-t-xl sm:rounded-t-2xl transition-all duration-300 ${
            activeTab === 'regional'
              ? 'bg-[#143C68] text-white border-b-4 border-[#FDBC1D]'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Regional Onsite Round
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
        {activeTab === 'preliminary' ? <PreliminaryRegistrationContent /> : <RegionalRegistrationContent />}
      </div>
    </div>
  );
}

function PreliminaryRegistrationContent() {
  const [showRegistrationSteps, setShowRegistrationSteps] = useState(false);

  if (showRegistrationSteps) {
    return (
      <div className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <RegisterLocallyCard disabled={false} />
          <RegisterGloballyCard />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <RegistrationInfoPoint
          icon={<FaFileAlt className="w-6 h-6" />}
          text="Register locally using the official Google Form provided."
        />
        <RegistrationInfoPoint
          icon={<FaGlobe className="w-6 h-6" />}
          text="After your local registration is verified, register your team on the ICPC Global Site following the instructions shared through the official WhatsApp group."
        />
        <RegistrationInfoPoint
          icon={<FaCheckCircle className="w-6 h-6" />}
          text="Once both registrations are complete, your team will be eligible to participate in the Preliminary Online Round."
        />
        <RegistrationInfoPoint
          icon={<FaMoneyBill className="w-6 h-6" />}
          text="No registration fee is required for the online round."
        />
      </div>
      
      <div className="pt-6 sm:pt-8 border-t-2 border-gray-200">
        <button
          onClick={() => setShowRegistrationSteps(true)}
          className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#143C68] text-white rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
        >
          Proceed to Register
        </button>
      </div>
    </div>
  );
}

function RegisterLocallyCard({ disabled = false }) {
  if (disabled) {
    return (
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#143C68] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl shadow-xl">
            2
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Register Locally</h3>
            <p className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Complete your registration with ICPC Sri Lanka</p>
          </div>
        </div>
        
        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {[
            'Fill in the local registration form',
            'Provide university and team information',
            'Submit required documents',
            'Await confirmation email'
          ].map((detail, index) => (
            <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-gray-700">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDBC1D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-medium">{detail}</span>
            </li>
          ))}
        </ul>

        <button
          disabled
          className="w-full sm:w-auto inline-block bg-gray-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg cursor-not-allowed opacity-60"
        >
          Register with ICPC Sri Lanka →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#143C68] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl shadow-xl">
          2
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Register Locally</h3>
          <p className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Complete your registration with ICPC Sri Lanka</p>
        </div>
      </div>
      
      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {[
          'Fill in the local registration form',
          'Provide university and team information',
          'Submit required documents',
          'Await confirmation email'
        ].map((detail, index) => (
          <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDBC1D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base md:text-lg font-medium">{detail}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://forms.gle/GL6q2PUikq7b6uPA6"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-block bg-[#143C68] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl text-center"
      >
        Register with ICPC Sri Lanka →
      </a>
    </div>
  );
}

function RegisterGloballyCard() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#143C68] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl shadow-xl">
          1
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Register Globally</h3>
          <p className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Register your team at the official ICPC website</p>
        </div>
      </div>
      
      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {[
          'Visit the ICPC official registration portal',
          'Create an account for your team',
          'Fill in team and member details',
          'Your coach must complete the registration'
        ].map((detail, index) => (
          <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDBC1D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base md:text-lg font-medium">{detail}</span>
          </li>
        ))}
      </ul>

          <a
        href="https://icpc.global"
            target="_blank"
            rel="noopener noreferrer"
        className="w-full sm:w-auto inline-block bg-[#143C68] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl text-center"
      >
        Visit ICPC Website →
      </a>
    </div>
  );
}

function RegionalRegistrationContent() {
  const [showRegistrationSteps, setShowRegistrationSteps] = useState(false);

  if (showRegistrationSteps) {
    return (
      <div className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <RegisterLocallyCard disabled={true} />
          <RegisterGloballyCard />
          <PayRegistrationFeeCard />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <RegistrationInfoPoint
          icon={<FaTrophy className="w-6 h-6" />}
          text="Teams qualifying from the online round must complete local registration for the onsite event."
        />
        <RegistrationInfoPoint
          icon={<FaChalkboardTeacher className="w-6 h-6" />}
          text="The coach must register the team on the ICPC Global Site for the regional round."
        />
        <RegistrationInfoPoint
          icon={<FaMoneyBill className="w-6 h-6" />}
          text="Teams are required to pay the registration fee of LKR 2,000 to confirm participation."
        />
        <RegistrationInfoPoint
          icon={<FaEnvelope className="w-6 h-6" />}
          text="Further details on payment and verification will be shared through official communication channels."
        />
      </div>
      
      <div className="pt-6 sm:pt-8 border-t-2 border-gray-200">
        <button
          onClick={() => setShowRegistrationSteps(true)}
          className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#143C68] text-white rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
        >
          Proceed to Register
        </button>
      </div>
    </div>
  );
}

function PayRegistrationFeeCard() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#143C68] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl shadow-xl">
          3
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Pay Registration Fee</h3>
          <p className="text-sm sm:text-base md:text-lg text-[#143C68] font-semibold">Complete payment to confirm your registration</p>
        </div>
      </div>
      
      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {[
          'Registration fee: LKR 2,000 per team',
          'Fee covers meals and logistics on contest day',
          'Payment instructions will be provided after registration',
          'Secure your spot early!'
        ].map((detail, index) => (
          <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDBC1D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base md:text-lg font-medium">{detail}</span>
          </li>
        ))}
      </ul>

      <button
        className="w-full sm:w-auto inline-block bg-[#143C68] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
      >
        Pay Registration Fee →
      </button>
    </div>
  );
}

function RegistrationInfoPoint({ icon, text }) {
  return (
    <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors">
      <div className="flex-shrink-0 text-[#143C68] mt-1">{icon}</div>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function RequirementCard({ icon, title, items }) {
  return (
    <div className="bg-gray-50 border-2 border-transparent hover:border-[#143C68] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
        <div className="text-[#143C68] text-2xl sm:text-3xl">{icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2 sm:space-y-3">
        {items && items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex items-start space-x-2 sm:space-x-3 text-gray-700">
            <span className="text-[#FDBC1D] font-bold text-lg sm:text-xl">•</span>
            <span className="text-base sm:text-lg font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 pb-6 sm:pb-8 border-b-2 border-gray-200 last:border-0">
      <div className="text-[#143C68] flex-shrink-0 text-xl sm:text-2xl">{icon}</div>
      <div>
        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h4>
        <p className="text-base sm:text-lg text-gray-700 font-medium">{content}</p>
      </div>
    </div>
  );
}

function PartnershipContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143C68] mb-4 sm:mb-6 px-4">
              Are You Ready for a Global Collaboration?
            </h3>
            <div className="h-2 w-20 sm:w-24 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          </div>
        </FadeIn>

        {/* Why Sponsor Section */}
        <FadeIn delay={0.2}>
          <div className="mb-12 sm:mb-16">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-4 sm:mb-6 text-center px-4">
              Why Sponsor ICPC Sri Lanka 2026?
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto px-4">
              ICPC Sri Lanka is the premier programming competition in the country, attracting the brightest minds from top universities. 
              Sponsoring this event gives your organization a strategic advantage in talent acquisition, brand positioning, and innovation leadership.
            </p>
          </div>
        </FadeIn>

        {/* Key Benefits Section */}
        <FadeIn delay={0.3}>
          <div className="mb-8 sm:mb-12">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143C68] mb-8 sm:mb-12 text-center px-4">
              Key Benefits
            </h4>
            <div className="h-1 w-16 sm:w-20 bg-[#FDBC1D] mx-auto mb-8 sm:mb-12 rounded-full"></div>
            
            <StaggerContainer>
              <div className="space-y-6 sm:space-y-8">
                <StaggerItem>
                  <BenefitCard
                    icon={<FaGlobe className="w-10 h-10" />}
                    title="Be Part of a Global Legacy"
                    description="Take part in the most prestigious programming competition in the world and connect with a global community of top programmers and innovators."
                  />
                </StaggerItem>
                <StaggerItem>
                  <BenefitCard
                    icon={<FaLightbulb className="w-10 h-10" />}
                    title="Support Innovation"
                    description="Help students develop critical skills in algorithms, problem solving, and teamwork that prepare them for future technology challenges."
                  />
                </StaggerItem>
                <StaggerItem>
                  <BenefitCard
                    icon={<FaUsers className="w-10 h-10" />}
                    title="Engage Top Talent"
                    description="Interact with students who excel in problem solving, algorithms, and teamwork."
                  />
                </StaggerItem>
                <StaggerItem>
                  <BenefitCard
                    icon={<FaTrophy className="w-10 h-10" />}
                    title="Tailored Opportunities"
                    description="Your sponsorship can include workshops, sessions for participants, promotional materials, and other benefits based on your preferences."
                  />
                </StaggerItem>
                <StaggerItem>
                  <BenefitCard
                    icon={<FaBuilding className="w-10 h-10" />}
                    title="Boost Your Brand"
                    description="Show your commitment to innovation and education while gaining recognition among students, faculty, and the tech community."
                  />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={0.5}>
          <div className="text-center pt-6 sm:pt-8 border-t-2 border-gray-200">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#143C68] mb-6 sm:mb-8 px-4">
              Partner with ICPC Sri Lanka 2026 and shape the future of technology in Sri Lanka.
            </p>
            <a
              href="mailto:contact@icpc.lk"
              className="inline-block bg-[#143C68] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              Contact Us for Partnership
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
        <div className="flex-shrink-0 text-[#143C68] bg-[#FDBC1D]/20 p-3 sm:p-4 rounded-lg sm:rounded-xl">
          {icon}
        </div>
        <div>
          <h5 className="text-xl sm:text-2xl font-bold text-[#143C68] mb-2 sm:mb-3">{title}</h5>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
