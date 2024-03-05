import React from 'react'
import { CardBottomImage, CardUpperImage } from '../Components/Card'
import { cardata } from '../Data/CardData'

const Hotrips = () => {
  return (
    <>
    <div className='bg-bgGray hottrip'>
    <div className='container mx-auto py-[40px]'>
        <div className='flex justify-between'>
            <img src={'./images/fire.png'}/>
            <button className='text-[16px] uppercase text-white bg-PrimaryRed px-[18px] py-[6px] rounded-[5px]'> View All</button>
        </div>
        <div className='grid grid-cols-4 gap-x-4 gap-y-[50px] py-[40px]'>
            {
                cardata.map((cardData , index)=>
                {
                    if(index%2===0)
                    {
                        return<CardBottomImage/>
                    }
                    else 
                    {
                        return<CardUpperImage/>
                    }
})
            }
        </div>
    </div>
    </div>
    </>
  )
}

export default Hotrips