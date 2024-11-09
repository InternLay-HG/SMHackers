import React from 'react'
import Phone from '../images/Phone.svg'
import Mail from '../images/Mail.svg'


const hospitals=[{id:1,name:"Random Hospital",City:"Ranchi",Phone:"+91-7321534427"}]

export const Hospital = () => {
  return (
    <div className="bg-[#f6fffb] h-screen">
      <h1 className='text-lg sm:text-xl md:text-2xl font-medium md:font-semibold mb-6 text-[#00693B] font-inter p-4'>List of Hospitals</h1>
      <div className=" p-3 md:p-5 w-full flex shrink justify-between shadow-md text-[#92C1B6] sm:text-base font-inter text-sm bg-white rounded-xl">
        {hospitals.map((building)=>(
          <div className='p-1'>
            <h2 className='p-2 text-base md:text-lg lg:text-xl font-medium md:font-semibold'>{building.name}</h2>
            <p className='px-2 pb-1 sm:text-sm md:text-base'>{building.City}</p>
            <hr className='font-bold' />
            <p className='px-1 pt-1 sm:text-sm  text-gray-300 font-thin'>{building.Phone}</p>
          </div>
          
        ))}
        <div className='p-4 flex items-center justify-around gap-8'>
          <img src={Phone} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" alt="" />
          <img src={Mail} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" alt="" />
        </div>
      </div>
      
    </div>
  )
}

