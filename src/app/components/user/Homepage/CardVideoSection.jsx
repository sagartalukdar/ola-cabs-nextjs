import React from 'react'

const CardVideoSection = () => {
  return (
    <div className='mt-32'>
      <h1 className="text-5xl font-bold my-10 text-center">India's most ambition car</h1>
      <div className="">
        <video controls autoPlay loop style={{width:"100%", height:"100%"}} src="https://videos.pexels.com/video-files/6161372/6161372-hd_1920_1080_30fps.mp4"></video>
      </div>
    </div>
  )
}

export default CardVideoSection
