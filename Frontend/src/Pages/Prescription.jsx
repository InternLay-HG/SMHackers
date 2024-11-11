import React from 'react'
import { Header } from '../components/header'
import { Button } from '../components/button'
import searchicon from '../images/searchicon.png'
import medications from '../images/Medications.png'
import { Cardmed } from '../components/Cardmed'

export const Prescription = () => {


  const Prescriptions=[    {
    doctorName: "Dr. Smith",
    specialty: "Cardiologist",
    medicines: [
      { name: "Aspirin", timing: "Morning" },
      { name: "Metoprolol", timing: "Evening" }
    ]
  },
  {
    doctorName: "Dr. Brown",
    specialty: "Dermatologist",
    medicines: [
      { name: "Clindamycin", timing: "Night" }
    ]
  }];
  return (
    <div className="bg-[#f6fffb] h-screen" >
      <Header text={"Login"}></Header>

      <div className={`flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg `}>
        <div className=" w-full flex justify-center items-center">
          <div className="flex items-center shrink justify-center  w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
            <button type="submit"><img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" /></button>
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
            <img src={medications} alt="Image"></img>
          </div>
          <div className="text-[#00693B] text-sm md:text-base lg:text-lg font-jaldi font-semibold  p-2 lg:p-4">
            Medication
          </div>
          
        </div>
      </div>
      <div className="flex justify-around gap-10 px-10 py-6 bg-[#F6FFFBC7] h-48 sm:h-32 flex-wrap sm:flex-nowrap">
        <Button color={"bg-[#FFF4FA]"} text={"Medication"} subtext1={"Current"}  ></Button>
        <Button color={"bg-[#FFF4FA]"} text={"Prescription"} ></Button>
          
      </div>

      <div className="current-med  flex justify-evenly">
        <Cardmed text={"Type-II Diabetes"}
          content={"8:00AM- Glipizide [1 tablet],\n8:30AM - Metformin[with breakfast],\n8:00PM - Metformin,\n9:00PM - Lantus [before bedtime]"}
        />
        
      
      
      <div className='flex px-5 md:px-20 justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#f6fffb] overflow-x-scroll no-scrollbar overflow-y-clip' >
      {Prescriptions.length === 0 ? (
        <p>No prescription yet.</p>
      ) : (
        Prescriptions.map((prescription, index) => (
          <div key={index} className="rounded-lg   border-[#00693B] shrink-0 mx-4 md:mx-0">
            <div className="bg-[#D1E7E0] px-2 py-2 rounded-t-xl flex justify-center gap-2 md:gap-4 items-center">
               <div className="text-[#14AE5C] font-jaldi font-semibold md:font-bold flex items-center ">
                    {prescription.doctorName}
                </div>
                
                    
            
            </div>
            <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base  font-inter text-sm bg-white overflow-y-scroll no-scrollbar  rounded-b-xl" >
            <p className='font-semibold inline'>Specialty:</p><p className='inline'> {prescription.specialty}</p>
            <h4 className='font-bold'>Medicines:</h4>
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
  )
}
