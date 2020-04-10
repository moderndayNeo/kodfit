import React from 'react'
import { InfoWindow } from '@react-google-maps/api'

export default function InfoWindows({place}) {
  return (
    <InfoWindow position={place.position}>
      <>
        <h4>{place.title}</h4>
        {
          place.openingHours ? 
            place.openingHours[0]
              .text.map((hour,index)=> <p key={`${place.id}+${index}`}>{hour}</p>) :
            place.address.label
        }
      </>
    </InfoWindow>
  )
}
