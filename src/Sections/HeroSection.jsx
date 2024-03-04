import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { searchVar } from '../Data/Search';
import { MdNordicWalking } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";






const HeroSection = () => {
  return (
    <>
    <div className='bg-bgGray pt-[3em] pb-[5em] px-[30em] homeBanner '>
        <div className=''>
         <h1  className='text-textC text-[50px] font-bold text-center '>"EXPLORE , DREAM , <span className='text-PrimaryBlue'>WANDER</span>"</h1>
         <p className='text-textC text-[18px] font-semibold text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-[40px] items-center'>
        {
  searchVar?.map((items, index) => (
    <div className='  shadow-lg searchbuttons' key={index}>
      <span className='text-[20px] text-textC pr-[5px] '> <MdNordicWalking/> </span>
      {console.log(items)}
      <select className=' uppercase outline-none bg-transparent pr-9 text-[16px]'>
        {items?.option?.map((op, ind) => (
          <option className='uppercase' key={ind}>{op.value}</option>
        ))}
      </select>
    </div>
  ))
}
<div>
<button className='searchbtn'> <span><IoSearchSharp/></span>Search</button>

</div>
           
           
      

        </div>

    </div>
    </>
  )
}

export default HeroSection