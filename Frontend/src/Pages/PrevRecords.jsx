import React from "react"
import { Header } from "../components/header.jsx"
import searchicon from '../images/searchicon.png'
import recordimage from '../images/Records.png'
import {Button} from "../components/button.jsx"
import {Card} from "../components/card.jsx"
import {Click} from "../components/click.jsx"
import more from "../images/more.svg"
import update from "../images/update.svg"



function PrevRecords(){
  return(
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
            <img src={recordimage} alt="Image"></img>
          </div>
          <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold  p-2 lg:p-4">
            Past Medical Records
          </div>
          
        </div>
      </div>
        <div className="flex justify-evenly gap-0 px-10 py-6 bg-[#F6FFFBC7] h-48 sm:h-32 flex-wrap sm:flex-nowrap">
          <Button color={"bg-[#E5FDFF]"} text={"Social History"} ></Button>
          <Button color={"bg-[#E5FDFF]"} text={"Chronic Conditions"} ></Button>
          <Button color={"bg-[#E5FDFF]"} text={"Previous Surgery"} ></Button>
          <Button color={"bg-[#E5FDFF]"} text={"Family Medical History"} ></Button>
          <Button color={"bg-[#E5FDFF]"} text={"Last Physical Exam"}></Button>
        </div>
        <div className="flex px-5 md:px-20  justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip ">
          <Card text={"Condition"} ></Card>
          <Card text={"Condition"}></Card>
          <Card text={"Condition"}  ></Card>
          <Card text={"Condition"} ></Card>
          <Card text={"Condition"}></Card>
        </div>
        <div className="w-full flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 ">
          <Click text={"More"} image={more} />
          <Click text={"Update Records"} image={update}/>
        </div>
    
    


      
    </div>
  )
}
export default PrevRecords;