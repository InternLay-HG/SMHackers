import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import searchicon from "../images/searchicon.png";
import Appointments from "../images/Appointments.png";
import { Button } from "../components/button.jsx";
import { Header } from "../components/header.jsx";
import { CardAppoint } from "../components/CardAppoint.jsx";



const CombinedAppointments = () => {
  const [role, setRole] = useState(null);
  const [DocAppoint, setDocAppoint] = useState([]);
  const [activeButton, setActiveButton] = useState("upcoming");
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    
    const storedRole = localStorage.getItem("role");
    const userId = localStorage.getItem("userId"); 
    setRole(storedRole);

   
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(""); 
        const appointments = response.data;

        const formattedAppointments = appointments.map((appointment) => ({
          doctorName: `Dr. ${appointment.doctor.firstName} ${appointment.doctor.lastName}`,
          specialty:  appointment.doctor.specialty || "General",
          date: new Date(appointment.appointmentDate).toLocaleDateString("en-IN"),
          time: `${new Date(appointment.appointmentDate).getHours()}`,
          reason: appointment.reason,
        }));

        setDocAppoint(formattedAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setDocAppoint([]);
      }
    };

    fetchAppointments();
  }, []);

  const handleButtonClick = (type) => {
    setActiveButton(type);
    if (type === "previous") {
      const previousAppointments = DocAppoint.filter(
        (appointment) => new Date(appointment.date) < new Date()
      );
      setAppointmentsData(previousAppointments);
    } else if (type === "upcoming") {
      const upcomingAppointments = DocAppoint.filter(
        (appointment) => new Date(appointment.date) >= new Date()
      );
      setAppointmentsData(upcomingAppointments);
    } else if (type === "scheduled") {
      const scheduledAppointments = DocAppoint.filter((appointment) => {
        const appointmentDate = new Date(appointment.date);
        const today = new Date();
        const weekFromToday = new Date();
        weekFromToday.setDate(today.getDate() + 7);
        return appointmentDate >= today && appointmentDate <= weekFromToday;
      });
      setAppointmentsData(scheduledAppointments);
    }
  };

  const renderPatientView = () => (
    <div>
      <Header text={"Login"} />
      <div className="flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg">
        <div className="w-full flex justify-center items-center">
          <div className="flex items-center justify-center w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
            <button type="submit">
              <img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" />
            </button>
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
          <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-12 lg:h-12 p-2">
            <img src={Appointments} alt="Image" />
          </div>
          <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold p-2 lg:p-4">
            Appointments
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-10 py-6 bg-[#F6FFFBC7] sm:h-32 flex-wrap sm:flex-nowrap">
      <Button
          color={activeButton === "upcoming" ? "bg-[#FFF7DD] transform transition duration-300  scale-110" : "bg-[#FFF7DD]"}
          text={"Upcoming"}
          subtext1={"Appointments"}
          onClick={() => handleButtonClick("upcoming")}
        />
        <Button
          color={activeButton === "previous" ? "bg-[#FFF7DD] transform transition duration-300  scale-110" : "bg-[#FFF7DD]"}
          text={"Previous"}
          subtext1={"Appointments"}
          onClick={() => handleButtonClick("previous")}
        />
        
        <Button
          color={activeButton === "scheduled" ? "bg-[#FFF7DD] transform transition duration-300  scale-110" : "bg-[#FFF7DD]"}
          text={"Scheduled this Week"}
          onClick={() => handleButtonClick("scheduled")}
        />
        <Link to="/appointments/book">
          <Button color={"bg-[#FFF7DD]"} text={"Book Appointment"} />
        </Link>
      </div>
      {appointmentsData.length === 0 ? (
        <p className="p-6 text-[#00693B] text-base">Nothing to show as of yet.</p>
      ) : (
        <CardAppoint DocAppoint={appointmentsData} role={role} />
      )}
    </div>
  );

  const renderDoctorView = () => (
    <div>
      <Header text={"Login"} />
      <div className="flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg">
        <div className="w-full flex justify-center items-center">
          <div className="flex items-center justify-center w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
            <button type="submit">
              <img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" />
            </button>
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
          <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-12 lg:h-12 p-2">
            <img src={Appointments} alt="Image" />
          </div>
          <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold p-2 lg:p-4">
            Appointments
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-10 py-6 bg-[#F6FFFBC7] sm:h-32 flex-wrap sm:flex-nowrap">
      <Button
          color={activeButton === "upcoming" ? "bg-[#FFF7DD] transform transition duration-300  scale-110" : "bg-[#FFF7DD]"}
          text={"Upcoming"}
          subtext1={"Appointments"}
          onClick={() => handleButtonClick("upcoming")}
        />
        <Button
          color={activeButton === "previous" ? "bg-[#FFF7DD] transform transition duration-300  scale-110" : "bg-[#FFF7DD]"}
          text={"Previous"}
          subtext1={"Appointments"}
          onClick={() => handleButtonClick("previous")}
        />
        
        <Button
          color={activeButton === "scheduled" ? "bg-[#FFF7DD] transform transition duration-300  scale-110" : "bg-[#FFF7DD]"}
          text={"Scheduled this Week"}
          onClick={() => handleButtonClick("scheduled")}
        />
        
      </div>
      {appointmentsData.length === 0 ? (
        <p className="p-6 text-[#00693B] text-base">No prescription yet.</p>
      ) : (
        <CardAppoint DocAppoint={appointmentsData} role={role} />
      )}
    </div>
  );

  return role === "patient" ? renderPatientView() : renderDoctorView();
};

export default CombinedAppointments;
