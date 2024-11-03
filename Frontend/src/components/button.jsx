export const Button=({
    image,
    text,
    color='bg-gray-300'
}
)=>
{
    return(
        <div>
        <button type='submit' >
        <div className={`rounded-[20px] h-[60px] w-[180px] ${color} flex items-center justify-around py-2 hover:ring-2 hover:ring-green-200`}>
            <div className="flex items-center p-2">
            <div className="w-12 h-12 p-2 ">
                <img src={image} alt="Image"></img>
            </div>
            <div className="text-[#00693B] text-lg font-jaldi font-semibold p-4">
                {text}
            </div>
            </div>
        </div>
        </button>
        </div>
    )
}