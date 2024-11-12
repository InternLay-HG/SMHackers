import login from '../images/login.svg';
import logo from '../images/Logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export const Header = ({ text, onClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
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

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex bg-[#f6fffb] justify-between p-2.5 sm:p-3 md:p-3.5 lg:p-4 shadow-lg">
      <Link to='/'>
        <div className="font-jaldi text-3xl font-normal text-medic-green">
          <img className="w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10" src={logo} alt="logo" />
        </div>
      </Link>
      {text === "Logout" ? (
        <button 
          onClick={onClick} 
          className="flex px-2 py-0.5 md:px-3 md:py-1 lg:px-4 lg:py-2 text-xs md:text-sm lg:text-base items-center gap-2 bg-white rounded-md hover:bg-green-100 text-medic-green shadow-md"
        >
          {text}
          <img src={login} alt="User Icon" className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </button>
      ) : (
        <button 
          onClick={isLoggedIn ? handleLogout : handleLoginClick}
          className="flex px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2 text-xs md:text-sm lg:text-base items-center gap-2 bg-white rounded-md hover:bg-green-100 text-medic-green shadow-md"
        >
          {isLoggedIn ? "Logout" : "Login"}
          <img src={login} alt="User Icon" className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </button>
      )}
    </div>
  );
};
