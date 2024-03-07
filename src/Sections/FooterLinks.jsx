import React from 'react'

const FooterLinks = () => {
  return (
   <>
   <div className='px-[60px]' >
    <form className='newssubcribe'>
        <input placeholder='Your email address'/>
        <button type='submit' className='bg-PrimaryRed text-white rounded-[5px] text-[15px] px-[20px] py-1'>Submit</button>
    </form>

    <div className='grid grid-cols-3 py-[60px]'>
        <div className=''>
            <h4 className='text-white text-[19px] font-nunito font-semibold'>Know Us Better</h4>
            <ul>
                <li className='text-[15px] pt-[5px] !font-[600] text-white font-nunito'>About us </li>
                <li className='text-[15px] pt-[5px] font-[600] text-white font-nunito'>Services </li>
                <li className='text-[15px] pt-[5px] font-[600] text-white font-nunito'>Gallery</li>
                <li className='text-[15px] pt-[5px] font-[600] text-white font-nunito'>Video Gallery</li>
            </ul>
        </div>
        <div className=''>
        <h4 className='text-white text-[19px] font-nunito font-semibold'>Quick Links</h4>
            <ul>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito' >Home </li>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>Destination </li>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>Activities</li>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>Packages </li>
            </ul>
        </div>
        <div className=''>
        <h4 className='text-white text-[19px] font-nunito font-semibold'>Contact Us</h4>
            <ul>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>+977-98560-26510 </li>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>+977-98560-26510 </li>
                
            </ul>
        </div>
    </div>

    <div className='grid grid-cols-2'>
        <div>
        <h4  className='text-white text-[19px] font-nunito font-semibold'>Send us mail @</h4>
            <ul>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>info@travelandtreknepal.com </li>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>info@travelandtreknepal.com</li>
               
            </ul>
        </div>
        <div>
        <h4 className='text-white text-[19px] font-nunito font-semibold'>Our Location</h4>
            <ul>
                <li className='text-[15px] pt-[5px] font-[400] text-white font-nunito'>Street No. 13, Barahi Chowk, Lakeside, Pokhara-6, Nepal </li>
             
               
            </ul>
        </div>
    </div>


    <div className='pt-[30px]'>
        <h4  className='text-white text-[19px] font-nunito font-semibold'>We Accept</h4>
          
         <figure className='flex'>
         <img  src='./images/mastercard.png'/>
         <img  src='./images/visa.png'/>
         </figure>
       
        </div>
        <div className='pt-[30px]'>
       
         <figure className='h-[65px]'>
         <img className='h-[100%]' src='./images/lgo.png'/>
         <p className='text-PrimaryBlue text-[14px] pt-[16px]'>(Tourism Registered No. 74050, 066/67)TAAN Member</p>
         </figure>
       
        </div>

   </div>
   </>
  )
}

export default FooterLinks