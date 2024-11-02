export const Button=({
    image,
    text,
    color='bg-gray-300'
}
)=>
{
    return(
        <div>
            <button type='submit'>
        <div className={`rounded-[20px] h-[70px] w-[220px] ${color} flex items-center py-2`}>
            <div className="flex p-5">
            <div className="w-16 h-12 p-1">
                <img src={image} alt="Image"></img>
            </div>
            <div className="text-[#00693B] text-xl font-jaldi font-bold p-4">
                {text}
            </div>
            </div>
        </div>
        </button>
        </div>
    )
}