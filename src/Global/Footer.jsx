import React from 'react'
import FlightForm from '../Components/FlightForm'
import FooterLinks from '../Sections/FooterLinks'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BsAirplaneEngines } from "react-icons/bs";
import { LuHotel } from "react-icons/lu";
import { FaGlobeAmericas } from "react-icons/fa";




const Footer = () => {
  return (
   <>
   <div className='bg-darkblue  py-[80px] footer'>
    <div className='grid grid-cols-5  gap-20 container m-auto'>
        
        <div className='col-span-2' >
        <h2 className=' uppercase text-[36px] font-nunito font-semibold text-PrimaryBlue mb-[20px]'>Book Your Ticktes Here</h2>
            <Tabs>
    <TabList>
      <Tab>
        <div className='flex'>
        <span><BsAirplaneEngines/> <p className='text-[18px] font-semibold'>FLIGHTS</p> </span>
        </div>
       </Tab>
      <Tab>
      <div className='flex'>
        <span><LuHotel/> <p className='text-[18px] font-semibold'>HOTELS</p> </span>
        </div>
      </Tab>
      <Tab>
      <div className='flex'>
        <span><FaGlobeAmericas/> <p className='text-[18px] font-semibold'>TOURS</p> </span>
        </div>
      </Tab>
    </TabList>

    <TabPanel>
    <FlightForm/>
    </TabPanel>
    <TabPanel>
    HELLO
    </TabPanel>
  </Tabs>
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