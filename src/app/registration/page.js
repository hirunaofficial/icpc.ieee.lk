'use client';

import Link from 'next/link';
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaMoneyBill, 
  FaGraduationCap, 
  FaCalendar, 
  FaBuilding, 
  FaLaptop, 
  FaMapMarkerAlt, 
  FaEnvelope 
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

      {/* Registration Steps */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Registration Process</h2>
              <div className="h-2 w-24 bg-[#FDBC1D] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#143C68] font-semibold">Follow these simple steps to register your team</p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <RegistrationStep
                number="1"
                title="Register Globally"
                description="Register your team at the official ICPC website"
                details={[
                  'Visit the ICPC official registration portal',
                  'Create an account for your team',
                  'Fill in team and member details',
                  'Your coach must complete the registration'
                ]}
                buttonText="Visit ICPC Website"
                buttonLink="https://icpc.global"
                external={true}
              />
            </StaggerItem>

            <StaggerItem>
              <RegistrationStep
                number="2"
                title="Register Locally"
                description="Complete your registration with ICPC Sri Lanka"
                details={[
                  'Fill in the local registration form',
                  'Provide university and team information',
                  'Submit required documents',
                  'Await confirmation email'
                ]}
                buttonText="Register with ICPC Sri Lanka"
                buttonLink="#"
              />
            </StaggerItem>

            <StaggerItem>
              <RegistrationStep
                number="3"
                title="Pay Registration Fee"
                description="Complete payment to confirm your registration"
                details={[
                  'Registration fee: LKR 3,000 – 5,000 per team',
                  'Fee covers meals and logistics on contest day',
                  'Payment instructions will be provided after registration',
                  'Secure your spot early!'
                ]}
              />
            </StaggerItem>
          </StaggerContainer>
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

function RegistrationStep({ number, title, description, details, buttonText, buttonLink, external }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-start space-x-6 mb-8">
        <div className="flex-shrink-0 w-16 h-16 bg-[#143C68] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl">
          {number}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-lg text-[#143C68] font-semibold">{description}</p>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {details && details.map((detail, index) => (
          <li key={`${title}-${index}`} className="flex items-start space-x-3 text-gray-700">
            <svg className="w-6 h-6 text-[#FDBC1D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg font-medium">{detail}</span>
          </li>
        ))}
      </ul>

      {buttonText && (
        external ? (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#143C68] text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            {buttonText} →
          </a>
        ) : (
          <Link
            href={buttonLink || '#'}
            className="inline-block bg-[#143C68] text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-[#1e4a7a] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            {buttonText} →
          </Link>
        )
      )}
    </div>
  );
}

function RequirementCard({ icon, title, items }) {
  return (
    <div className="bg-gray-50 border-2 border-transparent hover:border-[#143C68] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center space-x-4 mb-6">
        <div className="text-[#143C68] text-3xl">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items && items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex items-start space-x-3 text-gray-700">
            <span className="text-[#FDBC1D] font-bold text-xl">•</span>
            <span className="text-lg font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start space-x-6 pb-8 border-b-2 border-gray-200 last:border-0">
      <div className="text-[#143C68] flex-shrink-0 text-2xl">{icon}</div>
      <div>
        <h4 className="text-2xl font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-lg text-gray-700 font-medium">{content}</p>
      </div>
    </div>
  );
}
