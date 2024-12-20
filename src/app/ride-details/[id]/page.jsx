"use client"

import Layout from '@/app/components/user/Layout/Layout';
import React, { useEffect } from 'react'
import RideDetails from './RideDetails';

const page = (prop) => {
    useEffect(()=>{
      console.log('props',prop);
    },[])
  return (
    <div>
      <Layout children={<RideDetails/>} />
    </div>
  )
}

export default page
