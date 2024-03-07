import React from 'react'
import FlightForm from '../Components/FlightForm'
import FooterLinks from '../Sections/FooterLinks'

const Footer = () => {
  return (
   <>
   <div className='bg-darkblue  py-[80px] footer'>
    <div className='grid grid-cols-5  gap-20 container m-auto'>
        <div className='col-span-2' >
            <FlightForm/>
        </div>
        <div className='col-span-3' >
            <FooterLinks/>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer