export const Button=({
    image,
    text,
    color='bg-gray-300'
}
)=>
{
    return(
        <div className={`rounded-lg h-[70px] w-[200px] ${color} flex items-center`}>
            <div className="flex p-5">
            <div>
                <img src={image} alt="Image"></img>
            </div>
            <div>
                {text}
            </div>
            </div>
        </div>
    )
}