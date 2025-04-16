import React from 'react'
import Image from 'next/image'

type Props = {
  title: string
  image: string
  linkText: string
}

const WhyChooseCard = ({ image, title, linkText }: Props) => {
  return (
    <div className="text-center">
      <Image 
        src={image} 
        alt={title} 
        width={80} 
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-lg mt-5 mb-5 font-semibold text-blue-400">
        {title}
      </h1>

    <p className='text-gray-600 text-center font-medium text-sm mb-7'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aspernatur beatae dolorem illum, animi repellat quae voluptatum dolore quibusdam incidunt delectus. Saepe obcaecati debitis neque voluptate corporis, reprehenderit deserunt amet?
    </p>
    
    <p className = "text-center font-sans text-black hover:text-blue-600 transition-all duration-200 cursor-pointer">
      {linkText} &#8594;
    </p>
    
    </div>
  )
}

export default WhyChooseCard
