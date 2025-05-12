import React from "react"
import Image from "next/image"

type Props = {
  title: string
  image: string
  description: string
}

const WhyChooseCard = ({ image, title, description }: Props) => {
  return (
    <div className="text-center min-w-[250px] max-w-[300px] flex-shrink-0">
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
        {description}
      </p>
    </div>
  )
}

export default WhyChooseCard
