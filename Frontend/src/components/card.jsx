export const Card=(
    {text,
    image}
)=>{
    return(
        <div className="rounded-lg h-52 w-[200px] border-[#00693B]">
            <div className="bg-[#D1E7E0] px-2 py-2 rounded-t-xl flex justify-around items-center">
                <div className="text-[#14AE5C] font-jaldi font-bold flex items-center ">
                    {text}
                </div>
                <div >
                    <img className="h-5 w-5" src={image}>
                    </img>
                </div>
            </div>
            <div className="p-5 text-[#92C1B6] bg-white h-full rounded-b-xl">
                "Random shit... (State Variable Control Logic)"
            </div>
        </div>
    )
}