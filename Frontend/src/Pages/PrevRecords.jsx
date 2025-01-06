import React from "react"
import { useState,useRef } from "react"
import { Header } from "../components/header.jsx"
import searchicon from '../images/searchicon.png'
import recordimage from '../images/Records.png'
import {Button} from "../components/button.jsx"
import {Card} from "../components/card.jsx"
import {Click} from "../components/click.jsx"
import more from "../images/more.svg"
import update from "../images/update.svg"



function PrevRecords(){

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    condition: "",
    date: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
    
    setFormData({ condition: "", date: "", description: "" });
    setIsModalOpen(false);
  };


  const [isDivVisible, setDivVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setDivVisible(!isDivVisible);
  };

  
    const [chronicVisible, setchronicVisible] = useState(false);
    const chronicRef = useRef(null);
  
    const handleChronic = () => {
      setchronicVisible(!chronicVisible);
    };

    const [physicalVisible, setphysicalVisible] = useState(false);
    const physicalRef = useRef(null);
  
    const handlePhysical = () => {
      setphysicalVisible(!physicalVisible);
    };
  return(
    <div className="bg-[#f6fffb] h-screen" >
      <Header text={"Login"}></Header>

      <div className={`flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg `}>
        <div className=" w-full flex justify-center items-center">
          <div className="flex items-center shrink justify-center  w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
            <button type="submit"><img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" /></button>
            <input 
              className="bg-white/[0] w-full h-full outline-none p-4"
              type="text" 
              placeholder="Search Records.."
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E5FDFF] flex align-center">
        <div className="flex items-center p-1 md:p-1.5 lg:p-2">
          <div className=" h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-12 lg:h-12  p-2  ">
            <img src={recordimage} alt="Image"></img>
          </div>
          <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold  p-2 lg:p-4">
            Past Medical Records
          </div>
          
        </div>
      </div>
        <div className="flex justify-evenly gap-0 px-10 py-6 bg-[#F6FFFBC7] h-48 sm:h-32 flex-wrap sm:flex-nowrap">
          <div className="relative">
          <Button ref={buttonRef} onClick={handleButtonClick} color={"bg-[#E5FDFF]"} text={"Social History"} ></Button>
          {isDivVisible && (
              <div className="absolute top-full -left-4 md:-left-2 lg:left-0 mt-2 w-28 md:w-48  lg:w-full  p-2 z-10"
              style={{
                top: buttonRef.current ? buttonRef.current.offsetHeight : 0,
              }}
              >
              <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base  font-inter text-sm bg-white rounded-xl">
              <p className='font-semibold inline'>Tobacco Use: </p><p className='inline'>1 pack/day </p>
              <p className='font-semibold inline'>Alcohol Use: </p><p className='inline'>Social Drinker </p>
              <p className='font-semibold inline'>physical activity: </p><p className='inline'>Minimal </p>
              <p className='font-semibold inline'>Stress Levels: </p><p className='inline'>High</p>
              </div>
              
              </div>
              )}
          </div>
          <div className="relative">
          <Button ref={chronicRef} onClick={handleChronic} color={"bg-[#E5FDFF]"} text={"Chronic Conditions"} ></Button>
          {chronicVisible && (
              <div className="absolute top-full -left-4 md:-left-2 lg:left-0 mt-2 w-28 md:w-48  lg:w-full  p-2 z-10"
              style={{
                top: buttonRef.current ? buttonRef.current.offsetHeight : 0,
              }}
              >
              <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base  font-inter text-sm bg-white rounded-xl">
              Asthama
              </div>
              
              </div>
              )}
          </div>
          <Button color={"bg-[#E5FDFF]"} text={"Previous Surgery"} ></Button>
          <Button color={"bg-[#E5FDFF]"} text={"Family Medical History"} ></Button>
          <div className="relative">
          <Button ref={physicalRef} onClick={handlePhysical}  color={"bg-[#E5FDFF]"} text={"Last Physical Exam"}></Button>
          {physicalVisible && (
              <div className="absolute top-full -left-4 md:-left-2 lg:left-0 mt-2 w-28 md:w-48  lg:w-full  p-2 z-10"
              style={{
                top: buttonRef.current ? buttonRef.current.offsetHeight : 0,
              }}
              >
              <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base  font-inter text-sm bg-white rounded-xl">
              <p className='font-semibold'>15|10|2024: </p>
              <p className='inline'>Eye Checkup</p>
              </div>
              
              </div>
              )}
          </div>
        </div>
        <div className="flex px-5 md:px-20  justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip ">
          <Card text={"Condition"} ></Card>
          <Card text={"Condition"}></Card>
          <Card text={"Condition"}  ></Card>
          <Card text={"Condition"} ></Card>
          <Card text={"Condition"}></Card>
        </div>
        <div className="w-full flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 ">
          <Click text={"More"} image={more} />
          <Click text={"Update Records"} onClick={() => setIsModalOpen(true)} image={update}/>
          {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg text-medic-green font-semibold mb-4">Update Records</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Medical Condition
                </label>
                <input
                  type="text"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Diagnosis
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  rows="3"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-back-green text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>
    
    


      
    </div>
  )
}
export default PrevRecords;