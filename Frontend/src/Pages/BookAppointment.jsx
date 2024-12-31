import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Click } from "../components/click";
import { Header } from "../components/header";
import axios from "axios";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [filter, setFilter] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [problemDescription, setProblemDescription] = useState("");
  const [doctorsData, setDoctorData] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/patient/doctors');
        setDoctorData(response.data.doctors);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };
  
    fetchDoctors();
  }, []);

  const handleAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setConfirmationMessage("");
    setProblemDescription(""); // Reset problem description when selecting a new doctor
  };

  const confirmAppointment = async () => {
    if (!selectedDate || selectedDate < new Date()) {
      alert("Please select a valid appointment date from the date picker.");
      return;
    }
    if (!problemDescription.trim() || problemDescription.split(" ").length > 30) {
      alert("Please describe your problem in fewer than 30 words.");
      return;
    }

    const appointmentData = {
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      appointmentDate: selectedDate,
      problemDescription: problemDescription,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/v1/appointments', appointmentData);
      if (response.status === 200) {
        setConfirmationMessage(
          `Appointment confirmed with ${selectedDoctor.name} on ${selectedDate.toDateString()}.`
        );
      }
    } catch (err) {
      console.error("Error while booking appointment:", err);
      alert("Failed to confirm appointment. Please try again.");
    }
    
    setSelectedDoctor(null);  // Reset doctor selection after confirming appointment
  };

  const closePopup = () => {
    setSelectedDoctor(null);
    setConfirmationMessage("");
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, index) => (
          <span key={index} className="text-yellow-500">
            ★
          </span>
        ))}
        {halfStar && <span className="text-yellow-500">☆</span>}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span key={index} className="text-gray-400">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header text={"Login"} />
      <div style={{ backgroundColor: "#F6FFFB" }} className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
        <div style={{ backgroundColor: "#F6FFFB" }} className="w-full sm:w-1/5 bg-white shadow-lg p-6 mb-6 sm:mb-0">
          <h3 className="text-xl font-bold mb-4 mt-20">Filter by Specialty</h3>
          <select
            style={{ backgroundColor: "#F6FFFB" }}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-6"
          >
            <option value="All">All</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Physician">Physician</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Infectious Disease Specialist">
              Infectious Disease Specialist
            </option>
          </select>
          <h3 className="text-xl font-bold mb-4 mt-12">Pick a Date</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            className="w-full p-2 border border-gray-300 rounded"
            placeholderText="Select a date"
            highlightDates={[new Date()]}  // Highlight today's date
            dayClassName={(date) => date.toDateString() === new Date().toDateString() ? "text-blue-500 font-bold" : ""} // Add custom class to today's date
          />
        </div>
        <div className="w-full sm:w-4/5 p-12">
          {confirmationMessage && (
            <div className="mt-6 p-4 bg-green-200 text-green-700 rounded mb-6">
              {confirmationMessage}
            </div>
          )}
          <h2 className="text-2xl font-bold mb-6 mt-9">Available Doctors</h2>
          <div style={{ backgroundColor: "#F6FFFB" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctorsData.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start mt-4"
              >
                <div className="flex flex-col sm:w-3/5 mr-4 mb-4 sm:mb-0">
                  <h3 className="text-lg font-bold">{doctor.name}</h3>
                  <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                  <p className="text-gray-500 text-sm mb-2">
                    {doctor.experience} years of experience
                  </p>
                  <div className="mb-4">{renderStars(doctor.rating)}</div>
                  <Click text={"Book Appointment"} onClick={() => handleAppointment(doctor)} />
                </div>
                <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden mb-4 sm:mb-0">
                  <img
                    src={`https://via.placeholder.com/80`}
                    alt="doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          {selectedDoctor && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-bold mb-4">Confirm Appointment</h3>
                <p>
                  Are you sure you want to book an appointment with{" "}
                  {selectedDoctor.name} on {selectedDate?.toDateString()}?
                </p>
                <div className="mt-4">
                  <label htmlFor="problemDescription" className="block font-medium mb-2">
                    Describe Your Problem (required, less than 30 words)
                  </label>
                  <textarea
                    id="problemDescription"
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Describe your problem..."
                    rows={4}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <Click text={"Cancel"} onClick={closePopup} />
                  <Click
                    text={loading ? "Confirming..." : "Confirm Appointment"}
                    onClick={confirmAppointment}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
