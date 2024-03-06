import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FaStar } from "react-icons/fa";
import { MdUpload } from "react-icons/md";


const ReviewForm = () => {
  return (
    <>
    <Formik
    initialValues={{
        fullname:'',
        email:'',
        nationality:'',
        image:'',
        review:''
    }}
 
    validationSchema={Yup.object().shape(
        {
            fullname:Yup.string().required('name is required'),
            email:Yup.string().email().required('email is required'),
            nationality:Yup.string().required('required'),
            image:Yup.string().required('image is required'),
            review:Yup.string().required('review is required')
        }
    )}

    onSubmit={(values)=>
    {
         console.log(values)
    }}

    >
        {
            formik=>(
                <form onSubmit={formik.handleSubmit} className='review--form w-[60%]'>
                    <div className='col-span-2'>
                        <label className='block'>Full Name <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.fullname} placeholder='John Doe'/>
                    </div>
                    <div className='grid grid-cols-4 gap-4 pt-[15px]'>
                    <div className='col-span-2'>
                        <label className='block'>Email Address <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.fullname} placeholder='johndoe@gmail.com'/>
                    </div>
                    <div className='col-span-2'>
                        <label className='block'>Nationality <span>*</span></label>
                       
                        <select onChange={formik.handleBlur} value={formik.values.nationality}>
                            <option disabled selected className='text-textC text-[16px] '> Country</option>
                            <option className='text-textC text-[16px] '>Nepal</option>
                            <option>India</option>
                        </select>
                    </div>
                    </div>
                    <div className='grid grid-cols-4 gap-4 pt-[15px]'>
                    <div className='col-span-2 inputdiv'>
                        <label for='inputfile' className='block  '>Upload your photo <span>*</span></label>
                        <div className='relative'>
                        <input id='inputfile' className='inputfile ' type='file' onChange={formik.handleChange} value={formik.values.fullname} placeholder='John Doe'/>
                        <span  className='inputfilespan'>Upload Photo <span><MdUpload/></span> </span>

                        </div>

                        
                    </div>
                    <div className='col-span-2'>
                        <label className='block'>Rate Us <span>*</span></label>
                       <span className='flex gap-[5px] text-[18px] items-center text-hueBlue'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></span>
                    </div>
                    </div>
                    <div className='col-span-2 pt-[15px]'>
                        <label className='block'>Review <span>*</span></label>
                        <textarea rows={4} onChange={formik.handleChange} value={formik.values.review} placeholder='John Doe'></textarea>
                    </div>
                    <div className='mt-[15px]'>
                    <button type='submit' className='bg-PrimaryRed text-white rounded-[5px] text-[15px] px-[20px] py-1'>SEND</button>

                    </div>

                </form>
            )
        }

    </Formik>
    </>
  )
}

export default ReviewForm