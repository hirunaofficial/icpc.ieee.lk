'use client';

import { motion } from 'framer-motion';
import { FadeInUp } from '@/components/AnimatedSection';

const staffMembers = [
  {
    name: "Dr. Upul Jayasinghe",
    position: "Regional Director",
    url: "http://people.ce.pdn.ac.lk/staff/academic/upul/"
  },
  {
    name: "Mr. Dhammika Marasinghe",
    position: "Deputy & Associate Director",
    url: "https://lk.linkedin.com/in/dhammikamarasinghe"
  },
  {
    name: "Prof. S. Vasanthapriyan",
    position: "Advisory",
    url: "https://www.sab.ac.lk/staff-directory/216"
  },
  {
    name: "Prof. Roshan G. Ragel",
    position: "Advisory",
    url: "http://people.ce.pdn.ac.lk/staff/academic/roshan-ragel/"
  },
  {
    name: "Dr. Hakim A. Usoof",
    position: "Judging Chair",
    url: "https://sci.pdn.ac.lk/scs/staff/Hakim-Usoof"
  },
  {
    name: "Dr. Tharindu Weerakoon",
    position: "Contest Chair",
    url: "http://web2.ee.pdn.ac.lk/TharinduW"
  },
  {
    name: "Mr. Biswajith Dissanayake",
    position: "Technical Chair",
    url: "http://people.ce.pdn.ac.lk/staff/academic/biswajith-dissanayake/"
  },
  {
    name: "Mr. Thamindu Sri Nirmal",
    position: "Communication Chair",
    url: "https://www.linkedin.com/in/thamindu-nirmal"
  },
  {
    name: "Ms. Yasodha Vimukthi",
    position: "Communication Chair",
    url: "http://people.ce.pdn.ac.lk/staff/academic/yasodha-vimukthi/"
  },
  {
    name: "Mr. Dineth Palliyaguru",
    position: "Communication Chair",
    url: "https://www.linkedin.com/in/dineth-palliyaguru"
  },
  {
    name: "Ms. Lithasa Jayamaha",
    position: "Finance Manager",
    url: "https://www.linkedin.com/in/lithasaj"
  },
  {
    name: "Ms. Sarani",
    position: "Volunteer Chair",
    url: null
  },
  {
    name: "Mr. Lasith",
    position: "Volunteer Chair",
    url: null
  },
  {
    name: "Ms. Rashmi Virajitha",
    position: "Volunteer Chair",
    url: null
  }
];

export default function StaffPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/54766698584_76f21665d5_k.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#143C68]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-center text-white px-4">
              Organizing Committee
            </h1>
            <div className="h-2 w-24 sm:w-32 bg-[#FDBC1D] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBC1D] px-4">
              Meet the dedicated team behind <br /> ICPC Sri Lanka 2026
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Staff Table Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#143C68] text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                        Position
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {staffMembers.map((member, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {member.url ? (
                            <a
                              href={member.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#143C68] hover:text-[#FDBC1D] font-medium hover:underline transition-colors duration-200"
                            >
                              {member.name}
                            </a>
                          ) : (
                            <span className="text-gray-900 font-medium">
                              {member.name}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {member.position}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden divide-y divide-gray-200">
                {staffMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Name
                        </span>
                        <div className="mt-1">
                          {member.url ? (
                            <a
                              href={member.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#143C68] hover:text-[#FDBC1D] font-medium hover:underline transition-colors duration-200 text-lg"
                            >
                              {member.name}
                            </a>
                          ) : (
                            <span className="text-gray-900 font-medium text-lg">
                              {member.name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Position
                        </span>
                        <p className="mt-1 text-gray-700">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Additional Information */}
          <FadeInUp delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                For inquiries, please contact us at{' '}
                <a
                  href="mailto:icpc@soc.pdn.ac.lk"
                  className="text-[#143C68] hover:text-[#FDBC1D] font-medium hover:underline"
                >
                   icpc@soc.pdn.ac.lk
                </a>
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}

