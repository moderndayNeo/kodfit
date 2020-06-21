import React from 'react'
import './Detail.css'

export default function Detail({ title, value }) {
    return (
        <div className="Detail separator-center">
            <p className="title">{title}</p>
            <p>{value}</p>
        </div>
    )
}
