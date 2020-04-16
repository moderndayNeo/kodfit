import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./NearMeGyms.css";
import InfoWindows from "./InfoWindows/InfoWindows";

export default function NearMeGyms() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({ lat: 51.5007, lng: -0.1246 });
  const [markerId, setMarkerId] = useState("");
  const [query, setQuery] = useState("gym");
  const [title, setTitle] = useState("Gyms");

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
      const response = await fetch(
        `https://discover.search.hereapi.com/v1/discover?at=${location.lat},${location.lng}&q=${query}&limit=15&apiKey=bYn1_nn2_CYDA29oVvcibuL4otpQL3F0HIF5aBnlcW4`
      );
      const result = await response.json();
      setData(result.items);
    })();
  }, [location, query]);

  const updateQuery = (query, title) => {
    setQuery(query);
    setTitle(title);
  };

  return (
    <div className="NearMeGyms">
      <div className="containerOne">
        <div className="map containerOne-content">
          <LoadScript
            id="load-script"
            googleMapsApiKey="AIzaSyAHs3RiKCGgJhll5xXKjLFqprAi6-LW3Rc"
          >
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
                    onClick={() => setMarkerId(place.id)}
                  >
                    {markerId === place.id ? <InfoWindows place={place} /> : ""}
                  </Marker>
                ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="list-and-buttons">
          <div className="switch-buttons">
            <button
              className="toggleQuery"
              onClick={() => updateQuery("gym", "Gyms")}
            >
              Find your nearest gym
            </button>
            <button
              className="toggleQuery"
              onClick={() =>
                updateQuery("personal+trainer", "Personal Trainers")
              }
            >
              Find your nearest personal trainer
            </button>
          </div>
          <div className="list containerOne-content">
            <h3 className="listTitle">List of {title}</h3>
            <ul className="listContent">
              {data &&
                data.map((gym, index) => (
                  <li key="gym.title" className="listContent-item">
                    {index + 1}. {gym.title}
                    <br />
                    Distance: {gym.distance}m
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
