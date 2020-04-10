import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import './NearMeGyms.css';
import InfoWindows from './InfoWindows/InfoWindows'

export default function NearMeGyms() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({ lat: 51.5007, lng: -0.1246 });
  const [markerId, setMarkerId] = useState('')
  useEffect(() => {
    let successPosition = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }
    let errorHandle = () => setLocation({ lat: 51.5007, lng: -0.1246 });
    navigator.geolocation.getCurrentPosition(successPosition, errorHandle);
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://discover.search.hereapi.com/v1/discover?at=${location.lat},${location.lng}&q=gym&limit=15&apiKey=${process.env.REACT_APP_HERE_API}`
      );
      const result = await response.json();
      setData(result.items);
    })();
  }, [location]);

  return (
    <div className="NearMeGyms">
      <div className="containerOne">
        <div className="map containerOne-content">
          <LoadScript id="load-script" googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
            <GoogleMap
              id="gmap"
              zoom={13}
              center={location}
              mapContainerClassName="map"
            >
              {data &&
                data.map((place) => (
                  <Marker
                    key={place.id}
                    position={place.position}
                    onClick={() => setMarkerId(place.id)}>
                      {
                        markerId === place.id ? <InfoWindows place={place} /> : ''
                      }                                         
                    </Marker>
                ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="list containerOne-content">
          <h3 className="listTitle">List of Gyms</h3>
          <ul className="listContent">
            <li className="listContent-item">gym A</li>
            <li className="listContent-item">gym B</li>
            <li className="listContent-item">gym C</li>
            <li className="listContent-item">gym D</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
