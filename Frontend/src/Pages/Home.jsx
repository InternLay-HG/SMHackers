import { useState, useEffect } from 'react';
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
      
      {isLoggedIn && (
        <>
          <SearchBar text={"Search records, appointments, insurance..."} />
          <div className="flex justify-evenly gap-5 sm:gap-0 px-10 py-8 sm:py-9 md:py-10 bg-[#F6FFFBC7] h-36 flex-wrap sm:flex-nowrap">
            <Link to='/records'>
              <Button color={"bg-[#E5FDFF]"} text={"Records"} image={Records} prop={"hidden"} />
            </Link>
            <Button color={"bg-[#FFF4FA]"} text={"Medications"} image={Medications} prop={"hidden"} />
            <Button color={"bg-[#FFF7DD]"} text={"Appointments"} image={Appointments} prop={"hidden"} />
            <Link to='/lab'>
              <Button color={"bg-[#E6F9E3]"} text={"Lab"} image={Lab} prop={"hidden"} />
            </Link>
            <Button color={"bg-[#EFEEFD]"} text={"Precautions"} image={Precautions} prop={"hidden"} />
          </div>
          <div className="flex px-5 md:px-20 justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip ">
            <Card text={"Reminder"} image={Reminder} />
            <Card text={"Appointments"} image={Bell} />
            <Card text={"Updates"} image={Updates} />
            <Card text={"Chronic Conditions"} image={Chronic} />
            <Card text={"Allergies"} image={Allergies} />
          </div>
        </>
      )}
    </div>
  );
};
export const Home=()=>{
    return(
        <div className="bg-[#f6fffb] h-screen" >
        <Header text={"Login"}></Header>
        <SearchBar text={"Search records, appointments ,insurance ..."} ></SearchBar>
        <div className="flex justify-evenly gap-5 sm:gap-0 px-10 py-8 sm:py-9 md:py-10 bg-[#F6FFFBC7] h-36 flex-wrap sm:flex-nowrap">
          <Link to='/records'><Button color={"bg-[#E5FDFF]"} text={"Records"} image={Records} prop={"hidden"}></Button></Link>
          <Button color={"bg-[#FFF4FA]"} text={"Medications"} image={Medications} prop={"hidden"}></Button>
          <Button color={"bg-[#FFF7DD]"}text={"Appointments"} image={Appointments} prop={"hidden"}></Button>
          <Link to='/lab'><Button color={"bg-[#E6F9E3]"}text={"Lab"} image={Lab} prop={"hidden"}></Button></Link>
          <Link to='/nurse/upload'><Button color={"bg-[#EFEEFD]"}text={"Precautions"} image={Precautions} prop={"hidden"}></Button></Link>
        </div>
        <div className="flex px-5 md:px-20  justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip ">
          <Card text={"Reminder"} image={Reminder} ></Card>
          <Card text={"Appointments"} image={Bell}></Card>
          <Card text={"Updates"} image={Updates} ></Card>
          <Card text={"Chronic Conditions"} image={Chronic}></Card>
          <Card text={"Alergies"} image={Allergies}></Card>
        </div>
        </div>

        
    );
}
