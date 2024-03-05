import React from "react"
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { MdOutlineNordicWalking } from "react-icons/md";





export const CardUpperImage=()=>
{
return (
<>
 <div className="bg-white max-w-[340px] shadow-md upperImgCard">
   <figure className="w-[100%] h-[250px]">
    <img className="w-[100%] h-[100%]" src={'./images/imageA.jpg'} alt="" />
   </figure>
   <div className="py-[20px] ">
    <h4 className="text-[22px]  px-[16px] pb-[4px] text-textC font-nunito font-bold">Ghorepani- Poon Hill Trek</h4>
    <span className="text-star px-[16px] text-[18px] flex gap-[5px] items-center" ><FaStar/> <FaStar/> <FaStar/> <FaStar/> 
    <p className="text-hueBlue text-[16px] ">(1 review)</p></span>
    <div className="bg-bbb py-[6px] mt-[8px]">
    <h5 className=" text-hueBlue px-[16px] text-[16px] font-[700]">Starting from <span className="text-[#363636]">$20</span> Per Person</h5>
    </div>
    <div className="px-[16px] pb-[10px] pt-[10px]">
    <div className="iconstext"> <span><CiLocationOn/></span> <p>Annapurna,Region</p></div>
    <div className="iconstext"> <span><FiClock/></span> <p>5-7 Days</p></div>
    <div className="iconstext"> <span><MdOutlineNordicWalking/></span> <p>Trekking</p></div>
    </div>
    <div className="flex justify-end px-[16px]">
    <button className='text-[14px] uppercase text-white bg-PrimaryRed px-[20px] py-[4px] rounded-[5px]'> Explore</button>
    </div>
  
   </div>
 </div>
</>)
}

export const CardBottomImage=()=>
{
return (
<>
 <div className="bg-white  shadow-md  max-w-[340px] BottomImgCard">
   
   <div className="pt-[20px] ">
    <h4 className="text-[22px]  px-[16px] pb-[4px] text-textC font-nunito font-bold">Ghorepani- Poon Hill Trek</h4>
    <span className="text-star px-[16px] text-[18px] flex gap-[5px] items-center" ><FaStar/> <FaStar/> <FaStar/> <FaStar/> 
    <p className="text-hueBlue text-[16px] ">(1 review)</p></span>
    <div className="bg-bbb py-[6px] mt-[8px]">
    <h5 className=" text-hueBlue px-[16px] text-[16px] font-[700]">Starting from <span className="text-[#363636]">$20</span> Per Person</h5>
    </div>
    <div className="px-[16px] pb-[10px] pt-[10px]">
    <div className="iconstext"> <span><CiLocationOn/></span> <p>Annapurna,Region</p></div>
    <div className="iconstext"> <span><FiClock/></span> <p>5-7 Days</p></div>
    <div className="iconstext"> <span><MdOutlineNordicWalking/></span> <p>Trekking</p></div>
    </div>
    <div className="flex justify-end px-[16px]">
    <button className='text-[14px] uppercase text-white bg-PrimaryRed px-[20px] py-[4px] rounded-[5px]'> Explore</button>
    </div>
    
   </div>
   <figure className="w-[100%] h-[250px]">
    <img className="w-[100%] h-[100%]" src={'./images/imageA.jpg'} alt="" />
   </figure>
  
 </div>
</>)
}