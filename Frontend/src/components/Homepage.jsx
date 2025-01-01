import React from "react";
import Doctors from "../images/doctors.svg";
import google from "../images/google-icon.svg";
import { Link } from "react-router-dom";
import { GoogleOAuthLogin } from "../components/Login_Signup_Signout";



export const Homepage = () => {
  return (
    <div className="bg-[#f6fffb] min-h-screen flex flex-col items-center justify-evenly px-4 py-8">
      {/* Tagline Section */}
      <div className="text-center mb-8">
        <p className="text-2xl md:text-4xl font-bold text-[#939f9bfb]">
          Take your health into your own hands
        </p>
      </div>
      
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        
        <div className="relative z-10 mb-10">
          <img
            src={Doctors}
            alt="Doctor Illustration"
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>

        
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-center">
            <div className="bg-[#F6FFFBC7] p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#4C937E]">Preserve Records</h3>
              <p className="text-[#4C937E] text-sm">
                Securely store and access your medical history anytime.
              </p>
            </div>
          </div>

          
          <div className="absolute right-0 top-1/3 transform translate-x-1/3 text-center">
            <div className="bg-[#F6FFFBC7] p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#4C937E]">Book Appointments</h3>
              <p className="text-[#4C937E] text-sm">
                Schedule consultations with ease.
              </p>
            </div>
          </div>

          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <div className="bg-[#F6FFFBC7] p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#4C937E]">Get Lab Results</h3>
              <p className="text-[#4C937E] text-sm">
                View your lab test results online.
              </p>
            </div>
          </div>

          
          <div className="absolute left-0 top-1/3 transform -translate-x-1/3 text-center">
            <div className="bg-[#F6FFFBC7] p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#4C937E]">Health Insights</h3>
              <p className="text-[#4C937E] text-sm">
                Personalized recommendations for your health.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className=" flex flex-col md:flex-row items-center gap-4">
        <Link to="/login">
        <button className="px-8 py-3 bg-[#099E6C] text-white font-semibold rounded-lg shadow hover:bg-[#077E56] transition-colors">
          Get Started
        </button>
        </Link>
        <GoogleOAuthLogin/>
      </div>
    </div>
  );
};
