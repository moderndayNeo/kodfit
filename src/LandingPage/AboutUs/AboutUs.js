import React from 'react';
import AboutCard from './AboutCard/AboutCard'
import './AboutUs.css'
import {GiStairsGoal} from 'react-icons/gi';
import {IoIosPeople, IoIosRocket} from 'react-icons/io';

export default function AboutUs() {
  let properties = [
    {
      title: 'WHO WE ARE',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius dignissimos, doloribus quo autem ea aspernatur dolore facere ratione corrupti nisi! Tempora animi, corrupti quas necessitatibus pariatur corporis eveniet saepe?',
      icon: <GiStairsGoal />,
    },
    {
      title: 'OUR MISSION',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius dignissimos, doloribus quo autem ea aspernatur dolore facere ratione corrupti nisi! Tempora animi, corrupti quas necessitatibus pariatur corporis eveniet saepe?',
      icon: <IoIosRocket />,
    },
    {
      title: 'OUR TEAM',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius dignissimos, doloribus quo autem ea aspernatur dolore facere ratione corrupti nisi! Tempora animi, corrupti quas necessitatibus pariatur corporis eveniet saepe?',
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
