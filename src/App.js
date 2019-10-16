import React, {useState, useEffect} from 'react';
// useEffect substitui o componentDidMount, componentDidUpdate e componentWillUnmount

// Com hooks a gente praticamente para de usar classes
// passa a exportar função
export default function App(){
const [location, setLocation] = useState({});

useEffect(() => {
  const watchId = navigator.geolocation.watchPosition(handlePositionReceived)
 
  return () => navigator.geolocation.clearWatch(watchId)
}, []);

function handlePositionReceived({coords}){
  const {latitude, longitude} = coords;


  setLocation({ latitude, longitude})
}
  return (
    <>
      Latitude: {location.latitude} <br/>
      Longitude: {location.longitude}  <br/>
    </>
  );
}
