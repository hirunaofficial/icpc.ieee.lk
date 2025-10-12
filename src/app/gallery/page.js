'use client';

import Image from 'next/image';
import { useState } from 'react';

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
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Gallery</h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
            Glimpses from ICPC competitions around the world
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={`/gallery/${image.filename}`}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
              aria-label="Close"
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of ICPC Sri Lanka 2026</h2>
          <p className="text-xl mb-8">
            Create your own memories at Sri Lanka&apos;s first ICPC competition
          </p>
          <a
            href="/registration"
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Register Your Team
          </a>
        </div>
      </section>
    </main>
  );
}
