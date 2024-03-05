import React, { useState } from "react";
import { imagess } from "../Data/images";
// import { useSpring } from 'react-spring/core';
import { useSpring } from "react-spring";
import { Tooltip } from "react-tooltip";
import { FaStar } from "react-icons/fa";

const ImageBgSection = () => {
  const [selectedImg, setSelectedImg] = useState();
  // const [name,setName] = useState('our Top-rated Destinations')

  // const fade = useSpring({
  //   opacity: selectedImg ? 1 : 0,
  //   config: { duration: 500 }, // Adjust the duration as needed
  // });

  const handleImageClick = (imge) => {
    setSelectedImg(imge);
  };
  // const hanldeNameclick=(nm)=>
  // {
  //     setName(nm)
  // }
  return (
    <>
      <div
        style={{ backgroundImage: `url(${selectedImg || "./images/bg.jpg"})` }}
        className=" imagebgsection"
      >
        <figure>
          {" "}
          <img src="" />{" "}
        </figure>

        <div className=" flex container mx-auto">
          <div className="w-3/5">
            <div className="w-[40%] mt-[14em]   ">
              <h3 className="text-white capitalize font-nunito leading-[1] font-bold line text-[40px]">
                Our Top-rated Destinations
              </h3>
              <button className="  mt-[20px] text-[16px] uppercase text-white bg-PrimaryRed px-[18px] py-[6px] rounded-[5px]">
                Explore
              </button>
            </div>
          </div>
          <div className="w-2/5 py-[40px] justify-center flex flex-col">
            <div className=" imagesRoundfirst   justify-center flex gap-[4em]">
              {imagess.slice(0, 3).map((imgg, index) => (
                <>
                  <figure key={index} className="figimage  inline">
                    <img
                      alt="image"
                      onMouseEnter={() => handleImageClick(imgg.image)}
                      className=""
                      src={imgg.image}
                    />
                    <Tooltip
                      style={{
                        backgroundColor: "white",
                        padding: "20px 30px",
                        borderRadius: "20px",
                      }}
                      place="bottom"
                      anchorSelect=".figimage"
                    >
                      <div className="">
                        <span className="text-[#FFAD36] flex gap-[5px]">
                          <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </span>
                        <p className="text-textC text-[20px] font-semibold">
                          {imgg.name}
                        </p>
                      </div>
                    </Tooltip>
                  </figure>
                </>
              ))}
            </div>

            <div className=" imagesRoundA px-[20px] pt-[40px] justify-between flex gap-[4em]">
              {imagess.slice(3, 5).map((imgg, index) => (
                <figure key={index} className="figimage inline">
                  <img
                    alt="image"
                    className=""
                    src={imgg.image}
                    onMouseEnter={() => handleImageClick(imgg.image)}
                  />
                </figure>
              ))}
            </div>

            <div className=" imagesRoundlast pt-[40px] justify-center flex gap-[4em]">
              {imagess.slice(5, 8).map((imgg, index) => (
                <figure key={index} className="figimage inline">
                  <img
                    alt="image of"
                    className=""
                    src={imgg.image}
                    onMouseEnter={() => handleImageClick(imgg.image)}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBgSection;
