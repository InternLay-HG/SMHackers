
export const Click = ({
    text,
    image
}) => {
    return (
        
            <button type="submit" className="flex px-4 py-1 items-center gap-3 bg-white rounded-lg hover:bg-green-100 text-medic-green shadow-md">
                {text}
                <img src={image} alt="User Icon" className="w-4 h-4"/>
            </button>
        
    );
}