import React, { useState, useEffect } from 'react';
import './NearMe.css';
import Map from './Map/Map';
import List from './List/List';
import SwitchButton from './SwitchButton/SwitchButton';

export default function NearMe() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({ lat: 51.5007, lng: -0.1246 });
  const [query, setQuery] = useState('gym');
  const [title, setTitle] = useState('Gyms');
  let endpoint = 'https://discover.search.hereapi.com/v1/discover';
  let queryParams = `at=${location.lat},${location.lng}&q=${query}&limit=15`;
  let apiKEy = 'apiKey=bYn1_nn2_CYDA29oVvcibuL4otpQL3F0HIF5aBnlcW4';

  useEffect(() => {
    let successPosition = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };
    let errorHandle = () => setLocation({ lat: 51.5007, lng: -0.1246 });
    navigator.geolocation.getCurrentPosition(successPosition, errorHandle);
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${endpoint}?${queryParams}&${apiKEy}`);
      const result = await response.json();
      setData(result.items);
    })();
  }, [queryParams, endpoint, apiKEy]);

  const updateQuery = (query, title) => {
    setQuery(query);
    setTitle(title);
  };

  return (
    <div className="NearMe">
        <Map className="map" data={data} location={location} />
        <div className="switch-buttons">
          <SwitchButton
            text="gym"
            onClick={() => updateQuery("gym", "Gyms")}
          />

          <SwitchButton
            text="personal trainer"
            onClick={() =>
              updateQuery("personal + trainer", "Personal Trainers")
            }
          />
        </div>
        <List title={title} data={data} />   
    </div>
  );
}
