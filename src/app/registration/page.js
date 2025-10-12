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

export const metadata = {
  title: 'Registration | ICPC Sri Lanka 2026',
  description: 'Register your team for ICPC Sri Lanka 2026',
};

export default function Registration() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Registration</h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
            Ready to compete? Here&apos;s how to register your team
          </p>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Registration Process</h2>
          
          <div className="space-y-8">
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
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Important Information</h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
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
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Check out our FAQ page for answers to common questions
          </p>
          <Link
            href="/faq"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View FAQ
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready to Register?</h2>
          <p className="text-xl text-blue-900 mb-8">
            Registration opens in September 2025. Be prepared!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://icpc.global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all duration-300"
            >
              ICPC Official Site
            </a>
            <Link
              href="/"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function RegistrationStep({ number, title, description, details, buttonText, buttonLink, external }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl">
          {number}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {buttonText && (
        external ? (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            {buttonText} →
          </a>
        ) : (
          <Link
            href={buttonLink}
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
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
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-700">
            <span className="text-blue-600 font-bold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start space-x-4 pb-6 border-b border-gray-200 last:border-0">
      <div className="text-blue-600 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}
