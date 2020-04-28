import React from 'react';
import AboutCard from './AboutCard/AboutCard'
import './AboutUs.css'
import {GiStairsGoal} from 'react-icons/gi';
import {IoIosPeople, IoIosRocket} from 'react-icons/io';

export default function AboutUs() {
  let properties = [
    {
      title: 'WHO WE ARE',
      description: 'We are a team of developers looking to make fitness easy!',
      icon: <GiStairsGoal />,
    },
    {
      title: 'OUR MISSION',
      description: 'To prove to you that a healthy life is right around the corner',
      icon: <IoIosRocket />,
    },
    {
      title: 'OUR TEAM',
      description: 'Part-time tech geeks, part-time athletes. We decided to bring the two together and create KODFIT!',
      icon: <IoIosPeople />,
    },
  ]
  return (
    <div className="container">
      <h1 className="block separator-center">About Us</h1>
      <div className='AboutUs'>
        {
          properties.map(prop => (
            <AboutCard 
              key={prop.title}
              title={prop.title}
              desc={prop.description}
              icon={prop.icon}
            />
          ))
        }
      </div>
    </div>
  );
}
