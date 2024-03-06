import React from 'react'
import { tbdata } from '../Data/discountable'

const DiscountTable = () => {
  return (
    <>
    <div className='bg-white pt-[20px] pb-[50px]'>
        <div>
            <div className='flex gap-[20px] container m-auto py-[20px]'>
            <img className='' src={'./images/fire.png'}/>
            <h2 className='text-[30px] uppercase tracking-[1px] font-nunito text-textC font-semibold'>Get Heavy Discount This Season</h2>
            </div>
           
            <table className='discounttable'>
                <thead className=''>
                    <tr >
                        
                        <th></th>
                        <th>DESTINATION</th>
                        <th>PRICE</th>
                        <th>SEASON</th>
                        <th>NIGHTS</th>
                        <th>DISCOUNT</th>
                        <th className='w-[20%] !text-left '>ACTION</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        tbdata.map((data,index)=>
                        (
                            <tr className=''>
                                <td className='!pl-[60px] flex justify-end object-cover'><img className='h-[50px] py-[3px] rounded-[5px]' src={data.image}/></td>
                            <td>{data.destination}</td>
                            <td>{data.pirce}</td>
                            <td>{data.nights}</td>
                            <td>{data.season}</td>
                            <td><button className='bg-PrimaryBlue rounded-[5px] text-[14px] text-white px-[20px] py-[4px]'>{data.discount} Discount</button></td>
                            <td  className=' !text-left '> <button className='bg-PrimaryRed rounded-[5px] text-[14px] text-white px-[20px] py-[4px]'> Action</button></td>
                            
                        </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default DiscountTable