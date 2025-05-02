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
          description="Our reputation is built on years of reliability, transparency, and delivering results our clients can count on."
        />
        <WhyChooseCard
          image="/support.png"
          title="Dependable Customer Support"
          description="We’re here when you need us — with real people ready to help, answer questions, and guide you every step of the way."
        />
        <WhyChooseCard
          image="/fast.png"
          title="Fast & Hassle-Free Process"
          description="We value your time. Our simplified application and claim processes ensure efficiency without the stress."
        />
        <WhyChooseCard
          image="/coverage.png"
          title="Comprehensive Coverage Options"
          description="From personal to business insurance, we offer plans that fit your life, your needs, and your peace of mind."
        />
      </div>
    </div>
  )
}

export default WhyChoose
