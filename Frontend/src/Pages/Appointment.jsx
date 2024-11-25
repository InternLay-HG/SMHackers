import React, { useState } from "react";
import searchicon from '../images/searchicon.png';
import { Button } from "../components/button.jsx";
import { Header } from "../components/header.jsx";
import Appointments from '../images/Appointments.png';
import { CardAppoint } from "../components/CardAppoint.jsx";
import { Link } from "react-router-dom";

// Adding the CSS styles directly in the component
const Appointment = () => {
  const [DocAppoint,setDocAppoint]=useState([]);
  useEffect(()=>{
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(""); 
        const appointments = response.data;
    
        const formattedAppointments = appointments.map((appointment) => ({
          doctorName: `Dr. ${appointment.doctor.firstName} ${appointment.doctor.lastName}`,
          specialty: null,
          date: new Date(appointment.appointmentDate).toLocaleDateString("en-IN"), // e.g., "2 tarikh"
          time: `${new Date(appointment.appointmentDate).getHours()}`, // e.g., "3 baje"
          reason: appointment.reason,
        }));
    
        console.log(formattedAppointments); // Logs the data in `DocAppoint` format
        return formattedAppointments;
      } catch (error) {
        console.error("Error fetching appointments:", error);
        return [];
      }
    };
    const handleButtonClick = (type) => {
      setActiveButton(type);
  
      
      if (type === "current") {
        setAppointmentsData(DocAppoint); 
      } else if (type === "previous") {
        setAppointmentsData([]); 
      } else if (type === "upcoming") {
        setAppointmentsData([]); 
      } else if (type === "scheduled") {
        setAppointmentsData([]); 
      }
    };
    
  })
  return (
    <div>
      <Header text={"Login"}></Header>

      <div className={`flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg`}>
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
        <Button
          color={activeButton === "current" ? "bg-[#FFF7DD] transform scale-125" : "bg-[#FFF7DD]"}
          text={"Current"}
          subtext1={"Appointments"}
          onClick={() => handleButtonClick("current")}
        />
        <Button
          color={activeButton === "previous" ? "bg-[#FFF7DD] transform scale-125" : "bg-[#FFF7DD]"}
          text={"Previous"}
          subtext1={"Appointments"}
          onClick={() => handleButtonClick("previous")}
        />
        <Button
          color={activeButton === "upcoming" ? "bg-[#FFF7DD] transform scale-125" : "bg-[#FFF7DD]"}
          text={"Upcoming"}
          subtext1={"Appointments"}
          onClick={() => handleButtonClick("upcoming")}
        />
        <Button
          color={activeButton === "scheduled" ? "bg-[#FFF7DD] transform scale-125" : "bg-[#FFF7DD]"}
          text={"Scheduled this Week"}
          onClick={() => handleButtonClick("scheduled")}
        />
        <Link to='/appointments/book'>
          <Button color={"bg-[#FFF7DD]"} text={"Book Appointment"} />
        </Link>
      </div>

      {appointmentsData.length === 0 ? (
        <p className="p-6 text-[#00693B] text-base">Nothing to show as of yet.</p>
      ) : (
        <CardAppoint DocAppoint={appointmentsData} />
      )}
    </div>
  );
};

export default Appointment;
