import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Review/Review'
import Footer from './Footer/Footer'
import Partners from './Partners/Partners'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section id="Hero">
        <Hero />
      </section>
      <section id="WhyChoose">
        <WhyChoose />
      </section>
      <section id="Review">
        <Review />
      </section>
      <section id="Partners">
        <Partners />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  )
}

export default Home
