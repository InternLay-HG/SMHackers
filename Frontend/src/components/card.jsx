export const Card=(
    {text,
    image=null}
)=>{
    return(
        <div className="rounded-lg h-48 w-40 sm:w-48  border-[#00693B] shrink-0 mx-4 md:mx-0">
            <div className="bg-[#D1E7E0] px-2 py-2 rounded-t-xl flex justify-around items-center">
                <div className="text-[#14AE5C] font-jaldi font-bold flex items-center ">
                    {text}
                </div>
                {image && <img className="h-5 w-5" src={image}>
                </img>}
                    
            
            </div>
            <div className=" p-3 md:p-5 text-[#92C1B6] sm:text-base font-inter text-sm bg-white h-40 overflow-y-scroll no-scrollbar md:h-full  rounded-b-xl">
                "Random shit... (State Variable Control Logic)"
            </div>
        </div>
    )
}