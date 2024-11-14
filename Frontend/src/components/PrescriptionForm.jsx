import React from 'react'
import { Inputfield } from './inputfield';
import Delete from '../images/Delete.svg';
import Add from '../images/Add.svg';
import { useState } from 'react';


export const PrescriptionForm = () => {

  const [medicineFields, setMedicineFields] = useState([{ name: '', dosage: '' }]);

  const addMedicineField = () => {
    setMedicineFields([...medicineFields, { name: '', dosage: '' }]);
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
    <div class="w-full h-screen bg-[#f6fffb] flex flex-col items-center justify-center">
      <h1 class="text-3xl font-semibold mb-6 text-[#00693B] font-inter text-center">Doctor's Prescription</h1>
      <form className="p-6 m-6 shadow-md " action="/signup" method="POST" class="space-y-4">
      <Inputfield text={"Name"} type={"text"} id={"name"} />
      {medicineFields.map((medicine, index) => (
        <div key={index} className='flex flex-col justify-around items-center gap-2'>
          <section className="flex justify-around gap-1 items-end">
            <Inputfield onChange={(e) => handleFieldChange(index, 'name', e.target.value)} text={`Medicine ${index+1}`} type={"text"} id={"medicine-name"} />
            <Inputfield onChange={(e) => handleFieldChange(index, 'dosage', e.target.value)} text={`Medicine ${index+1} Dosage`} type={"text"} id={"doses"}/>
            <button onClick={() => removeMedicineField(index)} type="submit" className="flex h-10 sm:px-3 justify-center px-2 md:py-1 items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 bg-white rounded-sm md:rounded-md lg:rounded-lg hover:bg-green-100 text-medic-green shadow-sm text-xs sm:text-sm lg:text-base">
                 
                <img src={Delete} alt="User Icon" className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"/>
            </button>
          </section>
          <button onClick={()=>addMedicineField()} type="submit" className="flex h-10 w-2/5 sm:px-3 justify-center px-2 md:py-1 items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 bg-white rounded-sm md:rounded-md lg:rounded-lg hover:bg-green-100 text-medic-green shadow-sm text-xs sm:text-sm lg:text-base">
                 Add Medicine
                <img src={Add} alt="User Icon" className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"/>
            </button>

        </div>

      ))}






<div>
  <button type="submit" className="w-full bg-white p-2 rounded-md hover:bg-gray-8 hover:bg-green-100 text-medic-green shadow-md focus:shadow-lg focus:ring-offset-2 transition-colors duration-300">Save</button>
</div>
</form>
    </div>
  )
}
