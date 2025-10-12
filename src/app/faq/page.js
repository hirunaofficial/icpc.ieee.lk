'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Registration',
      questions: [
        {
          question: 'When does registration open?',
          answer: 'Registration for ICPC Sri Lanka 2026 opens in September 2025. Make sure to register early as spots are limited!'
        },
        {
          question: 'How much is the registration fee?',
          answer: 'The registration fee is LKR 3,000 – 5,000 per team. This covers meals and logistics on contest day.'
        },
        {
          question: 'Can we register multiple teams from the same university?',
          answer: 'Yes! Multiple teams from the same university can register, subject to contest capacity. Each team must have 3 different students and a coach.'
        },
        {
          question: 'What if we don\'t have a coach?',
          answer: 'A coach is required for registration. You must find a faculty member or staff from your university to act as your team coach.'
        }
      ]
    },
    {
      category: 'Team Requirements',
      questions: [
        {
          question: 'How many members should be in a team?',
          answer: 'Each team must have exactly 3 members plus 1 coach. All members must be from the same university.'
        },
        {
          question: 'Can graduate students participate?',
          answer: 'Yes! Both undergraduate and graduate students are eligible, as long as they meet ICPC eligibility requirements.'
        },
        {
          question: 'Can team members be from different departments?',
          answer: 'Yes! Team members can be from different departments or faculties, as long as they are all enrolled at the same university.'
        }
      ]
    },
    {
      category: 'Contest Details',
      questions: [
        {
          question: 'What programming languages are allowed?',
          answer: 'C, C++, Java, Python, and other ICPC-approved programming languages. The exact list will be provided closer to the contest date.'
        },
        {
          question: 'How long is the contest?',
          answer: 'The regional contest lasts 5 hours. Teams work together to solve 8-12 programming problems.'
        },
        {
          question: 'Can we bring reference materials?',
          answer: 'Yes! Teams can bring printed reference materials (books, notes, etc.). However, no electronic devices except the provided computer are allowed.'
        },
        {
          question: 'Where will the contest be held?',
          answer: 'The contest location will be announced closer to the event date. It will be held in a major city in Sri Lanka with proper facilities.'
        }
      ]
    },
    {
      category: 'Preparation',
      questions: [
        {
          question: 'How should we prepare for ICPC?',
          answer: 'Practice solving algorithmic problems on platforms like Codeforces, LeetCode, and HackerRank. Study data structures, algorithms, and problem-solving techniques. Practice as a team!'
        },
        {
          question: 'Are there practice contests before the regional?',
          answer: 'Yes! There will be an online preliminary round in October-November 2025 to help teams prepare and qualify for the regional contest.'
        },
        {
          question: 'What topics should we focus on?',
          answer: 'Focus on data structures (graphs, trees, heaps), algorithms (sorting, searching, dynamic programming), mathematics, and string processing.'
        }
      ]
    },
    {
      category: 'After Registration',
      questions: [
        {
          question: 'What happens after we register?',
          answer: 'You\'ll receive a confirmation email with further instructions about payment, contest details, and important dates.'
        },
        {
          question: 'Can we change team members after registration?',
          answer: 'Changes may be possible before a certain deadline. Contact the organizing committee as soon as possible if you need to make changes.'
        },
        {
          question: 'How will we know if we qualify for the World Finals?',
          answer: 'Top-performing teams from the Sri Lanka Regional will qualify for the Asia West Finals. From there, the best teams advance to the ICPC World Finals.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="bg-[#4C82C3] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
              Find answers to common questions about ICPC Sri Lanka 2026
            </p>
          </div>
        </section>
      </FadeIn>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <StaggerItem key={categoryIndex}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-[#FDBA11]">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                      return (
                        <div
                          key={questionIndex}
                          className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-[#4C82C3] transition-colors"
                        >
                          <button
                            onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                            className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                          >
                            <span className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            <svg
                              className={`w-6 h-6 text-[#4C82C3] flex-shrink-0 transform transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-700 mb-8">
              Contact the ICPC Sri Lanka organizing committee for more information
            </p>
          </FadeIn>
          <ScaleIn delay={0.4}>
            <a
              href="mailto:info@icpc.lk"
              className="inline-block bg-[#4C82C3] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#4C82C3]/90 transition-all duration-300"
            >
              Contact Us
            </a>
          </ScaleIn>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn>
        <section className="py-16 bg-[#4C82C3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Register?</h2>
            <p className="text-xl text-white mb-8">
              Don&apos;t wait! Registration opens in September 2025
            </p>
            <ScaleIn delay={0.3}>
              <Link
                href="/registration"
                className="inline-block bg-[#FDBA11] text-[#4C82C3] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FDBA11]/90 transition-all duration-300"
              >
                Registration Details
              </Link>
            </ScaleIn>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
