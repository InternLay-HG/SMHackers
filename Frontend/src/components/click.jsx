
export const Click = ({
    text,
    image = null,
    onClick
}) => {
    return (
        
            <button onClick={onClick ? onClick : undefined} type="submit" className="flex px-2.5 sm:px-3 justify-center md:px-3.5 lg:px-4 md:py-1 items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 bg-white rounded-sm md:rounded-md lg:rounded-lg hover:bg-green-100 text-medic-green shadow-md text-xs sm:text-sm lg:text-base">
                {text}
                {image && <img src={image} alt="User Icon" className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4"/>}
            </button>
        
    );
}