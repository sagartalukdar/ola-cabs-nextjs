"use client"

import React, { useState } from 'react'
import BookRideNavbar from './BookRideNavbar'
// import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@mui/material'
import AvailableCab from './AvailableCab'
import SearchResult from './SearchResult'

// const validationSchema=Yup.object().shape({
//   pickUpLocation:Yup.string().required("pickup address is required"),
//   destinationLocation:Yup.string().required("destination location is required")
// })

const BookRide = () => {
  // const formik=useFormik({
  //   initialValues:{
  //     pickUpLocation:"",
  //     destinationLocation:""
  //   },
  //   validationSchema,
  //   onSubmit:values=>{
  //     console.log(values);
  //   }
  // })

  const onFocused=(e)=>{
   const name=e.target.name;
   setActiveField(name);
  }

  const [activeField,setActiveField]=useState("");
  const [activeValue,setActiveValue]=useState("");

  const handleSubmit=()=>{
   console.log("jjj")
  }

  return (
    <div className='w-full'>
      <BookRideNavbar/>

      <div className="px-3 lg:px-5 mt-10">
         <form onSubmit={handleSubmit()}>
          <div className='space-y-3'>
            <div className="border p-2 flex items-center relative">
              <p className="pr-3">From</p>
              <input type="text"
               name='pickUpLocation'
               className='border-none outline-none'
               placeholder='Enter Pickup Location'
              //  value={formik.values.pickUpLocation}
               onChange={(e)=>{
                const value=e.target.value;
                setActiveValue(value);
                // formik.handleChange
               }}
              //  onBlur={formik.handleBlur}
               onFocus={onFocused}
              />
              {activeField==="pickUpLocation" && activeValue?.length>0 &&
               <div className="">
                <SearchResult/>
               </div>
              }
            </div>
            {/* {formik.errors.pickUpLocation && formik.errors.pickUpLocation && (
              <div>
                <p className="text-xs text-red-500 px-2">{formik.errors.pickUpLocation}</p>
              </div>
            )} */}

            <div className="border p-2 flex items-center relative">
              <p className="pr-3">To</p>
              <input type="text"
               name='destinationLocation'
               className='border-none outline-none'
               placeholder='Enter Destination Location'
              //  value={formik.values.destinationLocation}
               onChange={(e)=>{
                const value=e.target.value;
                setActiveValue(value);
                // formik.handleChange
               }}
              //  onBlur={formik.handleBlur}
               onFocus={onFocused}
              />
              {activeField==="destinationLocation" && activeValue?.length>0 &&
               <div className="">
                <SearchResult/>
               </div>
              }
            </div>
            {/* {formik.errors.destinationLocation && formik.errors.destinationLocation && (
              <div>
                <p className="text-xs text-red-500 px-2">{formik.errors.destinationLocation}</p>
              </div>
            )} */}

            <Button sx={{width:"100%",padding:".7rem 0 rem"}} color='secondary' variant='contained' type='submit'>
              find driver
            </Button>
            
          </div>
         </form>
      </div>

      <div className="-z-10 px-2 lg:px-5 mt-5">
        <p>Available Cabs</p>
        <div className="space-y-5">
          {[1,1,1,1,1].map((item,index)=><AvailableCab key={index}/>)}
        </div>
      </div>

    </div>
  )
}

export default BookRide
