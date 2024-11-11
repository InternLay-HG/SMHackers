import React from "react";
import searchicon from '../images/searchicon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faCalendarDays,
  faBell,
} from "@fortawesome/free-solid-svg-icons";




// Adding the CSS styles directly in the component
const DoctorsAppointment = () => {
  return (
    <div>
      {/* <Header text={"Login"}></Header> */}
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #e0f2f1;
            margin: 0;
            padding: 0;
          }

          .header {
            background-color: #004d40;
            padding: 20px;
            text-align: center;
            color: white;
          }

          .search-bar {
            margin: 20px auto;
            width: 50%;
            display: flex;
            justify-content: center;
          }

          .search-bar input {
            width: 100%;
            padding: 10px;
            border-radius: 25px;
            border: 1px solid #004d40;
            font-size: 16px;
          }

          .content {
            background-color: #E0F2F1;
            padding: 20px;
          }

          .tabs {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            padding : 0% 10%;
          }

          .tab {
            background-color: #fff9c4;
            padding: 10px 20px;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
          }

          .appointments {
            display: flex;
            justify-content: space-around;
            margin: 0% 5%;
          }

          .appointment-card {
            background-color: white;
            width: 45%;
            border-radius: 20px;
            position: relative;
          }

          .appointment-card img {
            border-radius: 50%;
            width: 80px;
            height: 80px;
            position: absolute;
            top: 15px;
            right: 20px;
          }

          .appointment-card h3 {
            background-color: rgb(209, 231, 224);
            padding : 1% 0% 1% 25%;
            font-size: 150%;
            color : #008000;
            border-radius: 20px 20px 0px 0px;
          }

          .appointment-card p {
            margin: 10px 0;
            font-size: 14px;
            padding : 0px 20px;
          }

          .appointment-card .buttons {
            display: flex;
            justify-content: space-between;
            margin : 20px 120px 40px 120px
          }

          .appointment-card .buttons button {
            background-color: white;
            border: 1px solid #004d40;
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            box-shadow: rgba(0, 0, 0, 0.35) 2px 4px 4px;
          }

          .appointment-card .buttons button i {
            margin-left: 5px;
          }
        `}
      </style>


<div className={`flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg `}>
        <div className=" w-full flex justify-center items-center">
          <div className="flex items-center shrink justify-center  w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
            <button type="submit"><img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" /></button>
            <input 
              className="bg-white/[0] w-full h-full outline-none p-4"
              type="text" 
              placeholder="Search Appointment.."
            />
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#FFFDE7",
          color: "#004D40",
          fontWeight: "600",
          padding: "1% 0%",
          paddingLeft: "10%",
          fontSize: "150%",
        }}
      >
        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faUserDoctor} />
        Appointments
      </div>

      <div style={{ marginTop: "2%" }} className="tabs">
        <div className="tab">Previous Appointments</div>
        <div className="tab">Upcoming Appointments</div>
        <div className="tab">Scheduled this week</div>
      </div>

      <div style={{ marginTop: "2%" }} className="content">
        <div className="appointments">
          {/* Appointment Card 1 */}
          <div className="appointment-card">
            <h3>Dr. Manju Deshmukh</h3>
            <p>
              <strong>Specialty:</strong> Primary Care Physician
            </p>
            <p>
              <strong>Date:</strong> November 15, 2024
            </p>
            <p>
              <strong>Time:</strong> 10:30 AM
            </p>
            <p>
              <strong>Reason to Visit:</strong> Follow-up appointment for
              hypertension management and to review recent blood test results
            </p>
            <img
              alt="Doctor's portrait"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/czJbymbDX06JLNXRTE4Xq0xClcceHjCBu5efbzdipnug2qfOB.jpg"
              width="80"
            />
            <div className="buttons">
              <button>
                Re-Schedule
                <FontAwesomeIcon
                  style={{ marginLeft: "10px", color: "green" }}
                  icon={faCalendarDays}
                />
              </button>
              <button>
                Set Reminder
                <FontAwesomeIcon
                  style={{ marginLeft: "10px", color: "green" }}
                  icon={faBell}
                />
              </button>
            </div>
          </div>

          {/* Appointment Card 2 (Duplicate) */}
          <div className="appointment-card">
            <h3>Dr. Ravi Deshmukh</h3>
            <p>
              <strong>Specialty:</strong> Primary Care Physician
            </p>
            <p>
              <strong>Date:</strong> November 15, 2024
            </p>
            <p>
              <strong>Time:</strong> 10:30 AM
            </p>
            <p>
              <strong>Reason to Visit:</strong> Follow-up appointment for
              hypertension management and to review recent blood test results
            </p>
            <img
              alt="Doctor's portrait"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/czJbymbDX06JLNXRTE4Xq0xClcceHjCBu5efbzdipnug2qfOB.jpg"
              width="80"
            />
            <div className="buttons">
              <button>
                Re-Schedule
                <FontAwesomeIcon
                  style={{ marginLeft: "10px", color: "green" }}
                  icon={faCalendarDays}
                />
              </button>
              <button>
                Set Reminder
                <FontAwesomeIcon
                  style={{ marginLeft: "10px", color: "green" }}
                  icon={faBell}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsAppointment;
