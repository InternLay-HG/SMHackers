import login from '../images/login.svg';
import logo from '../images/Logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoggedInAtom } from '../../atoms/loginAtom';

export const Header = ({ text, onClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // Popup state
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
    setShowLogoutPopup(false); // Close the popup
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const openLogoutPopup = () => {
    setShowLogoutPopup(true); // Open the popup
  };

  const closeLogoutPopup = () => {
    setShowLogoutPopup(false); // Close the popup
  };

  return (
    <div className="relative flex bg-[#f6fffb] justify-between p-2.5 sm:p-3 md:p-3.5 lg:p-4 shadow-lg">
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
          onClick={isLoggedIn ? openLogoutPopup : handleLoginClick} // Show popup for logout
          className="flex px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2 text-xs md:text-sm lg:text-base items-center gap-2 bg-white rounded-md hover:bg-green-100 text-medic-green shadow-md"
        >
          {isLoggedIn ? "Logout" : "Login"}
          <img src={login} alt="User Icon" className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </button>
      )}

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 sm:p-6 md:p-8 m-4 rounded-md shadow-lg text-center max-w-md w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-medic-green mb-4">
              Would you like to logout?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 sm:px-5 shadow-lg sm:py-2.5 md:px-6 md:py-3 hover:bg-green-100 text-gray-400 rounded-md transition-colors duration-300 text-sm sm:text-base"
              >
                Yes
              </button>
              <button
                onClick={closeLogoutPopup}
                className="px-4 py-2 sm:px-5 shadow-lg sm:py-2.5 md:px-6 md:py-3 hover:bg-red-100 text-gray-400 rounded-md transition-colors duration-300 text-sm sm:text-base"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
