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
      <h1 className="text-lg mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h1>
      <a href="#" className="text-blue-600 underline">
        {linkText}
      </a>
    </div>
  )
}

export default WhyChooseCard
