// import React, { useCallback, useRef } from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "100%",
// };

// const mapStyles = [
//   {
//     featureType: "all",
//     elementType: "all",
//     stylers: [{ saturation: -100 }, { gamma: 0.5 }],
//   },
// ];

// const markerIcon = {
//   path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
//   fillColor: "#d81100",
//   fillOpacity: 1,
//   strokeWeight: 0,
//   scale: 2,
// };

// const center = { lat: 25.1780034, lng: 55.2738369 };

// const MapSectionTwo = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Your API key from .env.local
//   });

//   const mapRef = useRef();

//   const onLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <div className="relative w-full h-[500px] lg:h-[639px] pt-11 md:pt-10 lg:pt-20">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={15}
//         onLoad={onLoad}
//         options={{
//           styles: mapStyles,
//           disableDefaultUI: true, // Disable default controls if desired
//         }}
//       >
//         <Marker position={center} icon={markerIcon} />
//       </GoogleMap>
//     </div>
//   );
// };

// export default MapSectionTwo;
