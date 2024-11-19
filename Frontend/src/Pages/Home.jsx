import { useState, useEffect,useRef } from 'react';
import { Button } from "../components/button";
import { Header } from "../components/header";
import { SearchBar } from "../components/searchbar";
import Records from "../images/Records.png";
import Medications from '../images/Medications.png';
import Appointments from '../images/Appointments.png';
import Lab from '../images/Lab.png';
import Precautions from '../images/Precautions.png';
import Reminder from '../images/Reminder.svg';
import Bell from '../images/bell.svg';
import Updates from '../images/updates.svg';
import Chronic from '../images/Chronic.svg';
import Allergies from '../images/Allergies.svg';
import { Card } from "../components/card.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const [isDivVisible, setDivVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setDivVisible(!isDivVisible);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log("logout");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    
    <div className="bg-[#f6fffb] h-screen">
      <Header 
        text={isLoggedIn ? "Logout" : "Login"} 
        onClick={isLoggedIn ? handleLogout : null}
      />
      
      {/* {isLoggedIn && ( */}
        <>
          <SearchBar text={"Search records, appointments, insurance..."} />
          <div className="flex justify-evenly gap-5 sm:gap-0 px-10 py-8 sm:py-9 md:py-10 bg-[#F6FFFBC7] h-36 flex-wrap sm:flex-nowrap">
            <Link to='/records'>
              <Button color={"bg-[#E5FDFF]"} text={"Records"} image={Records} prop={"hidden"} />
            </Link>
            <Link to='/prescription'><Button color={"bg-[#FFF4FA]"} text={"Medications"} image={Medications} prop={"hidden"} /></Link>
            <Link to='/appointments'><Button color={"bg-[#FFF7DD]"} text={"Appointments"} image={Appointments} prop={"hidden"} /></Link>
            <Link to='/lab'>
              <Button color={"bg-[#E6F9E3]"} text={"Lab"} image={Lab} prop={"hidden"} />
            </Link>
            <div className="relative">
              <Button ref={buttonRef} onClick={handleButtonClick} color={"bg-[#EFEEFD]"} text={"Precautions"} image={Precautions} prop={"hidden"} />
              {isDivVisible && (
              <div className="absolute top-full -left-4 md:-left-2 lg:left-0 mt-2 w-28 md:w-48  lg:w-full  p-2 z-10"
              style={{
                top: buttonRef.current ? buttonRef.current.offsetHeight : 0,
              }}
    >
              <p className=" p-3 md:p-5 text-[#92C1B6] w-28 md-w-48  lg:w-full sm:text-base  font-inter text-sm bg-white  rounded-xl">
                This is some data inside the div!
              </p>
              </div>
              )}
          </div>
        
        
            
          </div>
          <div className="flex px-5 md:px-20 justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip ">
            <Card text={"Reminder"} image={Reminder} />
            <Card text={"Appointments"} image={Bell} />
            <Card text={"Updates"} image={Updates} />
            <Card text={"Chronic Conditions"} image={Chronic} />
            <Card text={"Allergies"} image={Allergies} />
          </div>
        </>
      {/* )}  */}
    </div>
  );
};