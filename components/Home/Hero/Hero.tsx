import React from 'react'
import Image from 'next/image'

const Hero = () => {
 return (
    <div className = "w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f2f3fa]">
        <div className='flex justify-center flex col w-[90%] sm:w-[80%] h-full max-auto'>
            <div  className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Text Content */}
                <div>
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                        <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white'>News</div>
                        <div>
                            <p className='text-xs sm:text sm'>Check out our amazing deals</p>
                            </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className = "hidden lg:block">
                    <Image src="/car_pic.webp" alt="hero" width={700} height={700}/>
                </div>
       </div>
        </div>
        </div>
  
)
}

export default Hero