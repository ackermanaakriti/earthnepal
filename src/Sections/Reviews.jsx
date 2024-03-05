import React from 'react'
import ReviewForm from '../Components/ReviewForm'

const Reviews = () => {
  return (
    <>
    <div className='bg-bgGray reviewSection'>

  
    <div className='container mx-auto py-[50px]'>
        <div className='grid grid-cols-6'>
            <div className='form col-span-2'>
            <div className='flex items-center gap-[20px] py-[10px]'>
                <img className='object-cover h-[100%]' src={'./images/comma.png'}/>
                <div>
                <h3 className='text-[36px] text-textC font-nunito font-[700]'>Reviews</h3>
                <p className='text-[16px] text-hueBlue font-nunito font-[600] m-0'>Share us your Travel Experiences & Stories</p>
                </div>
               
            </div>
                <ReviewForm/>
            </div>
           
            <div className='col-span-4'>
                <div className='flex justify-end'>
                    <figure className='figureA'>
                        <img src={'./images/imageA.jpg'}/>
                    </figure>
                    <figure className='figureB'>
                        <img src={'./images/imageA.jpg'}/>
                    </figure>
                </div>

            </div>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Reviews