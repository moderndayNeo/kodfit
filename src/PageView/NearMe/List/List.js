import React from "react";
import "./List.css";

export default function List({ title, data }) {
  return (
    <div className="List">
        <h3>List of {title}</h3>
        <ul className="content">
          {data &&
            data.map((gym, index) => (
              <li key={gym.id} className="item">
                {index + 1}. {gym.title}
                <br />
                {gym.distance && `Distance: ${gym.distance}m`}
                <br />
                {
                  gym.contacts && gym.contacts[0].phone ?
                     `Contact: ${gym.contacts[0].phone[0].value}` :
                     ''
                }
              </li>
            ))}
        </ul>
    </div>
  );
}
