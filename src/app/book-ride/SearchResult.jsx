import React from 'react'
import SearchResultCard from './SearchResultCard'
import { Divider } from '@mui/material'

const SearchResult = () => {
  return (
    <div className='absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-auto shadow-md hideScroll'>
      {[1,1,1,1,,1].map((item,index)=><SearchResultCard key={index}/>)}
    </div>
  )
}

export default SearchResult
