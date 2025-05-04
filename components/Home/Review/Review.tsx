"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1// this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // this is needed to tell the amount of px that should be visible.
    }
  }

  const reviews = [
    {
      image: "leol/icon.png",
      name: "Martin mwiti",
      comment: "Friendly and helpful customer service!"
    },
    {
      name: "Japhlet Munene",
      image: "leol/icon.png",
      comment: "really appreciate the professionalism, courtesy, dedication, sincerity, speed and cooperation you  have extended to me"
    },
    {
      name: "Paul Njuguna",
      image: "leol/icon.png",
      comment: "Great TAT especially for us in matatu business who need the insurance certificate very fast"
    },
    {
      name: "Joseph",
      image: "leol/icon.png",
      comment: "Well conversant with the industry"
    }
  ];
  

const Review = () => {
  return (
    <div className= "pt-16 pb-16 bg-[#fcf6fa]">
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
            Hear from our satisfied Clients
        </h1>
        <div className='mt-20 w-[90%] md:w-[80%] mx-auto'>
            <Carousel 
            arrows={true} 
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite
            responsive={responsive}
            showDots
            >
           {reviews.map((review, index) => (
        <ReviewCard 
          key={index}
          image={review.image}
          comment={review.comment}
          name={review.name}
        />
))}

            

            </Carousel>
        </div>


    </div>
)  
}

export default Review