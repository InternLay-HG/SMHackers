import React from "react";
import searchicon from '../images/searchicon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faCalendarDays,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/button";
import { Header } from "../components/header.jsx"
import Appointments from '../images/Appointments.png';
import { CardAppoint } from "../components/CardAppoint.jsx";




// Adding the CSS styles directly in the component
const DoctorsAppointment = () => {
  
  const DocAppoint=[   {
    doctorName: "Dr. Smith",
    specialty: "Cardiologist",
    date:"2 tarikh",
    time:"3 baje",
    reason:"pet kharab"
  },
  {
    doctorName: "Dr. Brown",
    specialty: "Dermatologist",
    date:"2 tarikh",
    time:"3 baje",
    reason:"Follow-up appointment for hypertension management and to review recent blood test results"
  }]
  return (
    <div>
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
<div className="bg-[#FFF7DD] flex align-center">
  <div className="flex items-center p-1 md:p-1.5 lg:p-2">
    <div className=" h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-12 lg:h-12  p-2  ">
      <img src={Appointments} alt="Image"></img>
    </div>
    <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold  p-2 lg:p-4">
      Appointments
    </div>
    
  </div>
</div>
      
      <div className="flex justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-10 py-6 bg-[#F6FFFBC7] sm:h-32 flex-wrap sm:flex-nowrap">
        <Button color={"bg-[#FFF7DD]"} text={"Appointments"} subtext1={"Previous"}></Button>
        <Button color={"bg-[#FFF7DD]"} text={"Appointments"} subtext1={"Upcoming "}></Button>
        <Button color={"bg-[#FFF7DD]"} text={"Scheduled this Week"} ></Button>
        <Button color={"bg-[#FFF7DD]"} text={"Book Appointment"} ></Button>
          
      </div>
      {DocAppoint.length === 0 ? (
        <p className="p-6 text-[#00693B] text-base">No prescription yet.</p>
      ) : (<CardAppoint DocAppoint={DocAppoint}/>)}

      

      
    </div>
  );
};

export default DoctorsAppointment;

