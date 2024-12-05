import React from 'react'
import { Header } from "../components/header.jsx"
import searchicon from '../images/searchicon.png'
import lab from '../images/Lab.png'
import {Button} from "../components/button.jsx"
import { Click } from '../components/click.jsx'


export const Labrecords = () => {
  return (
    <div className="bg-[#f6fffb] h-screen" >
      <Header text={"Login"}></Header>

      <div className={`flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg `}>
        <div className=" w-full flex justify-center items-center">
          <div className="flex items-center shrink justify-center  w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
            <button type="submit"><img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" /></button>
            <input 
              className="bg-white/[0] w-full h-full outline-none p-4"
              type="text" 
              placeholder="Search Records.."
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E5FDFF] flex align-center">
        <div className="flex items-center p-1 md:p-1.5 lg:p-2">
          <div className=" h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-12 lg:h-12  p-2  ">
            <img src={lab} alt="Image"></img>
          </div>
          <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold  p-2 lg:p-4">
            Lab Results
          </div>
          
        </div>
      </div>
      <div className="flex justify-start gap-10 px-10 py-6 bg-[#F6FFFBC7] h-48 sm:h-32 flex-wrap sm:flex-nowrap">
        <Button color={"bg-[#E6F9E3]"} text={"Last Checkup"} subtext1={"15 May 2024"} subtext2={"Eye Checkup"} ></Button>
        <Button color={"bg-[#E6F9E3]"} text={"Previous Results"} ></Button>
          
      </div>

      <div className="reports flex justify-evenly">
        <div className="rounded-lg  flex justify-center flex-col border-[#00693B] w-2/6">
        <div className="bg-[#D1E7E0] p-6 rounded-t-xl flex justify-centre gap-2 md:gap-4 items-center">
        </div>
        <iframe src="https://docs.google.com/gview?url=https://path.com/to/your/pdf.pdf&embedded=true" className="w-full h-full border-none"></iframe>
        <Click text={"Open File"}/>
            
        </div> 
        <div className="summary w-2/5">
          Summary generated by AI....
        </div>
      </div>

    </div>
  )
}
