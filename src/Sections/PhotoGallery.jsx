import React from 'react'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

const PhotoGallery = () => {
  return (
   <>
   <div className='bg-bgGray photgallery'>
    <div className='container m-auto grid grid-cols-2 '>
        <div className='col-span-1 py-[13em]'>
            <h2 className='text-textC font-nunito text-[30px] font-semibold'>Photo Gallery</h2>
            <p className='text-hueBlue font-nunito text-[16px] font-semibold'>View Our Moments captured in pixels, stories told in frames.</p>
            <button className='bg-PrimaryRed text-white px-[20px] rounded-[5px] py-[4px] mt-[20px]'>View Gallery</button>
          
        </div>
        {/* <div className='col-span-1'>
           <figure className='col-span-6/6'>
            <img className= 'rounded-[20px] object-cover h-[200px] ' src='./images/imageA.jpg'/>
           </figure>
           <figure className='flex gap-[18px] pt-[18px]'>
            <img className='rounded-[20px]  object-cover h-[180px] w-full' src='./images/imageB.jpg'/>
            <img className=' rounded-[20px] object-cover   h-[180px] w-full' src='./images/image5.jpg'/>
           </figure>
           <figur className='flex gap-[18px]  pt-[18px]'>
           <img className=' rounded-[20px] object-cover w-[30%] h-[180px] ' src='./images/imagess.jpg'/>
            <img className='  rounded-[20px] object-cover w-[70%]  h-[180px] ' src='./images/image4.jpg'/>
           </figur>
        </div> */}
       <SlideshowLightbox className='col-span-1 grid grid-cols-4 gap-x-[15px] gap-y-[15px] ' showThumbnails={true}>
  
   
  
      <img className='col-span-4 rounded-[20px] w-full object-cover h-[200px]' src='./images/imagess.jpg'/>
      
  <img className=' col-span-2  rounded-[20px] w-full object-cover h-[180px]' src='./images/image4.jpg'/>
  <img className=' col-span-2  rounded-[20px] w-full object-cover h-[180px]' src='./images/imageB.jpg'/>
  <img className=' col-span-1  rounded-[20px] w-full object-cover h-[180px]' src='./images/imageA.jpg'/>
  <img className=' col-span-3  rounded-[20px] w-full object-cover h-[180px]' src='./images/image5.jpg'/>
</SlideshowLightbox>
    </div>
   
   </div>
   </>
  )
}

export default PhotoGallery