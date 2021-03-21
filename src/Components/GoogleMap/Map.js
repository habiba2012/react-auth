import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px'
};

const location = {
    lat: 43.6532,
    lng: -79.3832,
};

const onLoad = marker => {
    console.log('marker:', marker)
}

const Map =()=> {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA0ZlZW0eG0DKJ9MPOl8VMUf9tESna8Y1M"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        location={location}
        zoom={12}
      >
        <Marker onLoad={onLoad} location={location}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map