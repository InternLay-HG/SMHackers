import React from 'react'

export const Inputfield = (
  {
    type,
    text,
    id,
    pattern="."
  }
) => {
  return (
    <div>
      <label for={text} className="block text-sm font-medium text-[#00693B]">{text}</label>
      <input type={type} id={id} pattern={pattern} name={text} className="mt-1 p-2 w-full border rounded-md focus:border-[#00693c8d] focus:border-2 focus:outline-none  transition-colors duration-300"/>
    </div>
  )
}

