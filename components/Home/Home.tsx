import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Review/Review'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <WhyChoose/>
      <Review/>

    </div>
  )
}

export default Home
