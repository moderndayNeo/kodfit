import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarButton.css'

export default function NavBarButton({ link, name, icon }) {
  return (
    <NavLink to={`/dashboard/${link}`} className="NavBarButton" activeClassName='active'>
      <div className="icon">
        { icon }
      </div>
      { name.toUpperCase() }
    </NavLink>
  )
}
