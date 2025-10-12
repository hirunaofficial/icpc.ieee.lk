'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#4C82C3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
            Everything you need to know about ICPC Sri Lanka 2026
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <FAQItem
              question="How long is the contest and how many problems are there?"
              answer="The contest runs for 5 hours with 5–10 problems of varying difficulty. Each problem usually requires around 45 minutes to an hour to solve."
            />
            
            <FAQItem
              question="How are teams formed?"
              answer="Each team has 3 students from the same university and must be officially registered by a faculty/staff coach."
            />
            
            <FAQItem
              question="What programming languages are allowed?"
              answer="Standard ICPC-approved languages (C, C++, Java, Python, etc.) will be supported on the judging system."
            />
            
            <FAQItem
              question="How is the contest judged?"
              answer="Solutions are submitted to a local offline system (PC² or equivalent). Teams are ranked by the number of problems solved, with penalty time as a tiebreaker."
            />
            
            <FAQItem
              question="Is the contest online or offline?"
              answer="The Sri Lanka contest will be primarily offline in December 2025 or January 2026."
            />
            
            <FAQItem
              question="Is there a participation limit per university?"
              answer="No strict limit — multiple teams from the same university can register, subject to contest capacity."
            />
            
            <FAQItem
              question="What is the tradition with balloons in ICPC?"
              answer="In ICPC contests worldwide, teams receive a balloon each time they solve a problem. It's a fun tradition that adds color and excitement as teams show their progress during the contest."
            />
            
            <FAQItem
              question="What's at stake for the winners?"
              answer="The champion team from Sri Lanka will represent the country at the ICPC Asia West Regional and possibly advance to the ICPC World Finals."
            />

            <FAQItem
              question="What is the registration fee?"
              answer="The registration fee is LKR 3,000–5,000 per team, which covers meals and logistics on contest day."
            />

            <FAQItem
              question="Can graduate students participate?"
              answer="Yes, both undergraduate and graduate students are eligible to participate, subject to ICPC eligibility rules."
            />

            <FAQItem
              question="Do all team members need to be from the same department?"
              answer="No, team members can be from different departments, but they must all be from the same university."
            />

            <FAQItem
              question="What should we bring to the contest?"
              answer="Bring your university ID cards, stationery (pen and paper), and your problem-solving mindset! Computers and other equipment will be provided."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Reach out to us through our social media channels
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/icpclk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#4C82C3] hover:text-[#4C82C3]/80 font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#B22E1B] hover:text-[#B22E1B]/80 font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4C82C3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Compete?</h2>
          <p className="text-xl text-white mb-8">
            Register your team and be part of Sri Lanka&apos;s ICPC history
          </p>
          <Link
            href="/registration"
            className="inline-block bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FDBA11]/90 transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
