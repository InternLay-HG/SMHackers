export const SearchBar = () => {
    return (
        <div className="flex justify-center p-2 bg-search bg-back-green h-[250px] relative shadow-lg ">
            <div className="absolute top-[90px] w-full">
                <div className="flex items-center mx-[400px] w-1/2 h-[70px] rounded-[20px] px-4 bg-searchbar-background-green">
                    <img src="../assets/searchicon.png" alt="Search Icon" className="w-5 h-5 mr-2" />
                    <input 
                        className="bg-white/[0] w-full h-full outline-none p-4"
                        type="text" 
                        placeholder="Search records, insurance, appointments..."
                    />
                </div>
            </div>
        </div>
    );
};
