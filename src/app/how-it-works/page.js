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

export const metadata = {
  title: 'How It Works | ICPC Sri Lanka 2026',
  description: 'Learn about the contest format, rules, and what to expect at ICPC Sri Lanka 2026',
};

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#4C82C3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">How It Works?</h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
            Everything you need to know about the contest format
          </p>
        </div>
      </section>

      {/* Contest Format */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contest Format</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FormatCard
              icon={<FaUsers className="w-12 h-12" />}
              title="Team Size"
              value="3 Students"
              description="Each team must consist of 3 students from the same university"
            />
            <FormatCard
              icon={<FaGraduationCap className="w-12 h-12" />}
              title="Coach Required"
              value="1 Coach"
              description="A faculty member or staff to guide and officially register your team"
            />
            <FormatCard
              icon={<FaClock className="w-12 h-12" />}
              title="Duration"
              value="5 Hours"
              description="5 hours of intense competitive programming"
            />
            <FormatCard
              icon={<FaPuzzlePiece className="w-12 h-12" />}
              title="Problems"
              value="5-10 Problems"
              description="Problems of varying difficulty levels to test your skills"
            />
          </div>

          {/* Contest Environment */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Contest Environment</h3>
            <div className="space-y-6">
              <EnvironmentDetail
                icon={<FaDesktop className="w-8 h-8 text-[#4C82C3]" />}
                title="One Computer Per Team"
                description="Teams share a single computer, requiring strategic coordination and time management"
              />
              <EnvironmentDetail
                icon={<FaWifi className="w-8 h-8 text-[#4C82C3]" />}
                title="Offline Mode"
                description="No internet access during the contest - just you, your teammates, and your skills"
              />
              <EnvironmentDetail
                icon={<FaCog className="w-8 h-8 text-[#4C82C3]" />}
                title="Programming Languages"
                description="Standard ICPC-approved languages: C, C++, Java, Python, and others"
              />
              <EnvironmentDetail
                icon={<FaTrophy className="w-8 h-8 text-[#4C82C3]" />}
                title="Balloon Tradition"
                description="Teams receive a colored balloon for each problem solved - a fun ICPC tradition!"
              />
            </div>
          </div>

          {/* Problem Solving */}
          <div className="bg-[#4C82C3]/10 border-2 border-[#4C82C3] rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Problem Solving Process</h3>
            <div className="space-y-4">
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

          {/* Judging System */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Judging & Scoring</h3>
            <p className="text-lg text-gray-700 mb-6">
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

          {/* What to Bring */}
          <div className="bg-[#FDBA11]/10 border-2 border-[#FDBA11] rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What to Bring</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BringItem icon={<FaIdCard className="w-8 h-8 text-[#4C82C3]" />} item="University ID Card" />
              <BringItem icon={<FaPen className="w-8 h-8 text-[#4C82C3]" />} item="Stationery (pen, paper)" />
              <BringItem icon={<FaLightbulb className="w-8 h-8 text-[#4C82C3]" />} item="Your problem-solving mindset" />
              <BringItem icon={<FaHandPaper className="w-8 h-8 text-[#4C82C3]" />} item="Team spirit and collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4C82C3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Compete?</h2>
          <p className="text-xl mb-8">
            Form your team of 3 and get ready for an unforgettable experience
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

function FormatCard({ icon, title, value, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-[#4C82C3] mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-[#4C82C3] mb-3">{value}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function EnvironmentDetail({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-10 h-10 bg-[#4C82C3] text-white rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function JudgeResult({ verdict, color, description }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
      <div className={`${color} w-4 h-4 rounded-full flex-shrink-0`}></div>
      <div className="flex-1">
        <span className="font-semibold text-gray-900">{verdict}</span>
        <span className="text-gray-600"> - {description}</span>
      </div>
    </div>
  );
}

function BringItem({ icon, item }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-lg text-gray-900">{item}</span>
    </div>
  );
}
