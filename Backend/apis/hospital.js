const axios = require('axios');

const getHospitals = async (lat, lon, req, res) => {
    try {
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        if (!latitude || !longitude) {
            return res.status(400).json({ error: "Latitude and longitude are required" });
        }

        const NegLatitude = latitude - 0.2;
        const PosLatitude = latitude + 0.2;
        const NegLongitude = longitude - 0.2;
        const PosLongitude = longitude + 0.2;

        const response = await axios.get('https://overpass-api.de/api/interpreter', {
            params: {
                data: `[out:json];node["amenity"="hospital"](${NegLatitude},${NegLongitude},${PosLatitude},${PosLongitude});out;`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching hospitals:", error);
        res.status(500).json({ error: "Error fetching hospital data" });
    }
};

module.exports = getHospitals;
