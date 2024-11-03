export const Button=({
    image=null,
    text,
    prop=null,
    color='bg-gray-300'
}
)=>

{
    
        return(
            <div className="h-14">
            <button type='submit' >
            <div className={`rounded-[15px] md:rounded-[20px]  md:w-[180px] ${color} flex items-center justify-centermd:justify-around h-16 lg:py-2 hover:ring-2 hover:ring-green-200 `} >
                   <div className="flex items-center  p-2">
                   
                    {image && <img className="h-10 w-10 lg:w-12 lg:h-12 p-2 " src={image} alt="Image"></img> }
                
                   
                   <div className={`text-[#00693B] text-base lg:text-lg font-jaldi font-semibold ${prop} md:inline p-2 lg:p-4`}>
                       {text}
                   </div>
                   </div>
             </div>
            </button>
             </div>
        )
    
    
        
    

    
}  
