import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "@emailjs/browser";

const doctorsData = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", available: true, experience: 12, rating: 4.5 },
  { id: 2, name: "Dr. Jane Smith", specialty: "Physician", available: false, experience: 8, rating: 4 },
  { id: 3, name: "Dr. Emily Carter", specialty: "Neurologist", available: true, experience: 15, rating: 5 },
  { id: 4, name: "Dr. Robert Brown", specialty: "Infectious Disease Specialist", available: true, experience: 10, rating: 3.8 },
  { id: 5, name: "Dr. Alex Moore", specialty: "Physician", available: true, experience: 10, rating: 4 },
  { id: 6, name: "Dr. Lisa Green", specialty: "Cardiologist", available: false, experience: 7, rating: 4.2 },
];

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredDoctors = filter === "All"
    ? doctorsData
    : doctorsData.filter((doc) => doc.specialty === filter);

  const handleAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setConfirmationMessage(""); // Reset confirmation message
  };

  const sendConfirmationEmail = (doctor) => {
    const userEmail = "user_email@example.com"; // Replace with the logged-in user's email
    const templateParams = {
      user_email: userEmail,
      doctor_name: doctor.name,
      appointment_date: selectedDate.toDateString(),
    };

    setLoading(true); // Start loading when sending email
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        templateParams,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setLoading(false); // Stop loading once email is sent
        },
        (error) => {
          console.error("Failed to send email:", error);
          setLoading(false); // Stop loading even if email fails
        }
      );
  };

  const confirmAppointment = () => {
    setConfirmationMessage(
      `Appointment confirmed with ${selectedDoctor.name} on ${selectedDate.toDateString()}.`
    );
    sendConfirmationEmail(selectedDoctor); // Trigger email on confirmation
    setSelectedDoctor(null); // Close the popup automatically
  };

  const closePopup = () => {
    setSelectedDoctor(null);
    setConfirmationMessage("");
  };

  const disablePastDates = ({ date }) => {
    const today = new Date();
    return date < today.setHours(0, 0, 0, 0); // Disable dates before today
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, index) => (
          <span key={index} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-500">☆</span>}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span key={index} className="text-gray-400">★</span>
        ))}
      </div>
    );
  };

  return (
    <div style={{ background: "#F6FFFB" }} className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div style={{ background: "#F6FFFB" }} className="w-full sm:w-1/5 bg-white shadow-lg p-6 mb-6 sm:mb-0">
        <h3 className="text-xl font-bold mb-4 mt-20">Filter by Specialty</h3>
        <select style={{backgroundColor:"#F6FFFB"}}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-6"
        >
          <option value="All">All</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Physician">Physician</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Infectious Disease Specialist">Infectious Disease Specialist</option>
        </select>
        <h3 className="text-xl font-bold mb-4 mt-12">Pick a Date</h3>
        <Calendar 
          onChange={setSelectedDate}
          value={selectedDate}
          tileDisabled={disablePastDates}
          className="border border-gray-300 rounded"
        />
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-4/5 p-12">
        {/* Display confirmation message if appointment is confirmed */}
        {confirmationMessage && (
          <div className="mt-6 p-4 bg-green-200 text-green-700 rounded mb-6">
            {confirmationMessage}
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6 mt-9">Available Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-4 rounded shadow-lg flex flex-col sm:flex-row items-center sm:items-start mt-4">
              {/* Left side - Name, Experience, Rating */}
              <div className="flex flex-col sm:w-3/5 mr-4 mb-4 sm:mb-0">
                <h3 className="text-lg font-bold">{doctor.name}</h3>
                <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                <p className="text-gray-500 text-sm mb-2">{doctor.experience} years of experience</p>
                <div className="mb-4">{renderStars(doctor.rating)}</div>
                <button
                  onClick={() => handleAppointment(doctor)}
                  disabled={!doctor.available}
                  className={`px-4 py-2 rounded text-white ${doctor.available ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}`}
                >
                  {doctor.available ? "Take Appointment" : "Unavailable"}
                </button>
              </div>

              {/* Right side - Profile Image */}
              <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden mb-4 sm:mb-0">
                <img src={`https://via.placeholder.com/80`} alt="doctor" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Confirmation Popup */}
        {selectedDoctor && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4">Confirm Appointment</h3>
              <p>Are you sure you want to book an appointment with {selectedDoctor.name} on {selectedDate.toDateString()}?</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={closePopup}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmAppointment}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  disabled={loading}
                >
                  {loading ? "Confirming..." : "Confirm"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
