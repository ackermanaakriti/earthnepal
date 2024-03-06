import React from 'react'
import { FaStar } from 'react-icons/fa'

const TestimonialCard = () => {
  return (
   <>
   <div className='bg-white testimonialCard'>
    <div className='flex gap-[10px]'>
        <div>
            <img className='h-[60px] w-[60px] rounded-[50%] border' src='./images/imageA.jpg'/>
        </div>
        <div>
            <h4 className='text-textC text-[18px] font-[700] font-nunito'>Leo</h4>
           <span className='flex gap-[10px] items-center font-nunito' > <p className='text-hueBlue text-[14px] font-nunito'> leo@gmail.com</p>

           <span><span className='flex gap-[4px] text-star'><FaStar/>  <FaStar/> <FaStar/> <FaStar/></span></span>
           </span> 
        </div>
    </div>
    <div className='pt-[30px]'>
        <p className='text-textC text-[17px] font-nunito font-[500] '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
         consectetur adipiscing elitLorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>

    </div>
   </div>
   </>
  )
}

export default TestimonialCard