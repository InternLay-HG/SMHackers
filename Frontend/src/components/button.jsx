export const Button=({
    image=null,
    text,
    prop=null,
    color='bg-gray-300'
}
)=>

{
    
        return(
            <div className="h-10 sm:h-12 md:h-14 p-0">
            <button type='submit' className="p-0" >
            <div className={`rounded-[15px] md:rounded-[20px]  lg:w-[180px] ${color} flex items-center justify-center md:justify-around lg:h-16 lg:py-2 hover:ring-2 hover:ring-green-200 `} >
                   <div className="flex items-center p-1 lg:p-2">
                   
                    {image && <img className="h-9 w-9 sm:h-10 sm:w-10 lg:w-12 lg:h-12 p-2 " src={image} alt="Image"></img> }
                
                   
                   <div className={`text-[#00693B] text-xs sm:text-base  lg:text-lg font-jaldi font-normal md:font-semibold ${prop} md:inline p-1 md:p-3 lg:p-4`}>
                       {text}
                   </div>
                   </div>
             </div>
            </button>
             </div>
        )
    
    
        
    

    
}  
