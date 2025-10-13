'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FadeIn, FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, filename: '54755925319_a8c95c4d63_3k.jpg', alt: 'ICPC Event 1' },
    { id: 2, filename: '54756036640_e17fd09ba2_k.jpg', alt: 'ICPC Event 2' },
    { id: 3, filename: '54760506656_c153ce78b8_3k.jpg', alt: 'ICPC Event 3' },
    { id: 4, filename: '54761196795_4f95803daf_o.jpg', alt: 'ICPC Event 4' },
    { id: 5, filename: '54762888219_af794c220a_k.jpg', alt: 'ICPC Event 5' },
    { id: 6, filename: '54763867697_572b983ab2_k.jpg', alt: 'ICPC Event 6' },
    { id: 7, filename: '54765652272_3b41b9d298_o.jpg', alt: 'ICPC Event 7' },
    { id: 8, filename: '54765742742_4627f90b74_o.jpg', alt: 'ICPC Event 8' },
    { id: 9, filename: '54766489486_8a75aab91f_o.jpg', alt: 'ICPC Event 9' },
    { id: 10, filename: '54766698584_76f21665d5_k.jpg', alt: 'ICPC Event 10' },
    { id: 11, filename: '54766880654_d0cf0b7e86_o.jpg', alt: 'ICPC Event 11' },
    { id: 12, filename: '54766883303_5b0dc3c134_o.jpg', alt: 'ICPC Event 12' },
    { id: 13, filename: '54782043998_27cb7988d2_k.jpg', alt: 'ICPC Event 13' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gallery/54762888219_af794c220a_k.jpg')"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center text-white">Gallery</h1>
            <div className="h-2 w-32 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
            <p className="text-3xl md:text-4xl text-center max-w-4xl mx-auto font-bold text-[#FDBA11]">
              Glimpses from ICPC competitions around the world
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Gallery Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
              <div className="h-2 w-24 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#4C82C3] font-semibold">Moments from ICPC competitions worldwide</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <StaggerItem key={image.id}>
                <button
                  className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full"
                  onClick={() => setSelectedImage(image)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImage(image);
                    }
                  }}
                  aria-label={`View ${image.alt} in full size`}
                >
                  <Image
                    src={`/gallery/${image.filename}`}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSelectedImage(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={-1}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-50"
              aria-label="Close image"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={`/gallery/${selectedImage.filename}`}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}

      {/* Inspiration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Be Part of the Legacy</h2>
              <div className="h-2 w-24 bg-[#FDBA11] mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-[#4C82C3] font-semibold max-w-3xl mx-auto">
                Join thousands of passionate programmers who have made their mark in competitive programming
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeInUp>
              <div className="text-center p-8 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl font-bold text-[#4C82C3] mb-4">50+</div>
                <div className="text-xl text-gray-700 font-semibold">Countries Participating</div>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="text-center p-8 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl font-bold text-[#B22E1B] mb-4">65K+</div>
                <div className="text-xl text-gray-700 font-semibold">Students Worldwide</div>
              </div>
            </FadeInUp>
            <FadeInUp>
              <div className="text-center p-8 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl font-bold text-[#FDBA11] mb-4">45+</div>
                <div className="text-xl text-gray-700 font-semibold">Years of Excellence</div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <FadeIn>
        <section className="py-24 bg-[#FDBA11]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Be Part of ICPC Sri Lanka 2026</h2>
            <p className="text-2xl text-gray-800 mb-12 font-semibold">
              Create your own memories at Sri Lanka&apos;s first ICPC competition
            </p>
            <ScaleIn delay={0.3}>
              <Link
                href="/registration"
                className="inline-block bg-[#4C82C3] text-white px-12 py-4 rounded-2xl font-bold text-xl hover:bg-[#3a6ba3] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                Register Your Team
              </Link>
            </ScaleIn>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
