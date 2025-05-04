'use client';

import React from 'react';

import Image from 'next/image';


const partners = [
  './amaco.png',
  './apa.png',
  './geminia.png',
  './cic.png',
  './trident.png',
];


const Partners = () => {
    return (
        <div className="pt-16 pb-16">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          Our Partners
        </h1>

        <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div className="relative w-full">
          <div className="flex animate-marquee space-x-10">
            {[...partners, ...partners].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-20 relative">
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
      </div>
    );
  };
  
  export default Partners;