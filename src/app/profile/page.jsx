import React from 'react'
import Layout from '../components/user/Layout/Layout'
import Profile from './Profile'

const page = () => {
  return (
    <div>
      <Layout children={<Profile/>}/>
    </div>
  )
}

export default page
