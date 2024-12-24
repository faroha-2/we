
import React, { useEffect } from "react";

const App = () => {
    useEffect(() => {
        // Set the current year
        const currentYear = new Date().getFullYear();
        document.getElementById("displayYear").textContent = currentYear;

        // Initialize Google Map
        const myMap = () => {
            const mapProp = {
                center: { lat: 40.712775, lng: -74.005973 },
                zoom: 18,
            };
            new window.google.maps.Map(document.getElementById("googleMap"), mapProp);
        };

        myMap();
    }, []);

    return (
        <div>
            <h1 id="displayYear">Year will appear here</h1>
            <div id="googleMap" style={{ width: "100%", height: "400px" }}></div>
        </div>
    );
};

export default App;