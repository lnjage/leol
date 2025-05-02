import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Image from 'next/image';

type Props={
    
    image:string;
    name:string;
    comment:string;
}

const ReviewCard = ({image,name, comment}:Props) => {
  return (
    <div className='w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg '>
    <div>
        <FaQuoteLeft className='w-14 h-14 opacity-10 absolute top-8'/>
    </div>
          {/*image*/}
        <div className='flex justify-center mb-4'>
            <Image src={image} 
            alt={name} 
            width={250} 
            height={120} className='rounded-full' />
        </div>
    <div className='grid grid-cols-1 lg:gris-cols-5 gap-6 items-center'>
        <div className='cols-span-3 order-2 lg:order-1'>
            <p className='mt-8 text-sm sm-text-base md:text-lg font-medium leadinf-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]'>
                {comment}
            </p>
            <div className='flex items-center mt-6'>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-blue-300 w-6 h-6" />
            ))}
            </div>
            <h1 className='text-xl font-semibold mt-8'>{name}</h1>
            <p className='mt-2 text-lg text-gray-600 font-medium mb-6'>Businessman</p>
        </div>
        


    </div>
    </div>
  )
}

export default ReviewCard