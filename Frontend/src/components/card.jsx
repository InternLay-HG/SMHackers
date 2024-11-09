export const Card=(
    {text=null,
    image=null}
)=>{
    return(
        <div className="rounded-lg h-44 w-40 sm:h-48 sm:w-40 lg:h-56 lg:w-48  border-[#00693B] shrink-0 mx-4 md:mx-0">
            <div className="bg-[#D1E7E0] px-2 py-2 rounded-t-xl flex justify-centre gap-2 md:gap-4 items-center">
                {text && <div className="text-[#14AE5C] font-jaldi font-semibold md:font-bold flex items-center ">
                    {text}
                </div>}
                {image && <img className="h-4 w-4 lg:h-5 lg:w-5" src={image}>
                </img>}
                    
            
            </div>
            <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base font-inter text-sm bg-white overflow-y-scroll no-scrollbar  rounded-b-xl">
                "Random shit... (State Variable Control Logic)"
            </div>
            
        </div> 
    )
}