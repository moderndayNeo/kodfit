import React, { useState } from "react";
import "./Map.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import InfoWindows from "./InfoWindows/InfoWindows";
const ADAM_API_KEY =`${process.env.REACT_APP_API_KEY_GOOGLE_LOGIN_ADAM}`
const MARIAN_API_KEY =`${process.env.REACT_APP_API_KEY_GOOGLE_LOGIN_MARIAN}`

export default function Map({ data, location }) {
    const [markerId, setMarkerId] = useState('');

  return (
    <div className="Map">
        <LoadScript
          id="load-script"
          googleMapsApiKey={ADAM_API_KEY}
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
  );
}
