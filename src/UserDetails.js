import React from 'react';
import './UserDetails.css';

function UserDetails() {
  return (
    <div className="UserDetails">
      <ul>
        <li className="profilePic"> <img src="https://i.picsum.photos/id/1/280/280.jpg" /></li>
        <li className="name"><span>Name</span></li>
        <li className="username"><span>username</span></li>

        <li className="organization">
          <i className="ic ic-organization"></i>
          <span>organization</span>
        </li>
        <li className="location">
          <i className="ic ic-location"></i>
          <span>location</span>
        </li>
        <li className="stars">
          <i className="ic ic-stars"></i>
          <span>stars</span>
        </li>
        <li className="repositories">
          <i className="ic ic-repositories"></i>
          <span>repositories</span>
        </li>
        <li className="followers">
          <i className="ic ic-followers"></i>
          <span>followers</span>
        </li>

      </ul>
      

    </div>
  );
}

export default UserDetails;
