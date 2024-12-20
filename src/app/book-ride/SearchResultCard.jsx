import { LocationOn } from '@mui/icons-material'
import { Divider } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import React from 'react'

const SearchResultCard = ({item,latitude_key,longitude_key,setActiveField,area_key}) => {

  const pickup_lattitude=19.0785451
  const pickup_longitude=72.878176
  const pickup_area="Mumbai,Mumbai Suburban, Maharashtra, India"
  const destination_lattitude=42.2781401
  const destination_longitude=74.9159946
  const destination_area="Delhi, Town of Delhi, Delaware Country, New York, United States"

  const searchParams=useSearchParams();
  const router=useRouter();
  const pathname=usePathname();

  const handleSelect=()=>{
    const params=new URLSearchParams(searchParams);
    params.set("pickup_lattitude",pickup_lattitude);
    params.set("pickup_longitude",pickup_longitude);
    params.set("pickup_area",pickup_area);

    router.replace(pathname+"?"+params.toString());
  }

  return (
    <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
      <div className="pr-5">
        <LocationOn/>
      </div>
      <div>
        <p className="font-semibold">Mumbai</p>
        <p className="font-semibold opacity-60">city,road,street name of location</p>
      </div>
      <Divider/>
    </div>
  )
}

export default SearchResultCard
