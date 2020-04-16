import React from 'react';
import './AboutCard.css'


export default function AboutCard({title, desc, icon}) {
  return (
    <div className='AboutCard'>
      <div className="icon">
        {icon}
      </div>
      <div className='title'>{title}</div>
      <p>{desc}</p>
    </div>
  )
}
