import React from 'react';
import './AboutCard.css'


export default function AboutCard({title, desc, icon}) {
  return (
    <div className="AboutCard">
      <div className="icon">
        {icon}
      </div>
      <h3 className="title separator-center">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
