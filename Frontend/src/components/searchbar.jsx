import searchicon from '../images/searchicon.png'
export const SearchBar = ({
    text
}) => {
    return (
        <div className={`flex justify-center items-center p-2 bg-search bg-back-green h-40 md:h-64 relative shadow-lg `}>
            <div className=" w-full flex justify-center items-center">
                <div className="flex items-center  justify-center w-1/2 h-14 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
                    <button type="submit"><img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" /></button>
                    <input 
                        className="bg-white/[0] w-full h-full outline-none p-4"
                        type="text" 
                        placeholder={text}
                    />
                </div>
            </div>
        </div>
    );
};
