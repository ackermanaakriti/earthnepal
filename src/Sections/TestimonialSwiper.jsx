import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../Components/TestimonialCard";
import { testimonialData } from "../Data/testimonial";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";


const TestimonialSwiper = () => {
    let sliderRef = useRef();
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode:true
  };
  return (
    <>
      <div className="bg-darkblue pb-[90px] pt-[30px] testomonialSwiper">
        <div className="container m-auto ">
          <div className="testimonial-wrap">
          <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
              {testimonialData.map((item, index) => (
                <TestimonialCard />
              ))}
            </Slider>
            <div style={{textAlign:'center'}} className="slickbutton">
        <button className="buttonprev" onClick={previous}>
          <span className="text-[15px]"><FaChevronLeft/></span>
        </button>
        <button className="buttonnext" onClick={next}>
         <span className="text-[14px]"><FaChevronRight/></span>
        </button>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSwiper;
