import React from 'react'
import HeroSection from '../Sections/HeroSection'
import ImageBgSection from '../Sections/ImageBgSection'
import Hotrips from '../Sections/Hotrips'
import ThrillingActi from '../Sections/ThrillingActi'
import Reviews from '../Sections/Reviews'
import TestimonialSwiper from '../Sections/TestimonialSwiper'
import DiscountTable from '../Sections/DiscountTable'
import PhotoGallery from '../Sections/PhotoGallery'
import VideoGalleryy from '../Sections/VideoGallery'

const Homepage = () => {
  return (
   <>
   <HeroSection/>
   <ImageBgSection/>
   <Hotrips/>
   <ThrillingActi/>
   <Reviews/>
   <TestimonialSwiper/>
   <DiscountTable/>
   <PhotoGallery/>
   {/* <VideoGalleryy/> */}
   </>
  )
}

export default Homepage