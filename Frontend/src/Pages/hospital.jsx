import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Phone from '../images/phone.svg';
import Mail from '../images/Mail.svg';

export const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const position = await getUserLocation();
        const response = await axios.get('http://localhost:3000/api/v1/user/location', { 
          params: { 
            lat: position.coords.latitude, 
            lon: position.coords.longitude 
          }
        });

        setHospitals(response.data.elements); 
        setLoading(false); 
      } catch (error) {
        console.error(error);
        setError("Failed to fetch hospital data");
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject("Failed to get location")
      );
    });
  };

  if (loading) {
    return <div>Loading hospitals...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-[#f6fffb] h-screen">
      <h1 className="text-lg sm:text-xl md:text-2xl font-medium md:font-semibold mb-6 text-[#00693B] font-inter p-4">
        List of Hospitals
      </h1>
      {hospitals.length === 0 ? (
        <div>No hospitals found</div>
      ) : (
        hospitals.map((building) => {
          const { tags } = building;
          return (
            <div key={building.id} className="p-3 md:p-5 w-full flex shrink justify-between shadow-md text-[#92C1B6] sm:text-base font-inter text-sm bg-white rounded-xl mb-4">
              <div className="p-1">
                <h2 className="p-2 text-base md:text-lg lg:text-xl font-medium md:font-semibold">{tags.name}</h2>
                <p className="px-2 pb-1 sm:text-sm md:text-base">{tags["addr:district"]}, {tags["addr:state"]}</p> {/* Address */}
                <p className="px-2 pb-1 sm:text-sm md:text-base">{tags["addr:full"]}</p> {/* Full address */}
                <hr className="font-bold" />
              </div>
              <div className="p-4 flex items-center justify-around gap-8">
                <img src={Phone} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" alt="Phone" />
                <img src={Mail} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" alt="Mail" />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
