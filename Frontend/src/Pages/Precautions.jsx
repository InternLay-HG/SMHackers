import { Header } from '../components/header';
import { Card } from '../components/card';
import DiseasesData from './Diseases_Data.json';
import searchicon from '../images/searchicon.png';
import { useState } from 'react';

export const Precautions = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
    const [filteredData, setFilteredData] = useState(DiseasesData); // State to hold filtered data

    // Function to handle search
    const handleSearch = () => {
        const filtered = DiseasesData.filter(disease =>
            disease.disease.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <Header />

            {/* Search bar */}
            <div className="flex justify-center items-center p-2 bg-search bg-back-green h-32 md:h-44 relative shadow-lg">
                <div className="w-full flex justify-center items-center">
                    <div className="flex items-center shrink justify-center w-1/2 h-12 md:h-16 rounded-[20px] px-4 bg-searchbar-background-green">
                        <button
                            type="button"
                            onClick={handleSearch}
                        >
                            <img src={searchicon} alt="Search Icon" className="w-5 h-5 mr-2" />
                        </button>
                        <input
                            className="bg-white/[0] w-full h-full outline-none p-4"
                            type="text"
                            placeholder="Search Disease.."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                        />
                    </div>
                </div>
            </div>

            {/* Disease cards */}
            <div className="flex flex-wrap gap-4 justify-center p-4">
                {filteredData.length > 0 ? (
                    filteredData.map((disease, index) => (
                        <Card
                            key={index}
                            text={disease.disease}
                            info={
                                <>
                                    <strong>Symptoms:</strong> {disease.symptoms.join(', ')} <br />
                                    <strong>Precautions:</strong> {disease.precautions.join(', ')} <br />
                                    <strong>Cure:</strong> {disease.cure.join(', ')} <br />
                                    <strong>Suggestions:</strong> {disease.suggestions.join(', ')}
                                </>
                            }
                        />
                    ))
                ) : (
                    <p>No diseases found matching your search.</p>
                )}
            </div>
        </div>
    );
};
