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
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { isLoggedInAtom } from '../../atoms/loginAtom.jsx';
import { Homepage } from "../components/Homepage.jsx";
import axios from 'axios'; 

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const [Role, setRole] = useState('');
  const [homeData, setHomeData] = useState({
    reminder: [],
    appointments: [],
  });

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('userid');
        setRole(localStorage.getItem('role'));
        console.log(id);
        if (token) {
          setIsLoggedIn(true);
        }

        const response = await axios.get('http://localhost:3000/api/v1/user/getDetails', {
          params: {
            patientId: id,
          },
        });
        setHomeData(response.data.data);
      } catch (error) {
        console.error('Error fetching details:', error.message);
      }
    };

    fetchDetails();
  }, []); 
  return (
    <div className="bg-[#f6fffb] h-screen">
      <Header />

      {isLoggedIn ? (
        <>
          <SearchBar text={"Search nearby hospitals"} />
          <div className="flex justify-evenly gap-5 sm:gap-0 px-10 py-8 sm:py-9 md:py-10 bg-[#F6FFFBC7] h-36 flex-wrap sm:flex-nowrap">
            <Link to='/records'>
              <Button color={"bg-[#E5FDFF]"} text={"Records"} image={Records} prop={"hidden"} />
            </Link>
            <Link to={Role === "doctor" ? '/prescriptionform' : '/prescription'}>
              <Button color={"bg-[#FFF4FA]"} text={"Medications"} image={Medications} prop={"hidden"} />
            </Link>
            <Link to='/appointments'>
              <Button color={"bg-[#FFF7DD]"} text={"Appointments"} image={Appointments} prop={"hidden"} />
            </Link>
            <Link to='/lab'>
              <Button color={"bg-[#E6F9E3]"} text={"Lab"} image={Lab} prop={"hidden"} />
            </Link>
            <Link to='/precautions'>
            <Button color={"bg-[#EFEEFD]"} text={"Precautions"} image={Precautions} prop={"hidden"} />
            </Link>
          </div>
          <div className="flex px-5 md:px-20 justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip ">
            <Card text={"Reminder"} image={Reminder} info={homeData.reminder} />
            <Card text={"Appointments"} image={Bell} info={homeData.appointments} />
            <Card text={"Updates"} image={Updates} />
            <Card text={"Chronic Conditions"} image={Chronic} />
            <Card text={"Allergies"} image={Allergies} />
          </div>
        </>
      ) : (
        <Homepage />
      )}
    </div>
  );
};
