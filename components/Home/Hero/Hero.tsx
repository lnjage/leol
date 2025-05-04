import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f2f3fa]">
      <div className="w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full">
          {/* Text Content */}
          <div>
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
            <div className="inline-block rounded-full bg-blue-700 text-white px-4 py-1 text-sm sm:text-base md:text-lg font-medium text-center">
                Get TPO Annual Covers
              </div>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 text-center">
                For Motor Private from as low as Ksh 4,880 and Pick-ups and Canters up to 10 tonnes at Ksh 5,665.
              </p>
              </div>
            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]">
              Your Golden Opportunity Awaits
            </h1>
            {/* Description */}
            <p className="w-fit py-1.5 px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              Let LEOL INSURANCE AGENCY assist you in transferring risk with the best insurance companies!
            </p>
          </div>

          {/* Image Content */}
          <div className="hidden lg:block">
            <Image src="./car.avif" alt="hero" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
