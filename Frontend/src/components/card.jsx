export const Card=(
    {text,
    image}
)=>{
    return(
        <div className="rounded-[15px] h-[250px] w-[200px] border-2 border-[#00693B]">
            <div className="bg-[#D1E7E0] px-5 py-2 rounded-t-[15px]">
                <div className="text-[#14AE5C] font-jaldi font-bold">
                    {text}
                </div>
                <div >
                    <img  src={image}>
                    </img>
                </div>
            </div>
            <div className="p-5 text-[#92C1B6]">
                "Random shit... (State Variable Control Logic)"
            </div>
        </div>
    )
}