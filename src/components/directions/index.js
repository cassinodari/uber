import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyApPWaCUPzIjWlPqdMUVZihynA06DDMVR8"
        strokeWith={3}
        strokeColor="#222"
    />
)//onRead, callback
export default Directions;