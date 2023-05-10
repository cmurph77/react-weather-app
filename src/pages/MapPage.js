import React from 'react'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Navbar from '../components/Navbar';

export default function MapPage() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: 'AIzaSyBVTjT8tTQd45SmioNnxan-POCp4KRb3DY',
    });
  
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }

function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  
    return (
        <div className='mapPage'>
            <Navbar></Navbar>
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap>

        </div>
      
    );
  }


