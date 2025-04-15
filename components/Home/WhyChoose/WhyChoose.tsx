import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose: React.FC = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why Choose Us
      </h1>

      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <WhyChooseCard
          image="/safetrust.png"
          title="Safe and Trusted"
          linkText="Learn More"
        />
        <WhyChooseCard
          image="/support.png"
          title="Dependable Customer Support"
          linkText="Learn More"
        />
        <WhyChooseCard
          image="/fast.png"
          title="Fast & Hassle-Free Process"
          linkText="Learn More"
        />
        <WhyChooseCard
          image="/coverage.png"
          title="Comprehensive Coverage Options"
          linkText="Learn More"
        />
      </div>
    </div>
  )
}

export default WhyChoose
