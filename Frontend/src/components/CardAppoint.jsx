import React from 'react'
import doctorimg from '../images/doctorimg.jpg'
import {Click} from './click'
import schedule from '../images/Schedule.svg'
import reminder from '../images/SetRemainder.svg'

export const CardAppoint = ({DocAppoint,doctor={doctorimg}}) => {
  return (
    <div className='flex px-5 md:px-20 justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip ' >
      
        {DocAppoint.map((appointment, index) => (
          <div key={index} className="rounded-lg   border-[#00693B] shrink-0 mx-4 md:mx-0 max-w-96 sm:min-w-72">
            <div className="bg-[#D1E7E0] px-2 py-2 rounded-t-xl flex justify-center gap-2 md:gap-4 items-center relative">
               <div className="text-[#14AE5C] font-jaldi font-semibold md:font-bold flex items-center ">
                    {appointment.doctorName}
                </div>
                <img className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-[#D1E7E0] absolute right-2 sm:right-4 -top-2 sm:-top-4 transform translate-y-1/2" src={doctorimg} alt="" />
                
                    
            
            </div>
            <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base  font-inter text-sm bg-white overflow-y-scroll no-scrollbar  rounded-b-xl" >
            <div>
            <p className='font-semibold inline'>Specialty:</p><p className='inline'> {appointment.specialty}</p>
            </div>
           <div>
           <p className='font-semibold inline'>Date:</p><p className='inline'> {appointment.date}</p>
           </div>
            <div>
            <p className='font-semibold inline'>Time:</p><p className='inline'> {appointment.time}</p>
            </div>
            <div className='flex flex-wrap'>
            <p className='font-semibold inline'>Reason to Visit:</p><p className='inline'> {appointment.reason}</p>
            </div>
            <div className="flex justify-around mt-4 gap-2">
              <Click text={"Re-Schedule"} image={schedule}/>
              <Click text={"Set Reminder"} image={reminder}/>
            </div>
            
            </div>
            
            
           
          </div>
        ))}
      
      </div>
            
     
  )
}
