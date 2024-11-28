import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Button } from "../components/button";
import searchicon from "../images/searchicon.png";
import medications from "../images/Medications.png";
import { Cardmed } from "../components/Cardmed";
import { Inputfield } from "../components/inputfield";
import Delete from "../images/Delete.svg";
import Add from "../images/Add.svg";
import axios from "axios";
import { SearchBar } from "../components/searchbar";

export const Prescription = () => {
  const [Prescriptions, setPrescription] = useState([]);

  useEffect(() => {
    const patientId = localStorage.getItem("userid");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/patient/prescription",
          {
            params: { patientId },
          }
        );
        console.log(response.data);
        setPrescription(response.data.prescriptions);
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#f6fffb] h-screen">
        <Header/>
        <div
          className={`flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg `}
        >
          <div className=" w-full flex justify-center items-center">
            <div className="flex items-center shrink justify-center  w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
              <button type="submit">
                <img
                  src={searchicon}
                  alt="Search Icon"
                  className="w-5 h-5 mr-2"
                />
              </button>
              <input
                className="bg-white/[0] w-full h-full outline-none p-4"
                type="text"
                placeholder="Search Prescription.."
              />
            </div>
          </div>
        </div>
        <div className="bg-[#FFF4FA] flex align-center">
          <div className="flex items-center p-1 md:p-1.5 lg:p-2">
            <div className=" h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-12 lg:h-12  p-2  ">
              <img src={medications} alt="Image" />
            </div>
            <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold  p-2 lg:p-4">
              Medication
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-10 px-10 py-6 bg-[#F6FFFBC7] sm:h-32 flex-wrap mb-1 sm:flex-nowrap">
          <Button
            color={"bg-[#FFF4FA]"}
            text={"Medication"}
            subtext1={"Current"}
          />
          <Button color={"bg-[#FFF4FA]"} text={"Prescription"} />
        </div>

        <div className="current-med flex justify-evenly gap-4 flex-col sm:flex-row">
          <Cardmed
            text={"Type-II Diabetes"}
            content={
              "8:00AM- Glipizide [1 tablet],\n8:30AM - Metformin[with breakfast],\n8:00PM - Metformin,\n9:00PM - Lantus [before bedtime]"
            }
          />
          <div className="flex px-5 md:px-20 justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip">
            {Prescriptions.length === 0 ? (
              <p>No prescription yet.</p>
            ) : (
              Prescriptions.map((prescription, index) => (
                <div
                  key={index}
                  className="rounded-lg border-[#00693B] shrink-0 mx-4 md:mx-0"
                >
                  <div className="bg-[#D1E7E0] px-2 py-2 rounded-t-xl flex justify-center gap-2 md:gap-4 items-center">
                    <div className="text-[#14AE5C] font-jaldi font-semibold md:font-bold flex items-center ">
                      {prescription.doctorName}
                    </div>
                  </div>
                  <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base font-inter text-sm bg-white overflow-y-scroll no-scrollbar  rounded-b-xl">
                    <p className="font-semibold inline">Specialty:</p>
                    <p className="inline"> {prescription.specialty}</p>
                    <h4 className="font-bold">Medicines:</h4>
                    <ul>
                      {prescription.medicines.map((medicine, i) => (
                        <li key={i}>
                          {medicine.name} - Take at: {medicine.timing}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export const PrescriptionForm = () => {
  const [medicineFields, setMedicineFields] = useState([
    { name: "", dosage: "",frequency:"" },
  ]);

  const addMedicineField = () => {
    setMedicineFields([...medicineFields, { name: "", dosage: "",frequency:"" }]);
  };

  const removeMedicineField = (index) => {
    const newFields = medicineFields.filter((_, i) => i !== index);
    setMedicineFields(newFields);
  };

  const handleFieldChange = (index, field, value) => {
    const newFields = [...medicineFields];
    newFields[index][field] = value;
    setMedicineFields(newFields);
  };
  return (
    <>
      <Header text={"Login"} />
      <SearchBar text={"Search Patient"} />
      <div class="w-full -mt-56 h-screen bg-[#f6fffb] flex flex-col items-center justify-center">
        <h1 class="text-3xl font-semibold mb-6 text-[#00693B] font-inter text-center">
          Doctor's Prescription
        </h1>
        <form
          className="p-6 m-6 shadow-md "
          class="space-y-4"
          onSubmit={async ()=>{
            try {
              const response = await axios.post('/prescription', medicineFields);
              console.log('Prescription created successfully:', response.data);
            } catch (error) {
              if (error.response) {
                console.error('Error response data:', error.response.data);
              } else if (error.request) {
                console.error('Error request:', error.request);
              } else {
                console.error('Error message:', error.message);
              }
            }
          }
          }
        >
          {medicineFields.map((medicine, index) => (
            <div
              key={index}
              className="flex flex-col justify-around items-center gap-2"
            >
              <section className="flex justify-around gap-1 items-end">
                <Inputfield
                  onChange={(e) =>
                    handleFieldChange(index, "name", e.target.value)
                  }
                  text={`Medicine ${index + 1}`}
                  type={"text"}
                  id={"medicine-name"}
                />
                <Inputfield
                  onChange={(e) =>
                    handleFieldChange(index, "dosage", e.target.value)
                  }
                  text={`Medicine ${index + 1} Dosage`}
                  type={"text"}
                  id={"doses"}
                />
                <Inputfield
                  onChange={(e) =>
                    handleFieldChange(index, "Medicine Frequency", e.target.value)
                  }
                  text={`Medicine ${index + 1} Frequency`}
                  type={"number"}
                  id={"frequency"}
                />
                <button
                  onClick={() => removeMedicineField(index)}
                  type="submit"
                  className="flex h-10 sm:px-3 justify-center px-2 md:py-1 items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 bg-white rounded-sm md:rounded-md lg:rounded-lg hover:bg-green-100 text-medic-green shadow-sm text-xs sm:text-sm lg:text-base"
                >
                  <img
                    src={Delete}
                    alt="User Icon"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                  />
                </button>
              </section>
              <button
                onClick={() => addMedicineField()}
                className="flex h-10 w-2/5 sm:px-3 justify-center px-2 md:py-1 items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 bg-white rounded-sm md:rounded-md lg:rounded-lg hover:bg-green-100 text-medic-green shadow-sm text-xs sm:text-sm lg:text-base"
              >
                Add Medicine
                <img
                  src={Add}
                  alt="User Icon"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                />
              </button>
            </div>
          ))}

          <div>
            <button
              type="submit"
              className="w-full bg-white p-2 rounded-md hover:bg-gray-8 hover:bg-green-100 text-medic-green shadow-md focus:shadow-lg focus:ring-offset-2 transition-colors duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}