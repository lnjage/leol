'use client';

import React from 'react';
import Image from 'next/image';

const partners = [
  '/amaco.png',
  '/apa.png',
  '/geminia.png',
  '/cic.png',
  '/trident.png',
];

const Partners = () => {
  return (
    <div className="pt-16 pb-16 overflow-hidden">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Our Partners
      </h1>

      <div className="mt-20 w-full">
        <div className="relative whitespace-nowrap animate-marquee flex space-x-10 px-4">
          {[...partners, ...partners].map((logo, index) => (
            <div key={index} className="relative w-32 h-20 flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
