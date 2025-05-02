import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Review/Review'
import Footer from './Footer/Footer'
import Partners from './Partners/Partners'


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <WhyChoose/>
      <Review/>
      <Partners/>
      <Footer />
    

    </div>
  )
}

export default Home
