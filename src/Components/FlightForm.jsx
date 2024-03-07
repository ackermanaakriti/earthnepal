import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'

const FlightForm = () => {
  return (
   <>
   <Formik 
   initialValues={{
    fullname:'',
    email:'',
    phone:'',
    address:'',
    arrivaldate:'',
    retunrdate:'',
    cabinclass:'',
    nofadult:'',
    nofchildren:''

   }}
   validationSchema={Yup.object().shape({
    fullname:Yup.string().required('name is required'),
            email:Yup.string().email().required('email is required'),
            address:Yup.string().required('required'),
            phone:Yup.string().required('number is required'),
            arrivaldate:Yup.string().required('required'),
            retunrdate:Yup.string().required('required'),
            cabinclass:Yup.string().required('required'),
            nofadult:Yup.string().required('required'),
            nofchildrent:Yup.string().required('required'),
   })}
   onSubmit={(values)=>
{

}}
   >
    {formik=>(
        <form className='footer-form'>

            {/* full name */}
             <div className='col-span-2'>
                        <label className='block'>Full Name <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.fullname} placeholder='John Doe'/>
                    </div>

                    {/* email adress and phone */}
                    <div className='grid grid-cols-4 gap-4 pt-[15px]'>
                    <div className='col-span-2'>
                        <label className='block'>Email Address <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.email} placeholder='johndoe@gmail.com'/>
                    </div>
                    <div className='col-span-2'>
                        <label className='block'>Phone no <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.phone} placeholder='johndoe@gmail.com'/>
                    </div>
                    </div>

                    {/* address */}
                    <div className='col-span-2  mt-[10px]'>
                        <label className='block'>Address <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.address} placeholder='John Doe'/>
                    </div>

                    
                    {/* form an to days */}
                    <div className='grid grid-cols-4 gap-4 pt-[15px]'>
                    <div className='col-span-2 '>   
                    <label className='block'>From <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.address} placeholder='John Doe'/>
                    </div>
                    <div className='col-span-2'>
                        <label className='block'>To <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.address} placeholder='John Doe'/>
                    </div>
                    </div>

                    {/* arrival and return date */}
                    <div className='grid grid-cols-4 gap-4 pt-[15px]'>
                    <div className='col-span-2 '>    
                    <label className='block'>Arrival Date <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.arrivaldate} placeholder='John Doe'/> 
                    </div>
                    <div className='col-span-2'>
                        <label className='block'>Return Date <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.retunrdate} placeholder='John Doe'/>

                    </div>
                    </div>

                    {/* cabin */}
                     <div className='col-span-2 mt-[10px]'>
                        <label className='block'>Cabin <span>*</span></label>
                        <select onChange={formik.handleBlur} value={formik.values.nationality}>
                            <option disabled selected className='text-textC text-[16px] '> Select</option>
                            <option className='text-textC text-[16px] '>Nepal</option>
                            <option>India</option>
                        </select>
                    </div>
                     {/* children and adult */}
                    <div className='grid grid-cols-4 gap-4 pt-[15px]'>
                    <div className='col-span-2 '>
                    <label className='block'>No of Children <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.nofchildren} placeholder='John Doe'/>
                    </div>
                    <div className='col-span-2'>
                        <label className='block'>No of Adult <span>*</span></label>
                        <input type='text' onChange={formik.handleChange} value={formik.values.nofadult} placeholder='John Doe'/>
                    </div>
                    </div>
                   
                    <div className='mt-[15px]'>
                    <button type='submit' className='bg-PrimaryRed text-white rounded-[5px] text-[15px] px-[20px] py-1'>SEND</button>

                    </div>

        </form>
    )}

   </Formik>
   <div className=''>

   </div>
   </>
  )
}

export default FlightForm