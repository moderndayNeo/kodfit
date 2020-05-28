import React from 'react'
import './NotFound.css'
import NavBar from '../NavBar/NavBar'
import { FiChevronDown } from 'react-icons/fi'

export default function Elements() {
    return (
        <div className="NotFound">
            <div className="main">
                <h1 className="message">Sorry, page not found.</h1>
                <FiChevronDown className="chevron" />
            </div>
            <NavBar />
        </div>
    )
}
